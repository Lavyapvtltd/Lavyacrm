import React, { ReactElement, useCallback, useState } from "react";
import Head from "next/head";
import Layout from "@common/Layout";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { Col } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { Uploadbanner } from "Components/slices/banner/thunk";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import {
    UPDATE_BANNER,
    baseURL,
} from "../../../Components/helpers/url_helper";
import { useParams } from "next/navigation";

const index = () => {
  const params = useParams();
  const id = params?.bannerid;
  console.log(id,"df");
  const dispatch: any = useDispatch();
  const router = useRouter();
  const formik: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      images: [],
    },
    validationSchema: Yup.object({
      images: Yup.array().required("Required"),
    }),
    onSubmit: async(values: any) => {
        try {
            const form = new FormData();
            values.images.map((item: any) => form.append("upload", item));
            const options = {
              method: "PATCH",
              url: `${baseURL}${UPDATE_BANNER}${id}`,
              headers: {
                "Content-Type": "multipart/form-data",
              },
              data: form,
            };
            const apifetch = await axios.request(options);
            const response: any = await apifetch;
            if (response.baseResponse.status === 1) {
              Swal.fire({
                title: "Good job!",
                text: response.baseResponse.message,
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "error",
                text: response.baseResponse.message,
                icon: "error",
              });
            }
            return response;
          } catch (error: any) {
            console.log(error);
            Swal.fire({
              title: "error!",
              text: error,
              icon: "error",
            });
          }
      formik.resetForm();
      // alert("Submitted");
    },
  });
  const onDrop = useCallback((acceptedFiles: any) => {
    const images = [...formik.values.images, ...acceptedFiles];
    formik.setFieldValue("images", images);
  }, []);
  console.log(formik.values);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <React.Fragment>
      <Head>
        <title>Offer | Lavya -Admin </title>
      </Head>
      <div className="page-content">
        <form onSubmit={formik.handleSubmit}>
          <h1>Upload Files</h1>

          <Col>
            <div className="d-flex flex-column gap-3 m-3">
              <div className="position-relative d-inline-block">
                <div className="dropzone text-center " {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>
                    {isDragActive
                      ? "Drop the files here ..."
                      : "Drag 'n' drop some files here, or click to select files"}
                  </p>
                </div>
                Select Banner Images
              </div>
            </div>
            {formik.values.images && formik.values.images.length > 0 && (
              <div
                className="mt-2"
                style={{ maxHeight: "100px", overflow: "auto" }}
              >
                <h5>Selected Images:</h5>
                <div className="d-flex flex-wrap">
                  {formik.values.images.map((image: any, index: any) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Selected Image ${index + 1}`}
                      className="img-thumbnail m-2"
                      width="100px"
                    />
                  ))}
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </Col>
        </form>
      </div>
    </React.Fragment>
  );
};

index.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default index;
