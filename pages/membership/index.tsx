import React, { ReactElement } from "react";
import Head from "next/head";
import Layout from "@common/Layout";
import Order from "Components/pages_componets/order/ordertable";
import Membershipform from "Components/pages_componets/membership/form";

const index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Membership | Lavya -Admin </title>
      </Head>
      <div className="page-content">
        <Membershipform />
        {/* <LocationForm /> */}
      </div>
    </React.Fragment>
  );
};

index.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default index;
