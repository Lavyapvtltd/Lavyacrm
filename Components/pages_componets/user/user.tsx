import React, { useEffect, useMemo } from "react";
import { Table, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "Components/slices/user/thunk";
import moment from "moment";
import Link from "next/link";

const User = () => {
  const dispatch : any = useDispatch();

  const data = useSelector((state: any) => state.user.userdata || []);

  useEffect(() => {
    dispatch(GetAllUser());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      { Header: "Customer Name", accessor: "user.name" },
      { Header: "Email", accessor: "user.email" },
      { Header: "Mobile", accessor: "user.mobile" },
      { Header: "Wallet Amount", accessor: "walletAmount" },
      { Header: "Created Date", accessor: "createdDate" },
    ],
    []
  );

  return (
    <Col xl={12}>
      <Card>
        <Card.Header>
          <h4 className="card-title mb-0">All Users</h4>
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
              {data.length > 0 ? (
                data.map((row: any) => (
                  <tr key={row._id}>
                    <td>
                      <Link href={`/user/user-detail/${row._id}`} legacyBehavior>
                        <a>{row.name}</a>
                      </Link>
                    </td>
                    <td>{row.email}</td>
                    <td>{row.contact}</td>
                    <td>{row.walletBalance}</td>
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
