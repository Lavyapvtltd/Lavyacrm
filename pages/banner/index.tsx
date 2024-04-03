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

const index = () => {
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
    onSubmit: (values: any) => {
      dispatch(Uploadbanner(values));
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
              Upload
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
