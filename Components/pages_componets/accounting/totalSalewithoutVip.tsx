import React from "react";
import { useRouter } from "next/router";
import { Card, Col, Row, Table } from "react-bootstrap";

const TotalSaleWithOutVip = () => {
  const router = useRouter();
  
  const data = [
    {
      id: 1,
      productName: "Product 1",
      unit: "10",
      unitPrice: "100",
      totalAmountWithoutTax: "1000",
      sgstT1: "50",
      sgstT2: "50",
      igstT3: "100",
      taxAmountT4: "200",
      totalAmountWithTax: "1200",
    },
    {
      id: 2,
      productName: "Product 2",
      unit: "5",
      unitPrice: "200",
      totalAmountWithoutTax: "1000",
      sgstT1: "50",
      sgstT2: "50",
      igstT3: "100",
      taxAmountT4: "200",
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
              <th>Product name</th>
              <th>Unit</th>
              <th>Unit Price</th>
              <th>Total amount (without tax)</th>
              <th>SGST (T1)</th>
              <th>SGST (T2)</th>
              <th>IGST (T3)</th>
              <th>Tax amount (T4)</th>
              <th>Total amount (with tax) (C7)</th>
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
                <td>{item.sgstT1}</td>
                <td>{item.sgstT2}</td>
                <td>{item.igstT3}</td>
                <td>{item.taxAmountT4}</td>
                <td>{item.totalAmountWithTax}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </div>
  );
};

export default TotalSaleWithOutVip;
