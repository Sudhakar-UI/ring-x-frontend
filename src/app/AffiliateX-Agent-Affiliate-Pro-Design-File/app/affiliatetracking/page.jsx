"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Form, Button } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";

const Affiliatetracking = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
				<h2 className="h2">Affiliate Tracking</h2>
				<div className="tabrightbox">
					<Link href="/advertiserdashboard" id="backbtn" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
				</div>
				</Container>
			</div>
			<article className="gridparentbox affttrackpage">
				<Container className="sitecontainer">
					<div className="overviewbalancebox panelcontentbox adsblancebox">
						<h2 className="heading-box ps-0 pe-0 pt-0 mb-3">Tracking Details</h2>
						<div className="tabrightbox">
							<Form className="siteformbg">
								<div className="supportsearch">
									<Form.Group>
										<Form.Select className="form-control" id="days">
											<option>Last 30 Days</option>
										</Form.Select>
									</Form.Group>
								</div>
							</Form>
						</div>
						<div className="balanceshowbox">
							<div className="walletbalancebox">
								<div className="tablebox d-flex">
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Total Promoters</h5>
												<h4 className="h4">12</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/total-promotors.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Total Clicks</h5>
												<h4 className="h4">4,350</h4>
											</div> 
											<div className="text-end">
												<Image src="assets/images/total-clicks.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Total Leads</h5>
												<h4 className="h4">620</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/total-leads.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Total Conversions</h5>
												<h4 className="h4">180</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/total-converstions.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
									<div className="balancetableb panelcontentbox">
										<div className="balanceshowt table-content">
											<div>
												<h5 className="h5">Avg. Conversion Rate</h5>
												<h4 className="h4">4.1%</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/converstions-rate.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="panelcontentbox mt-3">		
					<h2 className="heading-box pt-0 ps-2">Promoter Performance</h2>	
					<div className="mb-3 mt-4 historsysrch">
					<div className="searchfrmbox">
						<Form className="siteformbg">
						<div className="searchfrm">
						<Form.Group className="mb-3">
							<Form.Label>Search Promoter</Form.Label>
								<Form.Control className="form-control" id="promoter"/>
							</Form.Group>
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
							<div className="clearbtn">
							<Form.Group className="form-group">
								<Button className="btn sitebtn btn-sm me-1" id="searchbtn">Search</Button>
								<Link href="/" className="btn sitebtn btn-sm red-btn" id="resetbtn">Reset</Link>
							</Form.Group>
							</div>
							<div className="clearbtn">
							<Form.Group className="mb-0">
							   <Button className="borderbtn btn-sm" id="download_btn">Download Excel</Button>
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
								<th>Promoter</th>
								<th>Total Campaigns</th>
								<th>Clicks</th>
								<th>Leads</th>
								<th>Conversions</th>
								<th>Conversion Rate</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>John Doe</td>
								<td>2</td>                    
								<td>1,200</td>
								<td>210</td>
								<td>10</td>
								<td>5.0%</td>
								<td><Link href="/promoterview" id="promoter_btn" className="btn viewbtn">View</Link></td>                    
							</tr>
							<tr>
								<td>John Doe</td>
								<td>2</td>                    
								<td>1,200</td>
								<td>210</td>
								<td>10</td>
								<td>5.0%</td>
								<td><Link href="/promoterview" id="promoter_btn" className="btn viewbtn">View</Link></td>                    
							</tr>
							<tr>
								<td>John Doe</td>
								<td>2</td>                    
								<td>1,200</td>
								<td>210</td>
								<td>10</td>
								<td>5.0%</td>
								<td><Link href="/promoterview" id="promoter_btn" className="btn viewbtn">View</Link></td>                    
							</tr>
							<tr>
								<td>John Doe</td>
								<td>2</td>                    
								<td>1,200</td>
								<td>210</td>
								<td>10</td>
								<td>5.0%</td>
								<td><Link href="/promoterview" id="promoter_btn" className="btn viewbtn">View</Link></td>                    
							</tr>
							<tr>
								<td>John Doe</td>
								<td>2</td>                    
								<td>1,200</td>
								<td>210</td>
								<td>10</td>
								<td>5.0%</td>
								<td><Link href="/promoterview" id="promoter_btn" className="btn viewbtn">View</Link></td>                    
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

export default Affiliatetracking;