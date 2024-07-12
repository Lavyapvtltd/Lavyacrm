import { selected_is_success } from "Components/slices/membership/reducer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  GET_ALL_VENDORS,
  baseURL,
} from "../../../Components/helpers/url_helper";

// Define Vendor interface
interface Vendor {
  _id: string;
  name: string;
  email: string;
  mobile: string;
}

const VendorTable: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [vendors, setVendors] = useState<Vendor[]>([]); // Specify the type for vendors
  console.log(vendors, "frjfj");

  const { data } = useSelector((state: any) => ({
    data: state.membership.data,
  }));

  const vendorlist = async()=>{
    try{
      const data:any = await axios(`${baseURL}${GET_ALL_VENDORS}`);
      const {baseResponse,response}:any = data;
      setVendors(response);
    }catch(error){
      console.log("Something went wrong");
    }
  }

  useEffect(() => {
    vendorlist();
  }, []);

  return (
    <Col xl={12}>
      <Card>
        <Card.Header>
          <h4 className="card-title mb-0">Vendor Details</h4>
        </Card.Header>
        <Card.Body>
          {vendors.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Vendor ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor, index) => (
                  <tr key={vendor._id}>
                    <td>{index + 1}</td>
                    <td>{vendor.name}</td>
                    <td>{vendor.email}</td>
                    <td>{vendor.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div>No Vendor Details available.</div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default VendorTable;
