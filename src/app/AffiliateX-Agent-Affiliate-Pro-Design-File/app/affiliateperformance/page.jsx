"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Form, Button, Modal, InputGroup, Nav } from 'react-bootstrap';
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


const Affiliateperformance = () => {
	const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
			<Container className="sitecontainer">	
			<h2 className="h2">My Affiliate Links</h2>
				<div className="tabrightbox">
					<Link href="/promoterdashboard" id="backbtn" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
				</div>
			</Container>
			</div>
			<article className="gridparentbox pefrmtablebox">
				<Container className="sitecontainer">	
				<div className="panelcontentbox">
				<div className="innerpagetab historytab mb-4">
						<Nav variant="pills" className="tabbanner">
							<Nav.Item><Nav.Link href="/availablecampaigns" id='campaigntab'>Available Campaign</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link href="/affiliateperformance" className="active" id='performancetab'>Affiliate Performance</Nav.Link></Nav.Item>
						</Nav>
					</div>
				<SimpleBar className="table-responsive sitescroll">
					<Table className="sitetable table-responsive-stack" id="table1">
						<thead>
							<tr>
								<th>Campaign</th>
								<th>Link</th>
								<th>Clicks</th>
								<th>Leads</th>
								<th>Conversions</th>
								<th>Conversion Rate</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>GlowUp Skincare</td>
								<td>https://glowup?ref=promo123</td>
								<td>520</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
								<td><Link href="/affiliateviewstats" id="viewstats" className="btn viewbtn">View Stats</Link></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>https://glowup?ref=promo123</td>
								<td>520</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
								<td><Link href="/affiliateviewstats" id="viewstats" className="btn viewbtn">View Stats</Link></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>https://glowup?ref=promo123</td>
								<td>520</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
								<td><Link href="/affiliateviewstats" id="viewstats" className="btn viewbtn">View Stats</Link></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>https://glowup?ref=promo123</td>
								<td>520</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
								<td><Link href="/affiliateviewstats" id="viewstats" className="btn viewbtn">View Stats</Link></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>https://glowup?ref=promo123</td>
								<td>520</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
								<td><Link href="/affiliateviewstats" id="viewstats" className="btn viewbtn">View Stats</Link></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>https://glowup?ref=promo123</td>
								<td>520</td>
								<td>82</td>
								<td>28</td>
								<td>5.4%</td>
								<td><Link href="/affiliateviewstats" id="viewstats" className="btn viewbtn">View Stats</Link></td>
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

export default Affiliateperformance;