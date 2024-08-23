import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Dropdown, Modal, Table } from "react-bootstrap";
import {GET_ALL_PARTNER, baseURL } from "Components/helpers/url_helper";
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

const OrderAssign = ({ partnerId }: any) => {
    const [partners, setPartners] = useState<Partner[]>([]);
    console.log(partners,"erher")
    const [products,setProducts] = useState([]);
    console.log(products,"Sdfgeg")
    const [showModal, setShowModal] = useState(false);
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
    
      useEffect(() => {
        fetchPartners();
      }, []);

  // Filter the data to get the specific user's data
  const partner:any = partners.find((partner: any) => partner._id === partnerId);

  const columns = useMemo(() => {
    const baseColumns = [
      { Header: "User Name", accessor: "username" },
      { Header: "Product details", accessor: "productdetails" },
      { Header: "Amount", accessor: "amount" },
      { Header: "status", accessor: "status" },
      { Header: "Delivery Date", accessor: "deliverydate" },
      { Header: "Payment Option", accessor: "paymentoption" },
    ];
    return baseColumns;
  }, [partner]);

  const handleShowModal = (products: any) => {
    setProducts(products);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setProducts([]);
  };

  return (
    <Col xl={12}>
      <Card>
        <Card.Header>
          <h4 className="card-title mb-0">Membership</h4>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.Header}>{column.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {partner?.orders?.length > 0 ? (
                partner.orders.map((order:any, index:any) => (
                    <tr key={index}>
                    <td>{order.user.name}</td>
                    <td>
                      <Button variant="link" onClick={() => handleShowModal(order.product)}>
                        Product details
                      </Button>
                    </td>
                    <td>{order.amount}</td>
                    <td>{order.status}</td>
                    <td>{order.deliveryDate}</td>
                    <td>{order.paymentOption}</td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan={columns.length} className="text-center">
                    No orders available
                    </td>
                </tr>
            )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      {products && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Products details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product:any, index:any) => (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.selQty}</td>
                      <td>{product.price * product.selQty}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5}>No products available.</td>
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

export default OrderAssign;
