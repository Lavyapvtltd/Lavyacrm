import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CreateMembership } from "Components/slices/membership/thunk";

const AddExpenses = () => {
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

  const handleChange = (e, index, detailIndex) => {
    const { name, value } = e.target;
    setMembership((prevMembership) => {
      const updatedMembership = [...prevMembership];
      if (name === "title") {
        updatedMembership[index].title = value;
      } else {
        updatedMembership[index].details[detailIndex][name] = value;
      }
      return updatedMembership;
    });
  };

  const calculateTotalBalance = (detail) => {
    const { totalAmount, addPurchase, addExpenses, totalRefund, offerBalance } = detail;
    return (
      parseFloat(totalAmount || 0) -
      (parseFloat(addPurchase || 0) +
        parseFloat(addExpenses || 0) +
        parseFloat(totalRefund || 0) +
        parseFloat(offerBalance || 0))
    ).toFixed(2);
  };

  const handleSubmit = () => {
    const arrayToSubmit = membership.map((item) => ({
      membershipTitle: item.title,
      details: item.details.map((detail) => ({
        totalSale: detail.totalSale,
        totalAmount: detail.totalAmount,
        totalRefund: detail.totalRefund,
        offerBalance: detail.offerBalance,
        addPurchase: detail.addPurchase,
        addExpenses: detail.addExpenses,
        totalBalance: calculateTotalBalance(detail),
        vendor: detail.vendor,
        productName: detail.productName,
        productQuantity: detail.productQuantity,
        productPrice: detail.productPrice,
        billNo: detail.billNo,
        billDate: detail.billDate,
        sgst: detail.sgst,
        cgst: detail.cgst,
        igst: detail.igst,
        totalAmountWithoutTax: detail.totalAmountWithoutTax,
        totalAmountWithTax: detail.totalAmountWithTax,
      })),
    }));
    dispatch(CreateMembership(arrayToSubmit));
  };
  return (
    <div className="container-fluid">
      <Card>
      <Form
        id="contactlist-form"
        autoComplete="off"
        className="needs-formik p-2"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="d-flex flex-column gap-6">
          {membership.map((item, index) => (
            <div key={index}>
              {item.details.map((detail, detailIndex) => (
                <div key={detailIndex}>
                  <Row className="mb-3">
                    <Col>
                      <Form.Label htmlFor="totalSale" className="form-label">
                        Total Sale
                      </Form.Label>
                      <Form.Control
                        name="totalSale"
                        id="totalSale"
                        placeholder="Enter Total Sale..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.totalSale}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="totalAmount" className="form-label">
                        Total Amount
                      </Form.Label>
                      <Form.Control
                        name="totalAmount"
                        id="totalAmount"
                        placeholder="Enter Total Amount..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.totalAmount}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="totalRefund" className="form-label">
                        Total Refund
                      </Form.Label>
                      <Form.Control
                        name="totalRefund"
                        id="totalRefund"
                        placeholder="Enter Total Refund..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.totalRefund}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Label htmlFor="offerBalance" className="form-label">
                        Offer Balance
                      </Form.Label>
                      <Form.Control
                        name="offerBalance"
                        id="offerBalance"
                        placeholder="Enter Offer Balance..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.offerBalance}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="addPurchase" className="form-label">
                        Add Purchase
                      </Form.Label>
                      <Form.Control
                        name="addPurchase"
                        id="addPurchase"
                        placeholder="Enter Add Purchase..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.addPurchase}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="addExpenses" className="form-label">
                        Add Expenses
                      </Form.Label>
                      <Form.Control
                        name="addExpenses"
                        id="addExpenses"
                        placeholder="Enter Add Expenses..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.addExpenses}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Label htmlFor="vendor" className="form-label">
                        Select Vendor
                      </Form.Label>
                      <Form.Control
                        name="vendor"
                        id="vendor"
                        as="select"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.vendor}
                        required
                      >
                        <option value="">Select Vendor</option>
                        {/* Add options for vendors */}
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Label htmlFor="productName" className="form-label">
                        Enter Product Name
                      </Form.Label>
                      <Form.Control
                        name="productName"
                        id="productName"
                        placeholder="Enter Product Name..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.productName}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="productQuantity" className="form-label">
                        Enter Product Quantity
                      </Form.Label>
                      <Form.Control
                        name="productQuantity"
                        id="productQuantity"
                        placeholder="Enter Product Quantity..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.productQuantity}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Label htmlFor="productPrice" className="form-label">
                        Enter Product Price
                      </Form.Label>
                      <Form.Control
                        name="productPrice"
                        id="productPrice"
                        placeholder="Enter Product Price..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.productPrice}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="billNo" className="form-label">
                        Bill No
                      </Form.Label>
                      <Form.Control
                        name="billNo"
                        id="billNo"
                        placeholder="Enter Bill No..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.billNo}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="billDate" className="form-label">
                        Bill Date
                      </Form.Label>
                      <Form.Control
                        name="billDate"
                        id="billDate"
                        placeholder="Enter Bill Date..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.billDate}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Label htmlFor="sgst" className="form-label">
                        SGST
                      </Form.Label>
                      <Form.Control
                        name="sgst"
                        id="sgst"
                        placeholder="Enter SGST..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.sgst}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="cgst" className="form-label">
                        CGST
                      </Form.Label>
                      <Form.Control
                        name="cgst"
                        id="cgst"
                        placeholder="Enter CGST..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.cgst}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="igst" className="form-label">
                        IGST
                      </Form.Label>
                      <Form.Control
                        name="igst"
                        id="igst"
                        placeholder="Enter IGST..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.igst}
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Label htmlFor="totalAmountWithoutTax" className="form-label">
                        Total Amount Without Tax
                      </Form.Label>
                      <Form.Control
                        name="totalAmountWithoutTax"
                        id="totalAmountWithoutTax"
                        placeholder="Enter Total Amount Without Tax..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.totalAmountWithoutTax}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label htmlFor="totalAmountWithTax" className="form-label">
                        Total Amount With Tax
                      </Form.Label>
                      <Form.Control
                        name="totalAmountWithTax"
                        id="totalAmountWithTax"
                        placeholder="Enter Total Amount With Tax..."
                        type="text"
                        onChange={(e) => handleChange(e, index, detailIndex)}
                        value={detail.totalAmountWithTax}
                        required
                      />
                    </Col>
                  </Row>
                </div>
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

export default AddExpenses;