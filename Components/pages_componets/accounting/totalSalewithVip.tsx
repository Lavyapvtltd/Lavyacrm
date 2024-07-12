import React from "react";
import { useRouter } from "next/router";
import { Col, Table } from "react-bootstrap";

const TotalSaleWithVip = () => {
  const router = useRouter();
  
  const data = [
    {
      id: 1,
      productName: "Product 1",
      unit: "10",
      unitPrice: "100",
      totalAmountWithoutTax: "1000",
      sgstT5: "50",
      cgstT6: "50",
      igstT7: "100",
      taxAmountT8: "200",
      totalAmountWithTax: "1200",
    },
    {
      id: 2,
      productName: "Product 2",
      unit: "5",
      unitPrice: "200",
      totalAmountWithoutTax: "1000",
      sgstT5: "50",
      cgstT6: "50",
      igstT7: "100",
      taxAmountT8: "200",
      totalAmountWithTax: "1200",
    },
  ];

  return (
    <div>
      <Col xl={12}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SR NO</th>
              <th>Product name (C8)</th>
              <th>Unit (C9)</th>
              <th>Unit Price (C10)</th>
              <th>Total amount (without tax) (C11)</th>
              <th>SGST (T5)</th>
              <th>CGST (T6)</th>
              <th>IGST (T7)</th>
              <th>Tax amount (T8)</th>
              <th>Total amount (with tax) (C14)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.unit}</td>
                <td>{item.unitPrice}</td>
                <td>{item.totalAmountWithoutTax}</td>
                <td>{item.sgstT5}</td>
                <td>{item.cgstT6}</td>
                <td>{item.igstT7}</td>
                <td>{item.taxAmountT8}</td>
                <td>{item.totalAmountWithTax}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </div>
  );
};

export default TotalSaleWithVip;
