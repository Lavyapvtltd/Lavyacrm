import { selected_is_success } from "Components/slices/membership/reducer";
import { GetMembership } from "Components/slices/membership/thunk";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Col, Row ,Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  GET_ALL_VENDORS,
  baseURL
} from "../../../Components/helpers/url_helper";


const VendorTable = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [vendors,setVendors] = useState([]);
  console.log(vendors,"frjfj");

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

  
  // Concatenate static default entry with data or use it if data is empty
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
                  {/* <th>Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor,index) => (
                  <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{vendor.name}</td>
                    <td>{vendor.email}</td>
                    <td>{vendor.mobile}</td>
                    {/* <td>
                      <i
                        className="bi bi-pen cursor-pointer"
                        onClick={() => {
                          router.push(`/vendor/edit-vendor/${vendor._id}`);
                          dispatch(selected_is_success(vendor));
                        }}
                      ></i>
                    </td> */}
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
