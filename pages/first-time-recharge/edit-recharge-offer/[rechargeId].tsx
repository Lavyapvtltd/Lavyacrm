import React, { useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { Card, Col } from "react-bootstrap";
import { EditFirstTimeRechargeOffer } from "Components/slices/first_time_recharge/thunk";
import { useRouter } from "next/router";

const EditRechargeForm = ({ rechargeId }: any) => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const [active, setActive] = useState<boolean>(false);
  const { selected } = useSelector((state: any) => ({
    selected: state.offer.selectedoffer,
  }));
  const formik: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      value: selected.value,
      cashback: selected.cashback,
      validity:selected.validity
    },
    validationSchema: Yup.object({
      value: Yup.string().required("Please enter value."),
      cashback: Yup.string().required("Please enter cashback."),
      validity: Yup.string().required("Please validity."),
    }),
    onSubmit: (values) => {
      dispatch(EditFirstTimeRechargeOffer(values, rechargeId, router));
      formik.resetForm();
    },
  });

  return (
    <div className="container-fluid">
      <Col xl={12}>
        <Card>
          <Form
            id="contactlist-form"
            autoComplete="off"
            className="needs-formik p-2"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
              return false;
            }}
          >
            <div className="d-flex flex-column gap-3">
              <div>
                <Form.Label htmlFor="name" className="form-label">
                  Recharge Value
                </Form.Label>
                <Form.Control
                  name="value"
                  id="name"
                  className="form-control"
                  placeholder="Enter recharge value"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.value}
                  isInvalid={
                    formik.touched.value && formik.errors.value ? true : false
                  }
                  required
                />
                {formik.touched.value && formik.errors.value ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.value}
                  </Form.Control.Feedback>
                ) : null}
              </div>

              <div>
                <Form.Label htmlFor="email" className="form-label">
                  Cashback Offer Value
                </Form.Label>
                <Form.Control
                  name="cashback"
                  id="cashback"
                  className="form-control"
                  placeholder="Enter offer value"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cashback}
                  isInvalid={
                    formik.touched.cashback && formik.errors.cashback
                      ? true
                      : false
                  }
                  required
                />
                {formik.touched.cashback && formik.errors.cashback ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.cashback}
                  </Form.Control.Feedback>
                ) : null}
              </div>

              <div>
                <Form.Label htmlFor="email" className="form-label">
                  Validity
                </Form.Label>
                <Form.Control
                  name="validity"
                  id="validity"
                  className="form-control"
                  placeholder="Enter validity"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.validity}
                  isInvalid={
                    formik.touched.validity && formik.errors.validity
                      ? true
                      : false
                  }
                  required
                />
                {formik.touched.validity && formik.errors.validity ? (
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.validity}
                  </Form.Control.Feedback>
                ) : null}
              </div>
              

              <div className="text-end">
                <Button variant="secondary" type="submit" id="addNewContact">
                  Save
                </Button>
              </div>
            </div>
          </Form>
        </Card>
      </Col>
      {/* this is the sub category section */}
    </div>
  );
};

export const getServerSideProps = (context: any) => {
  const { rechargeId } = context.query;

  return { props: { rechargeId } };
};

export default EditRechargeForm;
