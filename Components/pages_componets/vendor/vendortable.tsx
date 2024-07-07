import { selected_is_success } from "Components/slices/membership/reducer";
import { GetMembership } from "Components/slices/membership/thunk";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
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

  // Static default entry
  const defaultEntry = {
    _id: "0000",
    membershipDetails: [
      {
        membershipTitle: "Default Vendor (Static Data)",
        details: [
          {
            name: "John Doe",
            email: "john@example.com",
            mobile: "123-456-7890",
            totalAmount: "1000",
            totalSale: "500",
          },
        ],
      },
    ],
  };

  // Concatenate static default entry with data or use it if data is empty
  const tableData = data.length > 0 ? data : [defaultEntry];

  return (
    <div>
      <Col xl={12}>
        {tableData.map((item: any) => (
          <Row key={item._id} className="mb-4">
            {item.membershipDetails.map((itex: any) => (
              <Col md={6} key={itex.membershipTitle}>
                <Card style={{ padding: 10 }}>
                  <div className="text-center card-styles">
                    <h6>{itex.membershipTitle}</h6>
                  </div>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      router.push(`/vendor/edit-vendor/${item._id}`);
                      dispatch(selected_is_success(item));
                    }}
                  >
                    <i className="bi bi-pen"></i>
                  </span>
                  {itex.details.map((itz: any, index: number) => (
                    <Row key={index} className="mb-2">
                      <Col md={6}>
                        <div>
                          <span>Name</span>
                          <span>: {itz.name}</span>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <span>Email</span>
                          <span>: {itz.email}</span>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <span>Mobile</span>
                          <span>: {itz.mobile}</span>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <span>Total Amount</span>
                          <span>: {itz.totalAmount}</span>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <span>Total Sale</span>
                          <span>: {itz.totalSale}</span>
                        </div>
                      </Col>
                      {/* Add more fields here */}
                    </Row>
                  ))}
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Col>
    </div>
  );
};

export default VendorTable;
