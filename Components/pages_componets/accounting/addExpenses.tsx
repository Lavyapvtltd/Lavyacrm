import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CreateMembership } from "Components/slices/membership/thunk";

const AddExpenses = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
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
  });


  return (
    <div className="container-fluid">
      <Card>
        <Form  autoComplete="off" className="p-2">
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="totalSale">Total Sale</Form.Label>
              <Form.Control
                name="totalSale"
                id="totalSale"
                placeholder="Enter Total Sale..."
                type="text"
                value={formData.totalSale}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="totalAmount">Total Amount</Form.Label>
              <Form.Control
                name="totalAmount"
                id="totalAmount"
                placeholder="Enter Total Amount..."
                type="text"
                
                value={formData.totalAmount}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="totalRefund">Total Refund</Form.Label>
              <Form.Control
                name="totalRefund"
                id="totalRefund"
                placeholder="Enter Total Refund..."
                type="text"
                
                value={formData.totalRefund}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="offerBalance">Offer Balance</Form.Label>
              <Form.Control
                name="offerBalance"
                id="offerBalance"
                placeholder="Enter Offer Balance..."
                type="text"
                
                value={formData.offerBalance}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="addPurchase">Add Purchase</Form.Label>
              <Form.Control
                name="addPurchase"
                id="addPurchase"
                placeholder="Enter Add Purchase..."
                type="text"
                
                value={formData.addPurchase}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="addExpenses">Add Expenses</Form.Label>
              <Form.Control
                name="addExpenses"
                id="addExpenses"
                placeholder="Enter Add Expenses..."
                type="text"
                
                value={formData.addExpenses}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="vendor">Select Vendor</Form.Label>
              <Form.Control
                name="vendor"
                id="vendor"
                as="select"
                
                value={formData.vendor}
                required
              >
                <option value="">Select Vendor</option>
                {/* Add options for vendors */}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label htmlFor="productName">Product Name</Form.Label>
              <Form.Control
                name="productName"
                id="productName"
                placeholder="Enter Product Name..."
                type="text"
                
                value={formData.productName}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="productQuantity">Product Quantity</Form.Label>
              <Form.Control
                name="productQuantity"
                id="productQuantity"
                placeholder="Enter Product Quantity..."
                type="text"
                
                value={formData.productQuantity}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="productPrice">Product Price</Form.Label>
              <Form.Control
                name="productPrice"
                id="productPrice"
                placeholder="Enter Product Price..."
                type="text"
                
                value={formData.productPrice}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="billNo">Bill No</Form.Label>
              <Form.Control
                name="billNo"
                id="billNo"
                placeholder="Enter Bill No..."
                type="text"
                
                value={formData.billNo}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="billDate">Bill Date</Form.Label>
              <Form.Control
                name="billDate"
                id="billDate"
                placeholder="Enter Bill Date..."
                type="text"
                
                value={formData.billDate}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="sgst">SGST</Form.Label>
              <Form.Control
                name="sgst"
                id="sgst"
                placeholder="Enter SGST..."
                type="text"
                
                value={formData.sgst}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="cgst">CGST</Form.Label>
              <Form.Control
                name="cgst"
                id="cgst"
                placeholder="Enter CGST..."
                type="text"
                
                value={formData.cgst}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="igst">IGST</Form.Label>
              <Form.Control
                name="igst"
                id="igst"
                placeholder="Enter IGST..."
                type="text"
                
                value={formData.igst}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label htmlFor="totalAmountWithoutTax">Total Amount Without Tax</Form.Label>
              <Form.Control
                name="totalAmountWithoutTax"
                id="totalAmountWithoutTax"
                placeholder="Enter Total Amount Without Tax..."
                type="text"
                
                value={formData.totalAmountWithoutTax}
                required
              />
            </Col>
            <Col>
              <Form.Label htmlFor="totalAmountWithTax">Total Amount With Tax</Form.Label>
              <Form.Control
                name="totalAmountWithTax"
                id="totalAmountWithTax"
                placeholder="Enter Total Amount With Tax..."
                type="text"
                
                value={formData.totalAmountWithTax}
                required
              />
            </Col>
          </Row>
          <Button variant="secondary" type="submit">Save</Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddExpenses;
