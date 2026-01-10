import Link from 'next/link';
import { MdEditNote } from 'react-icons/md';
import React, { useEffect, useMemo } from 'react';
import { Card, Col, Dropdown } from 'react-bootstrap';
import TableContainer from '@common/TableContainer';
import { useDispatch, useSelector } from 'react-redux';
import { imagebaseURL } from 'Components/helpers/url_helper';
import moment from 'moment';
import {
	deleteTrial,
	GetAllTrials,
	updateTrialPut,
} from 'Components/slices/trial/thunk';
import { useRouter } from 'next/router';
import { dE } from '@fullcalendar/core/internal-common';

const TrialTable = () => {
	const router = useRouter();
	const dispatch: any = useDispatch();

	const { trialdata } = useSelector((state: any) => ({
		trialdata: state.TrialSlice.trialdata,
	}));

	const columns = useMemo(
		() => [
			/* ---------------- Actions ---------------- */
			{
				Header: 'Actions',
				accessor: (row: any) => (
					<div className='d-flex align-items-center gap-3'>
						<Link
							href=''
							onClick={() => router.push(`/trial/edit-trial/${row._id}`)}>
							<MdEditNote size={22} />
						</Link>

						<div className='form-check form-switch'>
							<i
								style={{ color: 'red' }}
								className='bi bi-trash'
								onClick={() => dispatch(deleteTrial(row._id))}></i>
							{/* <input
								className='form-check-input'
								type='checkbox'
								checked={row.status}
								onChange={() => dispatch(deleteTrial(row._id))}
							/> */}
						</div>
					</div>
				),
				disableFilters: true,
			},

			/* ---------------- Trial Image ---------------- */
			{
				Header: 'Image',
				accessor: (row: any) => (
					<img
						src={`${imagebaseURL}${row.image}`}
						width={40}
						height={40}
						className='rounded'
						alt='trial'
					/>
				),
				disableFilters: true,
			},

			/* ---------------- Product Name ---------------- */
			{
				Header: 'Product',
				accessor: (row: any) => <strong>{row.product?.name}</strong>,
			},

			/* ---------------- Trial Price ---------------- */
			{
				Header: 'Trial Price',
				accessor: 'price',
			},

			/* ---------------- Trial Days ---------------- */
			{
				Header: 'Days',
				accessor: 'days',
			},

			/* ---------------- Product Price ---------------- */
			{
				Header: 'Product Price',
				accessor: (row: any) => row.product?.price,
			},

			/* ---------------- Created Date ---------------- */
			{
				Header: 'Created On',
				accessor: (row: any) => moment(row.createdAt).format('DD MMM YYYY'),
			},

			/* ---------------- Status ---------------- */
			{
				Header: 'Status',
				accessor: (row: any) =>
					row.status ? (
						<span className='badge bg-success-subtle text-success'>Active</span>
					) : (
						<span className='badge bg-danger-subtle text-danger'>Inactive</span>
					),
			},
		],
		[]
	);

	useEffect(() => {
		dispatch(GetAllTrials());
	}, []);

	return (
		<Col xl={12}>
			<Card>
				<Card.Header className='d-flex align-items-center'>
					<h4 className='card-title flex-grow-1 mb-0'>Trial Packs</h4>

					<Dropdown>
						<Dropdown.Toggle
							variant='link-dark'
							className='p-0'>
							Sort By
						</Dropdown.Toggle>
						<Dropdown.Menu align='end'>
							<Dropdown.Item>Today</Dropdown.Item>
							<Dropdown.Item>Last 7 Days</Dropdown.Item>
							<Dropdown.Item>Last 30 Days</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Card.Header>

				<TableContainer
					columns={columns}
					data={trialdata?.response || []}
					isGlobalFilter={false}
					customPageSize={10}
					tableClass='table-centered align-middle table-nowrap mb-0'
					theadClass='table-light'
				/>
			</Card>
		</Col>
	);
};

export default TrialTable;
