import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Form from 'Components/pages_componets/trialpack/form';
import TrialTable from 'Components/pages_componets/trialpack/trialtable';

const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Trial Packs | Lavya -Admin </title>
			</Head>
			<div className='page-content'>
				<Form />
				<TrialTable />
				{/* <SilderTable /> */}
			</div>
		</React.Fragment>
	);
};

index.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>;
};
export default index;
