import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Dropdown } from "react-bootstrap";
import TableContainer from "@common/TableContainer";
import { useDispatch, useSelector } from "react-redux";
import { imagebaseURL } from "Components/helpers/url_helper";
import moment from "moment";
import { GetAllOrders, OrderByStatus } from "Components/slices/order/thunk";
import Custom_Modal from "@common/Modal";
import { is_selected_success } from "Components/slices/order/reducer";

const DeliveryDetails = () => {
  const dispatch: any = useDispatch();
  const { order } = useSelector((state: any) => ({
    order: state.order.fetchedbystatus,
  }));

  const [showStatus, setShowStatus] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: "Order No.",
        accessor: (cellProps: any) => {
          return (
            <>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <Link
                    href="#"
                    onClick={() => {
                      setShowStatus(true);
                      dispatch(is_selected_success(cellProps));
                    }}
                  >
                    <strong>#{cellProps.order_no}</strong>
                  </Link>
                </div>
              </div>
            </>
          );
        },
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Place For",
        disableFilters: true,
        filterable: true,
        accessor: "orderPlace",
      },
      {
        Header: "Customer Name",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (
            <>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <strong>{cellProps.user.name}</strong>
                </div>
              </div>
            </>
          );
        },
      },
      {
        Header: "Order Date",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (
            <>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <strong>
                    {moment(cellProps.createdAt).format("Do MMM YY")}
                  </strong>
                </div>
              </div>
            </>
          );
        },
      },
      {
        Header: "Vendor",
        accessor: (cellProps: any) => {
          return <div className="d-flex align-items-center">Not Available</div>;
        },
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Status",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          switch (cellProps.status) {
            case "PROCCESSING":
              return (
                <span className="badge text-warning bg-warning-subtle">
                  {cellProps.status}
                </span>
              );
            case "FAILED":
              return (
                <span className="badge text-danger  bg-danger-subtle">
                  {cellProps.status}
                </span>
              );
            case "DECLINED":
              return (
                <span className="badge text-danger  bg-danger-subtle">
                  {cellProps.status}
                </span>
              );
            case "ONTHEEWAY":
              return (
                <span className="badge text-success  bg-success-subtle">
                  {cellProps.status}
                </span>
              );
            case "ORDERED":
              return (
                <span className="badge text-success  bg-success-subtle">
                  {cellProps.status}
                </span>
              );
            case "DELIVERED":
              return (
                <span className="badge text-success  bg-success-subtle">
                  {cellProps.status}
                </span>
              );
            case "ASSIGNED":
              return (
                <span className="badge text-warning bg-warning-subtle">
                  {cellProps.status}
                </span>
              );
            case "NEXTDAYDELIVERY":
              return (
                <span className="badge text-warning bg-warning-subtle">
                  {cellProps.status}
                </span>
              );
          }
        },
      },
    ],
    []
  );
  useEffect(() => {
    dispatch(OrderByStatus("NEXTDAYDELIVERY"));
  }, []);

  console.log(order);
  return (
    <Col xl={12}>
      <Card>
        <Card.Header className="align-items-center d-flex mb-n2">
          <h4 className="card-title mb-0 flex-grow-1">Delivery details</h4>
          <div className="flex-shrink-0">
            <Dropdown className="card-header-dropdown">
              <Dropdown.Toggle
                variant="link-dark"
                className="text-reset dropdown-btn arrow-none p-0"
              >
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

        <TableContainer
          columns={columns || []}
          data={order || []}
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

export default DeliveryDetails;
