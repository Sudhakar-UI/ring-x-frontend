"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Form, Button, Modal } from 'react-bootstrap';
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


const Affiliateearnings = () => {
	const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
			<Container className="sitecontainer">	
				<h2 className="h2">Earnings</h2>
				<div className="tabrightbox">
					<Link href="/promoterdashboard" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
				</div>
			</Container>
			</div>
			<article className="gridparentbox earnafftpage">
				<Container className="sitecontainer">	
				<div className="overviewbalancebox panelcontentbox adsblancebox">
					
				<div className="balanceshowbox">
					<div className="walletbalancebox">
						<div className="tablebox d-flex">
							<div className="balancetableb panelcontentbox">
								<div className="balanceshowt table-content">
									<div>
										<h5 className="h5">Total Earnings</h5>
										<h4 className="h4">0</h4>
									</div>
									<div className="text-end">
										<Image src="assets/images/dpsticon1.svg" alt="icon" withd={20} height={20} />
									</div>
								</div>
							</div>
							<div className="balancetableb panelcontentbox">
								<div className="balanceshowt table-content">
									<div>
										<h5 className="h5">Available Balance</h5>
										<h4 className="h4">0 </h4>
									</div>
									<div className="text-end">
										<Image src="assets/images/deposit.svg" alt="icon" withd={20} height={20} />
									</div>
								</div>
							</div>
							<div className="balancetableb panelcontentbox">
								<div className="balanceshowt table-content">
									<div>
										<h5 className="h5">Total Withdrawals</h5>
										<h4 className="h4">0</h4>
									</div>
									<div className="text-end">
										<Image src="assets/images/withdraw.svg" alt="icon" withd={20} height={20} />
									</div>
								</div>
							</div>							
						</div>
					</div>
				</div>
				<hr className="mt-4 mb-4"/>
				<div className="text-center">
					<Link href="/requestwithdraw" className="btn sitebtn">Request Withdrawal</Link>
				</div>
			</div>
				<div className="panelcontentbox mt-3 earncmspage">		
				<h2 className="heading-box pt-0 ps-2 border-0">Commission History</h2>
					<SimpleBar className="table-responsive sitescroll">
					<Table className="sitetable table-responsive-stack" id="table1">
						<thead>
							<tr>
								<th>Date</th>
								<th>Campaign Name</th>
								<th>Conversion Type</th>
								<th>Earnings</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2025-04-15</td>
								<td>GlowUp Skincare</td>
								<td>Sale</td>
								<td>$60.00</td>
								<td><Badge bg="success">Paid</Badge></td>
							</tr>
							<tr>
								<td>2025-04-15</td>
								<td>GlowUp Skincare</td>
								<td>Sale</td>
								<td>$60.00</td>
								<td><Badge bg="success">Paid</Badge></td>
							</tr>
							<tr>
								<td>2025-04-15</td>
								<td>GlowUp Skincare</td>
								<td>Sale</td>
								<td>$60.00</td>
								<td><Badge bg="success">Paid</Badge></td>
							</tr>
							<tr>
								<td>2025-04-15</td>
								<td>GlowUp Skincare</td>
								<td>Sale</td>
								<td>$60.00</td>
								<td><Badge bg="success">Paid</Badge></td>
							</tr>
							<tr>
								<td>2025-04-15</td>
								<td>GlowUp Skincare</td>
								<td>Sale</td>
								<td>$60.00</td>
								<td><Badge bg="success">Paid</Badge></td>
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

export default Affiliateearnings;