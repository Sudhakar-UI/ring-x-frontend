"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge } from 'react-bootstrap';
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


const Advertiserdashboard = () => {

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
			<Container className="sitecontainer">	
				<h2 className="h2">Campaign Manager</h2>
				<div className="tabrightbox">
					<Link href="/advertiserdashboard" id="backbtn" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
				</div>
			</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer">	
				<div className="panelcontentbox campaignmangepage">
					<h2 className="heading-box pt-0 ps-0 mb-3">List of Campaign</h2>
					<div className="tabrightbox">
						<Link href="/campaigncreate" id="createcampaign" className="btn borderbtn btn-sm">Create Campaign</Link>
					</div>
					<SimpleBar className="table-responsive sitescroll">
					<Table className="sitetable table-responsive-stack" id="table1">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Commissions</th>
								<th>Status</th>
								<th>Type</th>
								<th>Created Date</th>
								<th>Default</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><Badge bg="success">Active</Badge></td>
								<td><span className="t-info">Private - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
								<td className="flxcahbtn">
								<div className="d-flex">
									<Link href="/campaignedit" id="edit" className="btn borderbtn green-btn btn-sm me-2">Edit</Link><Link href="#" id="lock" className="btn borderbtn red-btn btn-sm me-2">Lock/Pause</Link><Link href="#" id="copy" className="btn borderbtn btn-sm">Copy</Link>
								</div>
								</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><Badge bg="success">Active</Badge></td>
								<td><span className="t-info">Public - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
								<td className="flxcahbtn">
								<div className="d-flex">
									<Link href="/campaignedit" id="edit" className="btn borderbtn green-btn btn-sm me-2">Edit</Link><Link href="#" id="lock" className="btn borderbtn red-btn btn-sm me-2">Lock/Pause</Link><Link href="#" id="copy" className="btn borderbtn btn-sm">Copy</Link>
								</div>
								</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><Badge bg="success">Active</Badge></td>
								<td><span className="t-info">Public - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
								<td className="flxcahbtn">
								<div className="d-flex">
									<Link href="/campaignedit" id="edit" className="btn borderbtn green-btn btn-sm me-2">Edit</Link><Link href="#" id="lock" className="btn borderbtn red-btn btn-sm me-2">Lock/Pause</Link><Link href="#" id="copy" className="btn borderbtn btn-sm">Copy</Link>
								</div>
								</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><Badge bg="success">Active</Badge></td>
								<td><span className="t-info">Private - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
								<td className="flxcahbtn">
								<div className="d-flex">
									<Link href="/campaignedit" id="edit" className="btn borderbtn green-btn btn-sm me-2">Edit</Link><Link href="#" id="lock" className="btn borderbtn red-btn btn-sm me-2">Lock/Pause</Link><Link href="#" id="copy" className="btn borderbtn btn-sm">Copy</Link>
								</div>
								</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><Badge bg="success">Active</Badge></td>
								<td><span className="t-info">Public - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
								<td className="flxcahbtn">
								<div className="d-flex">
									<Link href="/campaignedit" id="edit" className="btn borderbtn green-btn btn-sm me-2">Edit</Link><Link href="#" id="lock" className="btn borderbtn red-btn btn-sm me-2">Lock/Pause</Link><Link href="#" id="copy" className="btn borderbtn btn-sm">Copy</Link>
								</div>
								</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><Badge bg="success">Active</Badge></td>
								<td><span className="t-info">Public - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
								<td className="flxcahbtn">
								<div className="d-flex">
									<Link href="/campaignedit" id="edit" className="btn borderbtn green-btn btn-sm me-2">Edit</Link><Link href="#" id="lock" className="btn borderbtn red-btn btn-sm me-2">Lock/Pause</Link><Link href="#" id="copy" className="btn borderbtn btn-sm">Copy</Link>
								</div>
								</td>
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

export default Advertiserdashboard;