"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Button, Form } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";


const Campaignpayouthistory = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">Payment History</h2>
					<div className="tabrightbox">
						<Link href="/campaignbilling" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
					</div>
				</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="panelcontentbox campaignmangepage">
						<div className="mb-3 mt-3 historsysrch">
							<div className="searchfrmbox">
								<Form className="siteformbg">
									<div className="searchfrm">

										<Form.Group className="form-group" id="startdate">
											<Form.Label>From</Form.Label>
											<div className="dateinput">
												<Flatpickr id="start_date" placeholder="Select a date" value={startDate} onChange={(startDate) => setStartDate(startDate)}
													options={{ dateFormat: "Y-m-d", enableTime: false, disableMobile: true, }}
												/></div>
										</Form.Group>
										<Form.Group className="form-group" id="enddate">
											<Form.Label>To</Form.Label>
											<div className="dateinput">
												<Flatpickr id="end_date" placeholder="Select a date" value={endDate} onChange={(endDate) => setEndDate(endDate)} options={{ dateFormat: "Y-m-d", enableTime: false, disableMobile: true, }}
												/>
											</div>
										</Form.Group>
										<Form.Group>
											<Form.Label>Coin</Form.Label>

											<Form.Select className="form-control" id="days">
												<option>All</option>
											</Form.Select>
										</Form.Group>
										<div className="clearbtn">
											<Form.Group className="form-group">
												<Button className="btn sitebtn btn-sm me-1" id="searchbtn">Search</Button>
												<Link href="/" className="btn sitebtn btn-sm red-btn" id="resetbtn">Reset</Link>
											</Form.Group>
										</div>

									</div>
								</Form>
							</div>
						</div>
						<SimpleBar className="table-responsive sitescroll">
							<Table className="sitetable table-responsive-stack" id="table1">
								<thead>
									<tr>
										<th>Payment ID</th>
										<th>Date</th>
										<th>Compaign ID</th>
										<th>Compaign Value</th>
										<th>Amount</th>
										<th>Coin Type</th>
										<th>Transaction Type</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>AF24646</td>
										<td>18/01/2024</td>
										<td>AF24646</td>
										<td>150</td>
										<td>150</td>
										<td>Crypto</td>
										<td>GFASTEUWHWJROIU648</td>
										<td><Badge bg="success">Completed</Badge></td>
									</tr>
									<tr>
										<td>AF24646</td>
										<td>18/01/2024</td>
										<td>AF24646</td>
										<td>150</td>
										<td>150</td>
										<td>Crypto</td>
										<td>GFASTEUWHWJROIU648</td>
										<td><Badge bg="success">Completed</Badge></td>
									</tr>
									<tr>
										<td>AF24646</td>
										<td>18/01/2024</td>
										<td>AF24646</td>
										<td>150</td>
										<td>150</td>
										<td>Crypto</td>
										<td>GFASTEUWHWJROIU648</td>
										<td><Badge bg="success">Completed</Badge></td>
									</tr>
									<tr>
										<td>AF24646</td>
										<td>18/01/2024</td>
										<td>AF24646</td>
										<td>150</td>
										<td>150</td>
										<td>Crypto</td>
										<td>GFASTEUWHWJROIU648</td>
										<td><Badge bg="success">Completed</Badge></td>
									</tr>
									<tr>
										<td>AF24646</td>
										<td>18/01/2024</td>
										<td>AF24646</td>
										<td>150</td>
										<td>150</td>
										<td>Crypto</td>
										<td>GFASTEUWHWJROIU648</td>
										<td><Badge bg="success">Completed</Badge></td>
									</tr>
								</tbody>
							</Table>
						</SimpleBar>
						<ResponsiveTable tableId="table1" />
					</div>
				</Container>
			</article>
			<Userfooter />
		</div>
	);
}

export default Campaignpayouthistory;