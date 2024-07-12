import React from "react";
import { Col, Table } from "react-bootstrap";

const ExpensesTable = () => {
  const data = [
    {
      srNo: 1,
      expensesName: "Expense 1",
      expensesUserName: "User 1",
      expensesBillNo: "B001",
      expensesBillDate: "2024-05-26",
      amountWithoutTax: "1000",
      expensesSgst: "50",
      expensesCgst: "50",
      expensesIgst: "100",
      expensesResion: "Reason 1",
      expensesAmountWithTax: "1200",
      expensesPaymentType: "Paid",
      expensesPaymentUtrNo: "UTR001",
    },
    {
      srNo: 2,
      expensesName: "Expense 2",
      expensesUserName: "User 2",
      expensesBillNo: "B002",
      expensesBillDate: "2024-05-26",
      amountWithoutTax: "2000",
      expensesSgst: "100",
      expensesCgst: "100",
      expensesIgst: "200",
      expensesResion: "Reason 2",
      expensesAmountWithTax: "2400",
      expensesPaymentType: "Pending",
      expensesPaymentUtrNo: "",
    },
  ];

  return (
    <div>
      <Col xl={12}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SR NO</th>
              <th>EXPENSES NAME</th>
              <th>EXPENSES USER NAME</th>
              <th>EXPENSES BILL NO</th>
              <th>EXPENSES BILL DATE</th>
              <th>AMOUNT WITHOUT TAX (C31)</th>
              <th>EXPENSES SGST (C32)</th>
              <th>EXPENSES CGST (C33)</th>
              <th>EXPENSES IGST (C34)</th>
              <th>EXPENSES RESION</th>
              <th>EXPENSES AMOUNT WITH TAX (C35)</th>
              <th>EXPENSES PAYMENT TYPE</th>
              <th>EXPENSES PAYMENT UTR NO</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.srNo}>
                <td>{item.srNo}</td>
                <td>{item.expensesName}</td>
                <td>{item.expensesUserName}</td>
                <td>{item.expensesBillNo}</td>
                <td>{item.expensesBillDate}</td>
                <td>{item.amountWithoutTax}</td>
                <td>{item.expensesSgst}</td>
                <td>{item.expensesCgst}</td>
                <td>{item.expensesIgst}</td>
                <td>{item.expensesResion}</td>
                <td>{item.expensesAmountWithTax}</td>
                <td>{item.expensesPaymentType}</td>
                <td>{item.expensesPaymentUtrNo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </div>
  );
};

export default ExpensesTable;
