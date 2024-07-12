import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Col, Table, Button } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TotalRefundCompany = () => {
  const router = useRouter();
  const tableRef = useRef(null);

  const data = [
    {
      id: 1,
      date: "2023-05-01",
      walletC21: "Wallet Value 1",
      onlineC22: "Online Value 1",
    },
    {
      id: 2,
      date: "2023-05-02",
      walletC21: "Wallet Value 2",
      onlineC22: "Online Value 2",
    },
  ];

  const handleDownloadPDF = () => {
    const input = tableRef.current;
    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape orientation
      const imgWidth = 297;
      const pageHeight = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("table.pdf");
    });
  };

  return (
    <div>
      <Col xl={12}>
        <Button variant="primary" onClick={handleDownloadPDF}>Download PDF</Button>
        <div ref={tableRef}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SR NO</th>
                <th>Date</th>
                <th>Wallet (C21)</th>
                <th>Online (C22)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.walletC21}</td>
                  <td>{item.onlineC22}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col>
    </div>
  );
};

export default TotalRefundCompany;
