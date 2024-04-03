import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Dropdown } from "react-bootstrap";
import { recentOrders } from "@common/data";
import TableContainer from "@common/TableContainer";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "Components/slices/category/thunk";
import { imagebaseURL } from "Components/helpers/url_helper";
import moment from "moment";
import Custom_Modal from "@common/Modal";
import SubCatForm from "../Sub_Category/form";
import { useRouter } from "next/router";
import { GetAllLocation } from "Components/slices/location/thunk";
import { GetAllPartner } from "Components/slices/partner/thunk";
const Partnertable = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const [showSubCategory, setShowSubCategory] = useState<boolean>(false);
  const { partnerData } = useSelector((state: any) => ({
    partnerData: state.partner.partnerData,
  }));

  const columns = useMemo(
    () => [
      {
        Header: "City Name",
        accessor: (cellProps: any) => {
          return (
            <>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                  <i className="bi bi-geo-fill"></i>
                </div>
                <div className="flex-grow-1">
                  <strong>{cellProps.city.cityName}</strong>
                </div>
              </div>
            </>
          );
        },
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Hub Name",
        accessor: (cellProps: any) => {
          return (
            <>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                  <i className="bi bi-geo-fill"></i>
                </div>
                <div className="flex-grow-1">
                  <strong>{cellProps.hub.hubName}</strong>
                </div>
              </div>
            </>
          );
        },
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Partner Name",
        accessor: (cellProps: any) => {
          return (
            <>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                  <i className="bi bi-person"></i>
                </div>
                <div className="flex-grow-1">
                  <strong>{cellProps.name}</strong>
                </div>
              </div>
            </>
          );
        },
        disableFilters: true,
        filterable: true,
      },

      {
        Header: "Partner Email",
        disableFilters: true,
        filterable: true,
        accessor: "email",
      },
      {
        Header: "Partner Contact",
        disableFilters: true,
        filterable: true,
        accessor: "contact",
      },
      {
        Header: "Partner Address",
        disableFilters: true,
        filterable: true,
        accessor: "address",
      },
    ],
    []
  );
  useEffect(() => {
    dispatch(GetAllPartner());
  }, []);

  return (
    <Col xl={12}>
      <Card>
        <Card.Header className="align-items-center d-flex mb-n2">
          <h4 className="card-title mb-0 flex-grow-1">Partners </h4>
          <div className="flex-shrink-0">
            <Dropdown className="card-header-dropdown">
              <Dropdown.Toggle
                variant="link-dark"
                className="text-reset dropdown-btn arrow-none p-0"
              >
                {/* as={CustomToggle} */}
                <span className="fw-semibold text-uppercase fs-12">
                  Sort by:
                </span>
                <span className="text-muted">
                  Today<i className="mdi mdi-chevron-down ms-1"></i>
                </span>
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

        {/* <Card.Body> */}
        <TableContainer
          columns={columns || []}
          data={partnerData || []}
          // columns={[]}
          // data={[]}
          isGlobalFilter={false}
          iscustomPageSize={false}
          isBordered={false}
          customPageSize={6}
          tableClass="table-centered align-middle table-nowrap mb-0"
          theadClass="table-light"
        />
      </Card>
    </Col>
  );
};

export default Partnertable;
