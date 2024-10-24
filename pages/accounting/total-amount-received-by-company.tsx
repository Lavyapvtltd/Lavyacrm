import React, { ReactElement } from "react";
import Head from "next/head";
import Layout from "@common/Layout";
import TotalAmountRecievedComponent from "Components/pages_componets/accounting/totalAmountRecieved";

const TotalAmountRecievedPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Accounting | Lavya - Admin</title>
      </Head>
      <div className="page-content">
        <TotalAmountRecievedComponent />
      </div>
    </React.Fragment>
  );
};

TotalAmountRecievedPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default TotalAmountRecievedPage;
