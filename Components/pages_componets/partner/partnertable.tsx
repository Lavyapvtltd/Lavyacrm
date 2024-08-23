import React, { useEffect, useState } from "react";
import {Card, Col, Dropdown, Table } from "react-bootstrap";
import {GET_ALL_PARTNER, baseURL } from "Components/helpers/url_helper";
import Link from "next/link";

interface Partner {
  _id: string;
  city: {
    cityName: string;
  };
  hub: {
    hubName: string;
  };
  name: string;
  email: string;
  contact: string;
  address: string;
  orders?: {
    user: {
      name: string;
    };
    status: string;
    deliveryDate: string;
    amount: number;
    paymentOption: string;
  }[];
}

const Partnertable: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  const fetchPartners = async () => {
    try {
      const response = await fetch(`${baseURL}${GET_ALL_PARTNER}`);
      const data = await response.json();
      
      console.log("Full response:", data); // Log the entire response

      // Check the response structure
      if (data && data.baseResponse.status === 1) {
        setPartners(data.response); // Set partners directly from response
      } else {
        console.error("Failed to fetch partners.");
      }
    } catch (error) {
      console.error("Error fetching partners:", error);
    }
  };

  console.log("partners"+partners)

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <Col xl={12}>
      <Card>
        <Card.Header className="align-items-center d-flex mb-n2">
          <h4 className="card-title mb-0 flex-grow-1">Partners</h4>
          <div className="flex-shrink-0">
            <Dropdown className="card-header-dropdown">
              <Dropdown.Toggle
                variant="link-dark"
                className="text-reset dropdown-btn arrow-none p-0"
              >
                <span className="fw-semibold text-uppercase fs-12">Sort by:</span>
                <span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1"></i></span>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#">Today</Dropdown.Item>
                <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                <Dropdown.Item href="#">This Month</Dropdown.Item>
                <Dropdown.Item href="#">Last Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Header>

        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>City Name</th>
                <th>Hub Name</th>
                <th>Partner Name</th>
                <th>Partner Email</th>
                <th>Order Assign</th>
                <th>Partner Contact</th>
                <th>Partner Address</th>
              </tr>
            </thead>
            <tbody>
              {partners.length > 0 ? (
                partners.map((partner: Partner) => (
                  <tr key={partner._id}>
                    <td>{partner.city.cityName}</td>
                    <td>{partner.hub.hubName}</td>
                    <td>
                        {partner.name}
                    </td>
                    <td>{partner.email}</td>
                    <td>
                      <Link href={`/partner/order-assign/${partner._id}`} legacyBehavior>
                        <a>Order Assign</a>
                      </Link>
                    </td>
                    <td>{partner.contact}</td>
                    <td>{partner.address}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No Partner Details available.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Partnertable;
