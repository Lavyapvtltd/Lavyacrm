import React, { useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Modal, Table } from "react-bootstrap";
import { ADD_NEW_PARTNER, GET_ALL_PARTNER, baseURL } from "Components/helpers/url_helper";

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
  const [showModal, setShowModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

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

  const handleShowModal = (partner: Partner) => {
    setSelectedPartner(partner);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPartner(null);
  };

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
                      <Button variant="link" onClick={() => handleShowModal(partner)}>
                        {partner.name}
                      </Button>
                    </td>
                    <td>{partner.email}</td>
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

      {selectedPartner && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPartner.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Status</th>
                  <th>Delivery Date</th>
                  <th>Amount</th>
                  <th>Payment Option</th>
                </tr>
              </thead>
              <tbody>
                {selectedPartner.orders && selectedPartner.orders.length > 0 ? (
                  selectedPartner.orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.user.name}</td>
                      <td>{order.status}</td>
                      <td>{order.deliveryDate}</td>
                      <td>{order.amount}</td>
                      <td>{order.paymentOption}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5}>No orders available.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Col>
  );
};

export default Partnertable;
