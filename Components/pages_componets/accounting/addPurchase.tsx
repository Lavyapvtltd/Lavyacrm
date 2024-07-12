import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CreateMembership } from "Components/slices/membership/thunk";

const AddPurchase = () => {
  const dispatch = useDispatch();
  const [membership, setMembership] = useState([
    {
      details: [
        {
          totalSale: "",
          totalAmount: "",
          totalRefund: "",
          offerBalance: "",
          addPurchase: "",
          addExpenses: "",
          vendor: "",
          productName: "",
          productQuantity: "",
          productPrice: "",
          billNo: "",
          billDate: "",
          sgst: "",
          cgst: "",
          igst: "",
          totalAmountWithoutTax: "",
          totalAmountWithTax: "",
        },
      ],
    },
  ]);

  return (
    <div className="container-fluid">
      <Card>
      <Form
        id="contactlist-form"
        autoComplete="off"
        className="needs-formik p-2"
        noValidate
      >
        <div className="d-flex flex-column gap-6">
          {membership.map((item, index) => (
            <div key={index}>
              {item.details.map((detail, detailIndex) => (
                <Row key={detailIndex} className="mb-3">
                  <Col md={4}>
                    <Form.Label htmlFor="totalSale" className="form-label">
                      Total Sale
                    </Form.Label>
                    <Form.Control
                      name="totalSale"
                      id="totalSale"
                      placeholder="Enter Total Sale..."
                      type="text"
                      value={detail.totalSale}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="totalAmount" className="form-label">
                      Total Amount
                    </Form.Label>
                    <Form.Control
                      name="totalAmount"
                      id="totalAmount"
                      placeholder="Enter Total Amount..."
                      type="text"
                      
                      value={detail.totalAmount}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="totalRefund" className="form-label">
                      Total Refund
                    </Form.Label>
                    <Form.Control
                      name="totalRefund"
                      id="totalRefund"
                      placeholder="Enter Total Refund..."
                      type="text"
                      
                      value={detail.totalRefund}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="offerBalance" className="form-label">
                      Offer Balance
                    </Form.Label>
                    <Form.Control
                      name="offerBalance"
                      id="offerBalance"
                      placeholder="Enter Offer Balance..."
                      type="text"
                      
                      value={detail.offerBalance}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="addPurchase" className="form-label">
                      Add Purchase
                    </Form.Label>
                    <Form.Control
                      name="addPurchase"
                      id="addPurchase"
                      placeholder="Enter Add Purchase..."
                      type="text"
                      
                      value={detail.addPurchase}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="addExpenses" className="form-label">
                      Add Expenses
                    </Form.Label>
                    <Form.Control
                      name="addExpenses"
                      id="addExpenses"
                      placeholder="Enter Add Expenses..."
                      type="text"
                      
                      value={detail.addExpenses}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="vendor" className="form-label">
                      Select Vendor
                    </Form.Label>
                    <Form.Control
                      name="vendor"
                      id="vendor"
                      as="select"
                      
                      value={detail.vendor}
                      required
                    >
                      <option value="">Select Vendor</option>
                      {/* Add options for vendors */}
                    </Form.Control>
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="productName" className="form-label">
                      Enter Product Name
                    </Form.Label>
                    <Form.Control
                      name="productName"
                      id="productName"
                      placeholder="Enter Product Name..."
                      type="text"
                      
                      value={detail.productName}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="productQuantity" className="form-label">
                      Enter Product Quantity
                    </Form.Label>
                    <Form.Control
                      name="productQuantity"
                      id="productQuantity"
                      placeholder="Enter Product Quantity..."
                      type="text"
                      
                      value={detail.productQuantity}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="productPrice" className="form-label">
                      Enter Product Price
                    </Form.Label>
                    <Form.Control
                      name="productPrice"
                      id="productPrice"
                      placeholder="Enter Product Price..."
                      type="text"
                      
                      value={detail.productPrice}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="billNo" className="form-label">
                      Bill No
                    </Form.Label>
                    <Form.Control
                      name="billNo"
                      id="billNo"
                      placeholder="Enter Bill No..."
                      type="text"
                      
                      value={detail.billNo}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="billDate" className="form-label">
                      Bill Date
                    </Form.Label>
                    <Form.Control
                      name="billDate"
                      id="billDate"
                      placeholder="Enter Bill Date..."
                      type="text"
                      
                      value={detail.billDate}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="sgst" className="form-label">
                      SGST
                    </Form.Label>
                    <Form.Control
                      name="sgst"
                      id="sgst"
                      placeholder="Enter SGST..."
                      type="text"
                      
                      value={detail.sgst}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="cgst" className="form-label">
                      CGST
                    </Form.Label>
                    <Form.Control
                      name="cgst"
                      id="cgst"
                      placeholder="Enter cgst..."
                      type="text"
                      
                      value={detail.cgst}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="igst" className="form-label">
                      IGST
                    </Form.Label>
                    <Form.Control
                      name="igst"
                      id="igst"
                      placeholder="Enter igst..."
                      type="text"
                      
                      value={detail.igst}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="totalAmountWithoutTax" className="form-label">
                      Total Amount Without Tax
                    </Form.Label>
                    <Form.Control
                      name="totalAmountWithoutTax"
                      id="totalAmountWithoutTax"
                      placeholder="Enter Total Amount Without Tax..."
                      type="text"
                      
                      value={detail.totalAmountWithoutTax}
                      required
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label htmlFor="totalAmountWithTax" className="form-label">
                      Total Amount With Tax
                    </Form.Label>
                    <Form.Control
                      name="totalAmountWithTax"
                      id="totalAmountWithTax"
                      placeholder="Enter Total Amount With Tax..."
                      type="text"
                      
                      value={detail.totalAmountWithTax}
                      required
                    />
                  </Col>
                </Row>
              ))}
            </div>
          ))}
          <Button variant="secondary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </Card>

    </div>
  );
};

export default AddPurchase;