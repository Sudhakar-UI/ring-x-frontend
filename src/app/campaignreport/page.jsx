"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Button } from 'react-bootstrap';
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


const Campaignreport = () => {

	return (
		<div className="pagecontent gridpagecontent innerpagegrid campaignreport-page">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">Campaign Peformance Report</h2>
					{/* <div className="tabrightbox">
					<Link href="/advertiserdashboard" id="backbtn" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
				</div> */}
				</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="panelcontentbox campaignmangepage">
						<div className=' d-flex align-items-center justify-content-between'>
							<h2 className="heading-box pt-0 ps-0 mb-0 p-0">List of Details</h2>
							{/* <button href="/advertiserdashboard" className='sitebtn btn-sm'>Download</button> */}
						</div>
						{/* <h2 className="heading-box pt-0 ps-0 mb-3">List of Details</h2>
					<div className="tabrightbox">
						<Button type="button" id="downloadbtn" className="btn borderbtn btn-sm">Download</Button>
					</div> */}
						<SimpleBar className="table-responsive sitescroll">
							<Table className="sitetable table-responsive-stack" id="table1">
								<thead>
									<tr>
										<th>Campaign ID</th>
										<th>Campaign Name</th>
										<th>Commission Spent</th>
										<th>	Visibility</th>
										<th>	Created At</th>
										<th>	Status</th>
									</tr>
								</thead>
								<tbody>
									{/* <tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><span className="t-info">Private - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><span className="t-info">Public - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><span className="t-info">Public - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><span className="t-info">Private - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><span className="t-info">Public - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
							</tr>
							<tr>
								<td>AF24646</td>
								<td>John</td>
								<td>Per click : $100, Registration : 0%</td>
								<td><span className="t-info">Public - Visible On</span></td>
								<td>18/01/2024, 05:05:00</td>                    
								<td>No</td>
							</tr> */}
									<tr className="nodata">
										<td colSpan={6}>
											<Image src="../assets/images/nodata.svg" />
											<p>No record found</p>
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

export default Campaignreport;