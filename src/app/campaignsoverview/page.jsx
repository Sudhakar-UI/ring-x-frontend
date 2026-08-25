"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Table } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Campaignsoverview = () => {

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
			<Container className="sitecontainer">	
				<h2 className="h2">Campaign Overview</h2>
				<div className="tabrightbox">
					<Link href="/advertiserdashboard" id="backbtn" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
				</div>
			</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer">	
				<div className="panelcontentbox campaignoverview">
						<div className="commissinbox">
							<h2 className="heading-box pt-0 ps-2 border-0">Commission Statistics (All Time)</h2>							
							<div className="balancedirectbox d-flex">
								<div className="panelcontentbox">
									<div className="contentbox">
										<div> <Image src="assets/images/commissionscount.svg" /> </div>
										<div>
											<h5>Commissions</h5>
											<h4>$2,244</h4>
										</div>
									</div>
								</div>
								<div className="panelcontentbox">
									<div className="contentbox">
										<div> <Image src="assets/images/total-sales.svg" /> </div>
										<div>
											<h5>Total Sales</h5>
											<h4>$2,244</h4>
										</div>
									</div>
								</div>								
								<div className="panelcontentbox">
									<div className="contentbox">
										<div> <Image src="assets/images/pending.svg" /> </div>
										<div>
											<h5>Pending</h5>
											<h4>$2,244</h4>
										</div>
									</div>
								</div>
								<div className="panelcontentbox">
									<div className="contentbox">
										<div> <Image src="assets/images/unpaid.svg" /> </div>
										<div>
											<h5>Un Paid</h5>
											<h4>$2,244</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					<hr className="mt-4 mb-4"/>
					<div className="commissinbox">
					<h2 className="heading-box pt-0 ps-2 border-0">Commission Statistics (For this Month)</h2>
							<div className="balancedirectbox d-flex">
								<div className="panelcontentbox">
									<div className="contentbox">
										<div> <Image src="assets/images/commissionscount.svg" /> </div>
										<div>
											<h5>Commissions</h5>
											<h4>$2,244</h4>
										</div>
									</div>
								</div>
								<div className="panelcontentbox">
									<div className="contentbox">
										<div> <Image src="assets/images/total-sales.svg" /> </div>
										<div>
											<h5>Total Sales</h5>
											<h4>$2,244</h4>
										</div>
									</div>
								</div>								
								<div className="panelcontentbox">
									<div className="contentbox">
										<div> <Image src="assets/images/pending.svg" /> </div>
										<div>
											<h5>Pending</h5>
											<h4>$2,244</h4>
										</div>
									</div>
								</div>
								<div className="panelcontentbox">
									<div className="contentbox">
										<div> <Image src="assets/images/unpaid.svg" /> </div>
										<div>
											<h5>Un Paid</h5>
											<h4>$2,244</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center mt-4 mb-3">
							<Link href="/campaigncreate" className="btn sitebtn" id="createcampaign">Create New Campaign</Link>
						</div>
				</div>	
			</Container>
		</article>
		<Userfooter />		
	</div>
	);
}

export default Campaignsoverview;