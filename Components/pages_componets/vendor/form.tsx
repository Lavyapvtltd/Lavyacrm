import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CreateMembership } from "Components/slices/membership/thunk";

const VendorForm = () => {
  const dispatch: any = useDispatch();
  const [membership, setMembership] = useState([
    {
      name: "",
      email: "",
      mobile: "",
      totalAmount: "",
      totalSale: "",
      details: [],
    },
  ]);

  const handleChange = (e: any, index: any) => {
    const { name, value } = e.target;
    setMembership((prevMembership: any) => {
      const updatedMembership: any = [...prevMembership];
      updatedMembership[index][name] = value;
      return updatedMembership;
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your submission logic here
  };

  const addRow = () => {
    setMembership((prevMembership: any) => {
      const updatedMembership: any = [...prevMembership];
      updatedMembership.push({
        name: "",
        email: "",
        mobile: "",
        totalAmount: "",
        totalSale: "",
        details: [],
      });
      return updatedMembership;
    });
  };

  return (
    <div className="container-fluid">
      <Card>
        <Form
          id="contactlist-form"
          autoComplete="off"
          className="needs-formik p-2"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="d-flex flex-column gap-3">
            {membership.map((item, index) => (
              <div key={index}>
                <Row className="mb-3">
                  <Col>
                    <Form.Label htmlFor={`name${index}`} className="form-label">
                      Name
                    </Form.Label>
                    <Form.Control
                      name="name"
                      id={`name${index}`}
                      placeholder="Enter Name..."
                      type="text"
                      onChange={(e) => handleChange(e, index)}
                      value={item.name}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Label
                      htmlFor={`email${index}`}
                      className="form-label"
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      name="email"
                      id={`email${index}`}
                      placeholder="Enter Email..."
                      type="email"
                      onChange={(e) => handleChange(e, index)}
                      value={item.email}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Label
                      htmlFor={`mobile${index}`}
                      className="form-label"
                    >
                      Mobile
                    </Form.Label>
                    <Form.Control
                      name="mobile"
                      id={`mobile${index}`}
                      placeholder="Enter Mobile..."
                      type="text"
                      onChange={(e) => handleChange(e, index)}
                      value={item.mobile}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Label
                      htmlFor={`totalSale${index}`}
                      className="form-label"
                    >
                      Total Sale
                    </Form.Label>
                    <Form.Control
                      name="totalSale"
                      id={`totalSale${index}`}
                      placeholder="Enter Total Sale..."
                      type="text"
                      onChange={(e) => handleChange(e, index)}
                      value={item.totalSale}
                      required
                    />
                  </Col>
                  <Col>
                    <Form.Label
                      htmlFor={`totalAmount${index}`}
                      className="form-label"
                    >
                      Total Amount
                    </Form.Label>
                    <Form.Control
                      name="totalAmount"
                      id={`totalAmount${index}`}
                      placeholder="Enter Total Amount..."
                      type="text"
                      onChange={(e) => handleChange(e, index)}
                      value={item.totalAmount}
                      required
                    />
                  </Col>
                </Row>
              </div>
            ))}
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default VendorForm;
