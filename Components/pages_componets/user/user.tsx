import React, { useEffect, useMemo, useState } from "react";
import { Table, Card, Col, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "Components/slices/user/thunk";
import moment from "moment";
import Link from "next/link";

const User = () => {
  const dispatch: any = useDispatch();
  const [search, setSearch] = useState(""); // State for search input

  const data = useSelector((state: any) => state.user.userdata || []);

  useEffect(() => {
    dispatch(GetAllUser());
  }, [dispatch]);

  // Columns definition
  const columns = useMemo(
    () => [
      { Header: "Customer Name", accessor: "user.name" },
      { Header: "Email", accessor: "user.email" },
      { Header: "Mobile", accessor: "user.mobile" },
      { Header: "Wallet Amount", accessor: "walletAmount" },
      { Header: "DOB", accessor: "dob" },
      { Header: "Membership", accessor: "membership" },
      { Header: "Orders", accessor: "orders" },
      { Header: "Created Date", accessor: "createdDate" },
    ],
    []
  );

  // Filter the data based on search input
  const filteredData = data.filter((row: any) => {
    const customerName = row?.name?.toLowerCase() || "";
    const email = row?.email?.toLowerCase() || "";
    const mobile = String(row?.contact || "").toLowerCase();
    const walletBalance = row?.walletBalance?.toString() || "";
    const dob = row?.dob?.toString() || "";
    const membership = row?.membership_active ? "Active" : "Deactive";
    const orders = row?.orders.length.toString() || "";
    const createdDate = moment(row?.createdAt).format("Do MMM YY").toLowerCase();

    return (
      customerName.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase()) ||
      mobile.includes(search.toLowerCase()) ||
      walletBalance.includes(search.toLowerCase()) ||
      dob.includes(search.toLowerCase()) ||
      membership.toLowerCase().includes(search.toLowerCase()) ||
      orders.includes(search.toLowerCase()) ||
      createdDate.includes(search.toLowerCase())
    );
  });

  return (
    <Col xl={12}>
      <Card>
        <Card.Header>
          <h4 className="card-title mb-0">All Users</h4>
        </Card.Header>
        <Card.Body>
          {/* Search Input */}
          <FormControl
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-3"
          />
          <Table striped bordered hover>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.Header}>{column.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row: any) => (
                  <tr key={row._id}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.contact}</td>
                    <td>
                      <Link href={`/user/wallet-history/${row._id}`} legacyBehavior>
                        <a>{row.walletBalance}</a>
                      </Link>
                    </td>
                    <td>{row.dob}</td>
                    <td>
                      <Link href={`/user/membership/${row._id}`} legacyBehavior>
                        <a>{row.membership_active ? "Active" : "Deactive"}</a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/user/order-history/${row._id}`} legacyBehavior>
                        <a>{row.orders.length}</a>
                      </Link>
                    </td>
                    <td>{moment(row.createdAt).format("Do MMM YY")}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center">
                    No User Data available.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
