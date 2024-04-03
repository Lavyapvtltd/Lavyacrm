import React, { useState, useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCategory,
  PostSubCategory,
} from "Components/slices/category/thunk";
import { Card, Col, Row } from "react-bootstrap";
import { imagebaseURL } from "Components/helpers/url_helper";
import moment from "moment";
import { AssigneOrder, UpdateOrder } from "Components/slices/order/thunk";
import { GetAllHubs } from "Components/slices/hub/thunk";
import { GetAllPartner } from "Components/slices/partner/thunk";

const status = [
  "DELIVERED",
  "ORDERED",
  "ONTHEEWAY",
  "PROCCESSING",
  "FAILED",
  "DECLINED",
  "ASSIGNED",
];
const UpdateStatus = () => {
  const dispatch: any = useDispatch();
  const [showStatus, setShowStatus] = useState(true);
  const { selectedorder, partnerData } = useSelector((state: any) => ({
    selectedorder: state.order.selectedorder,
    partnerData: state.partner.partnerData,
  }));

  const formik: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      orderstatus: "",
      partner: "",
    },
    validationSchema: Yup.object({
      orderstatus: Yup.string().required("Please update status"),
    }),
    onSubmit: (values) => {
      dispatch(AssigneOrder(selectedorder._id, values, setShowStatus));
      formik.resetForm();
    },
  });

  useEffect(() => {
    dispatch(GetAllPartner());
  }, []);

  console.log("selectedorder:", selectedorder);
  return (
    <div className="container-fluid">
      <Col xl={12}>
        <Card>
          <Form
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
              <Row>
                <Row>
                  <Col md={4}>
                    <div>
                      <Form.Label
                        htmlFor="subCategoryId"
                        className="form-label"
                      >
                        Order Status
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="orderstatus"
                        id="orderstatus"
                        className="form-control"
                        type="text"
                        onChange={(e: any) =>
                          formik.setFieldValue("orderstatus", e.target.value)
                        }
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.unit && formik.errors.unit
                            ? true
                            : false
                        }
                        required
                      >
                        <option value="">Select Order Status Here</option>
                        {status.map((item: any) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </Form.Control>
                      {formik.touched.unit && formik.errors.unit ? (
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.unit}
                        </Form.Control.Feedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col md={4}>
                    <div>
                      <Form.Label
                        htmlFor="subCategoryId"
                        className="form-label"
                      >
                        Select Partner
                      </Form.Label>
                      <Form.Control
                        as="select"
                        name="partner"
                        id="partner"
                        className="form-control"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                          formik.touched.unit && formik.errors.unit
                            ? true
                            : false
                        }
                        required
                      >
                        <option value="">Select Partner</option>
                        {partnerData.map((item: any) => {
                          return (
                            <option value={JSON.stringify(item)}>
                              {item.name}
                            </option>
                          );
                        })}
                      </Form.Control>
                      {formik.touched.unit && formik.errors.unit ? (
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.unit}
                        </Form.Control.Feedback>
                      ) : null}
                    </div>
                  </Col>

                  <Col md={2} className="mt-4">
                    <Button
                      variant="secondary"
                      type="submit"
                      id="addNewContact"
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
                <h3 className="mt-5">Order Information</h3>

                <Row>
                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryName"
                      className="form-label"
                    >
                      Order No
                    </Form.Label>
                    <Col>
                      <Form.Control
                        className="form-control"
                        placeholder="Enter Name"
                        type="text"
                        value={selectedorder.order_no}
                        readOnly
                      />
                    </Col>
                  </Col>

                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryDescription"
                      className="form-label"
                    >
                      Order Status
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      placeholder="Enter Name"
                      type="text"
                      value={`${selectedorder.status}`}
                      readOnly
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryDescription"
                      className="form-label"
                    >
                      Ordered On
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      placeholder="Enter Name"
                      type="text"
                      value={moment(selectedorder.createdAt).format(
                        "MMM Do YY"
                      )}
                      readOnly
                    />
                  </Col>
                </Row>

                <h3 className="mt-5">Product Information</h3>
                {selectedorder.product.map((item: any) => {
                  console.log(item);
                  return (
                    <Row>
                      <Col md={4}>
                        <Form.Label
                          htmlFor="subCategoryName"
                          className="form-label"
                        >
                          Product name
                        </Form.Label>
                        <Row>
                          <Col md={2}>
                            <img
                              src={`${imagebaseURL}${item.image[0].filename}`}
                              width="32"
                              height={50}
                              alt=""
                              className="avatar-xs rounded-circle"
                            />
                          </Col>

                          <Col>
                            <Form.Control
                              className="form-control"
                              placeholder="Enter Name"
                              type="text"
                              value={item.name}
                              isInvalid={
                                formik.touched.subCategoryName &&
                                formik.errors.subCategoryName
                                  ? true
                                  : false
                              }
                              readOnly
                            />
                          </Col>
                        </Row>
                      </Col>

                      <Col md={4}>
                        <Form.Label
                          htmlFor="subCategoryDescription"
                          className="form-label"
                        >
                          Product Unit
                        </Form.Label>
                        <Form.Control
                          className="form-control"
                          placeholder="Enter Name"
                          type="text"
                          value={`${item.unit} ${item.unitValue}`}
                          readOnly
                        />
                      </Col>
                      <Col md={4}>
                        <Form.Label
                          htmlFor="subCategoryDescription"
                          className="form-label"
                        >
                          Product Price
                        </Form.Label>
                        <Form.Control
                          className="form-control"
                          placeholder="Enter Name"
                          type="text"
                          value={item.price}
                          readOnly
                        />
                      </Col>
                    </Row>
                  );
                })}
                <h3 className="mt-5">User Information</h3>
                <Row>
                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryName"
                      className="form-label"
                    >
                      User name
                    </Form.Label>
                    <Col>
                      <Form.Control
                        className="form-control"
                        placeholder="Enter Name"
                        type="text"
                        value={selectedorder.user.name}
                        readOnly
                      />
                    </Col>
                  </Col>
                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryDescription"
                      className="form-label"
                    >
                      User Email
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      placeholder="Enter Name"
                      type="text"
                      value={`${selectedorder.user.email}`}
                      readOnly
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryDescription"
                      className="form-label"
                    >
                      User Contact
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      placeholder="Enter Name"
                      type="text"
                      value={selectedorder.user.contact}
                      readOnly
                    />
                  </Col>
                </Row>
                <h3 className="mt-5">Shipping Information</h3>
                <Row>
                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryName"
                      className="form-label"
                    >
                      Shipping Full Address
                    </Form.Label>
                    <Col>
                      <span className="form-control">
                        {selectedorder.shippingaddress.location}
                      </span>
                    </Col>
                  </Col>

                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryDescription"
                      className="form-label"
                    >
                      House number / Flat Number
                    </Form.Label>

                    <span className="form-control">
                      {selectedorder.shippingaddress.street}
                    </span>
                  </Col>

                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryDescription"
                      className="form-label"
                    >
                      Society / Colony name
                    </Form.Label>

                    <span className="form-control">
                      {selectedorder.shippingaddress.address}
                    </span>
                  </Col>
                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryDescription"
                      className="form-label"
                    >
                      Landmark
                    </Form.Label>
                    <span className="form-control">
                      {selectedorder.shippingaddress.landmark}
                    </span>
                  </Col>
                  <Col md={4}>
                    <Form.Label
                      htmlFor="subCategoryDescription"
                      className="form-label"
                    >
                      Alternative Contact Number
                    </Form.Label>
                    <span className="form-control">
                      {selectedorder.shippingaddress.alternatenumber}
                    </span>
                  </Col>
                </Row>
              </Row>
            </div>
          </Form>
        </Card>
      </Col>
      {/* this is the sub category section */}
    </div>
  );
};

export default UpdateStatus;
