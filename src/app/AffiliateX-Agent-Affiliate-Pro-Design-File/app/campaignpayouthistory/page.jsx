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


const Campaignpayouthistory = () => {

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