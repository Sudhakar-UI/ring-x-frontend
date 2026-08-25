"use client"
import React, { useState } from 'react';
import { Container, Form, Row, Col, Image, Button, Table, Nav, Tab, Tabs, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import 'react-loading-skeleton/dist/skeleton.css'
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";
import UploadForm from './UploadForm';
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';


const page = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const [selectedDateTab, setSelectedDateTab] = useState(null);

	// Handle date change
	const handleDateChangeTab = (date) => {
		setSelectedDateTab(date);
	};

	// Custom function to disable past dates
	const isValidDate = (current) => {
		const yesterday = Datetime.moment().subtract(1, 'day');
		return current.isAfter(yesterday);
	};

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			{/* <div className="innerpagecontent">
				<h2 className="h2">My Account</h2>
			</div> */}
			<article className="gridparentbox">
				<Container className="sitecontainer profilepage">
					<div className="panelcontentbox profiletabbg profilepagetab w-100">
						<h2 className=" heading-box pt-0 mb-3">My Account</h2>

						<div className="flexbox">
							<div className="profilebox table-content text-center">
								<div className="profilimg">
									<div className="profilepic" style={{ backgroundImage: 'url(../assets/images/profile.svg)' }} id='profilepic'></div>
									<UploadForm />
								</div>
								<div className="profiledatainfo mt-3">
									<h3 className="h5"> Johntestdemo <span className="t-red"> Not Verified</span></h3>
									<h4><span className="desc t-gray">Update your nickname and manage your account.(Upload your image like jpg,jpeg,png (MAX: 1MB))</span></h4>
									<div className="form-group mt-1 mb-0">
										{/* <Button type="submit" className="sitebtn borderbtn btn-sm w-100" id="profileImg">Update Avatar</Button> */}
									</div>
								</div>
							</div>
							<div className="">
								<Form className="siteformbg mt-3">
									<Row>
										<Col lg={6} md={6}>
											<Form.Group className="form-group">
												<Form.Label>Username</Form.Label>
												<Form.Control name="code" id="username" />
											</Form.Group>
										</Col>
										<Col lg={6} md={6}>
											<Form.Group className="form-group">
												<Form.Label>Nick Name</Form.Label>
												<Form.Control name="code" id="firstname" />
											</Form.Group>
										</Col>
										{/* <Col lg={4} md={6}>
											<Form.Group className="form-group" >
												<Form.Label>Last Name</Form.Label>
												<Form.Control name="code" id="lastname" />
											</Form.Group>
										</Col> */}
										<Col lg={6} md={6}>
											<Form.Group className="form-group" >
												<Form.Label>Email Address</Form.Label>
												<Form.Control name="code" id="email" />
											</Form.Group>
										</Col>
										<Col lg={6} md={6}>
											<Form.Group className="form-group dobinput dateinput" >
												<Form.Label>Birth Date</Form.Label>
												<Datetime
													name="durationDate"
													id="dob"
													value={selectedDateTab}
													onChange={handleDateChangeTab}
													dateFormat="MMM DD, YYYY" // Format for date (day, month, year)
													inputProps={{
														placeholder: 'Select Date and Time', // DD/MM/YYYY HH:mm' --> Example format
														id: 'datetime'
													}}
													isValidDate={isValidDate} // Custom function to disable past dates
												/>
											</Form.Group>
										</Col>
										<Col lg={6} md={12}>
											<Form.Group className="form-group">
												<Form.Label>Select Country</Form.Label>
												<Form.Select className="form-control" id='country'>
													<option>India</option>
												</Form.Select>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col lg={8} md={8}>
											<Form.Group className="form-group">
												<Form.Label>Address</Form.Label>
												<textarea className="form-control" rows={3} id='address'></textarea>
											</Form.Group>
										</Col>

										<div className="form-group profbtn m-0 text-center">
											<Button type="submit" className="btn sitebtn w-100" id="submit">Submit</Button>
										</div>
									</Row>
								</Form>
							</div>
						</div>
					</div>
					<div className="panelcontentbox  w-100 ">
						<h2 className="heading-box pt-0 mb-3 ps-0 ">Change Password</h2>
						<Form className='siteformbg'>
							<div className='profilepage-x'>
								<div>
									<Form.Group className="form-group">
										<Form.Label>Current Password</Form.Label>
										<InputGroup>
											<Form.Control type="password" id="current_password" />
											<div className="input-group-append">
												<InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
											</div>
										</InputGroup>
									</Form.Group>
									<Form.Group className="form-group">
										<Form.Label>New Password</Form.Label>
										<InputGroup>
											<Form.Control type="password" id="newpassword" />
											<div className="input-group-append">
												<InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
											</div>
										</InputGroup>
									</Form.Group>
									<Form.Group className="form-group">
										<Form.Label>Confirm Password</Form.Label>
										<InputGroup>
											<Form.Control type="password" id="confirmpassword" />
											<div className="input-group-append">
												<InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} id="eye3" /> </InputGroup.Text>
											</div>
										</InputGroup>
									</Form.Group>
									<div className="d-flex gap-2 mt-3">
										<Button type="button" id="submit" className="sitebtn w-100">Submit</Button>
									</div>
								</div>
								<div>
									<div className="pt-box pwdnotes mt-4">
										<h5 className="mb-3"><b className="t-black">Password must contain : </b> </h5>
										<p className="content mb-1 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least 8 characters.</p>
										<p className="content mb-1 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least One uppercase
											(ex: A, B, etc).</p>
										<p className="content mb-1 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least one lowercase letter (ex: a, b, etc).</p>
										<p className="content mb-1 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least One numeric digit (ex: 1, 2, 3, etc).</p>
										<p className="content mb-2 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least One special character
											(ex: @, #, $, etc).</p>
										<p className="content mb-0"><b>ex: Sample@123</b></p>
									</div>
								</div>
							</div>
						</Form>
					</div>
				</Container>
			</article>
			<Userfooter />
		</div >
	)
}

export default page