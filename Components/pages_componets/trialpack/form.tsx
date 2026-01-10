import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { GetAllProduct } from 'Components/slices/product/thunk';
import { PostTrial } from 'Components/slices/trial/thunk';
// import { UploadTrial } from 'Components/slices/trial/thunk'; // update path if needed

const TrialForm = () => {
	const { productdata } = useSelector((state: any) => ({
		productdata: state.ProductSlice.productdata,
	}));
	const dispatch: any = useDispatch();

	const formik = useFormik({
		initialValues: {
			product_id: '',
			price: '',
			days: '',
			image: null,
		},

		validationSchema: Yup.object({
			product_id: Yup.string().required('Product is required'),
			price: Yup.number()
				.typeError('Price must be a number')
				.required('Price is required'),
			days: Yup.number()
				.typeError('Days must be a number')
				.required('Days are required'),
			image: Yup.mixed().required('Image is required'),
		}),

		onSubmit: (values: any, { resetForm }) => {
			const formData = new FormData();
			formData.append('product_id', values.product_id);
			formData.append('price', values.price);
			formData.append('days', values.days);
			formData.append('image', values.image);

			dispatch(PostTrial(formData));
			resetForm();
		},
	});

	useEffect(() => {
		dispatch(GetAllProduct());
	}, []);

	const productOptions =
		productdata?.response?.map((product: any) => ({
			label: product.name, // shown in dropdown
			value: product._id, // stored in formik
		})) || [];

	return (
		<div className='container-fluid'>
			<Card>
				<Form
					className='p-3'
					noValidate
					onSubmit={formik.handleSubmit}>
					<Row className='g-3'>
						{/* Product ID */}
						<Col md={6}>
							<Form.Label>Product</Form.Label>

							<Select
								options={productOptions}
								isSearchable
								placeholder='Select product...'
								value={
									productOptions.find(
										(option: any) => option.value === formik.values.product_id
									) || null
								}
								onChange={(option: any) =>
									formik.setFieldValue('product_id', option ? option.value : '')
								}
								onBlur={() => formik.setFieldTouched('product_id', true)}
								classNamePrefix='react-select'
								className={
									formik.touched.product_id && formik.errors.product_id
										? 'is-invalid'
										: ''
								}
							/>

							{/* Validation Error */}
							{formik.touched.product_id &&
								typeof formik.errors.product_id === 'string' && (
									<div className='invalid-feedback d-block'>
										{formik.errors.product_id}
									</div>
								)}
						</Col>
						{/* Price */}
						<Col md={3}>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type='number'
								name='price'
								value={formik.values.price}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={Boolean(formik.touched.price && formik.errors.price)}
							/>
							<Form.Control.Feedback type='invalid'>
								{typeof formik.errors.price === 'string'
									? formik.errors.price
									: ''}
							</Form.Control.Feedback>
						</Col>

						{/* Days */}
						<Col md={3}>
							<Form.Label>Days</Form.Label>
							<Form.Control
								type='number'
								name='days'
								value={formik.values.days}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={Boolean(formik.touched.price && formik.errors.price)}
							/>
							<Form.Control.Feedback type='invalid'>
								{typeof formik.errors.price === 'string'
									? formik.errors.price
									: ''}
							</Form.Control.Feedback>
						</Col>

						{/* Image */}
						<Col md={12}>
							<Form.Label>Image</Form.Label>
							<Form.Control
								type='file'
								name='image'
								accept='image/*'
								onChange={(e: any) =>
									formik.setFieldValue('image', e.currentTarget.files[0])
								}
								isInvalid={Boolean(formik.touched.price && formik.errors.price)}
							/>
							<Form.Control.Feedback type='invalid'>
								{typeof formik.errors.price === 'string'
									? formik.errors.price
									: ''}
							</Form.Control.Feedback>

							{/* Preview */}
							{formik.values.image && (
								<img
									src={URL.createObjectURL(formik.values.image)}
									alt='preview'
									className='mt-2 img-thumbnail'
									width={120}
								/>
							)}
						</Col>
					</Row>

					<Button
						className='mt-3'
						variant='primary'
						type='submit'>
						Create Trial
					</Button>
				</Form>
			</Card>
		</div>
	);
};

export default TrialForm;
