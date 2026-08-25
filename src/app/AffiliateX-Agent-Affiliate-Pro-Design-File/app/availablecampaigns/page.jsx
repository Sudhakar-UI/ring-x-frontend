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


const Availablecampaigns = () => {
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
			<article className="gridparentbox">
				<Container className="sitecontainer">	
				<div className="panelcontentbox">
					  <div className="innerpagetab historytab mb-4">
						<Nav variant="pills" className="tabbanner">
							<Nav.Item><Nav.Link href="/availablecampaigns" className="active" id='campaigntab'>Available Campaign</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link href="/affiliateperformance" id='performancetab'>Affiliate Performance</Nav.Link></Nav.Item>
						</Nav>
					</div>
						<div className="mb-3 mt-4 historsysrch">
						<div className="searchfrmbox">
							<Form className="siteformbg">
								<div className="searchfrm">
									<Form.Group className="mb-3">
										<Form.Label>Search Campaign</Form.Label>
										<Form.Control className="form-control" id="campaign"/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Category</Form.Label>
										<Form.Select className="form-control" id="category">
										<option>Beauty</option>
										</Form.Select>
									</Form.Group>		
									<Form.Group className="mb-3">
										<Form.Label>Payout Type</Form.Label>
										<Form.Select className="form-control" id="type">
										<option>Beauty</option>
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
								<th>Campaign Name</th>
								<th>Category</th>
								<th>Payout per Click</th>
								<th>Payout per Conversion</th>
								<th>Description</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>GlowUp Skincare</td>
								<td>Beauty</td>
								<td>$0.20</td>
								<td>$12.00</td>
								<td>Promote natural skincare</td>
								<td><Button onClick={handleShowModal1} id="generatelink" className="btn viewbtn">Generate Link</Button></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>Beauty</td>
								<td>$0.20</td>
								<td>$12.00</td>
								<td>Promote natural skincare</td>
								<td><Button onClick={handleShowModal1} id="generatelink" className="btn viewbtn">Generate Link</Button></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>Beauty</td>
								<td>$0.20</td>
								<td>$12.00</td>
								<td>Promote natural skincare</td>
								<td><Button onClick={handleShowModal1} id="generatelink" className="btn viewbtn">Generate Link</Button></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>Beauty</td>
								<td>$0.20</td>
								<td>$12.00</td>
								<td>Promote natural skincare</td>
								<td><Button onClick={handleShowModal1} id="generatelink" className="btn viewbtn">Generate Link</Button></td>
							</tr>
							<tr>
								<td>GlowUp Skincare</td>
								<td>Beauty</td>
								<td>$0.20</td>
								<td>$12.00</td>
								<td>Promote natural skincare</td>
								<td><Button onClick={handleShowModal1} id="generatelink" className="btn viewbtn">Generate Link</Button></td>
							</tr>
						</tbody>
						</Table>
					</SimpleBar>
					<ResponsiveTable tableId="table1" />		
				</div>	
			</Container>
		</article>
		<Userfooter />		

		<Modal show={showModal1} onHide={handleCloseModal1}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modalbgt'>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Generate Tracking Link
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className="siteformbg">
			<Form.Group className="form-group">
					<Form.Label className="">Campaign Name <span className="text-danger">*</span></Form.Label>
					<Form.Control type="text" id="accounttype"/>
				</Form.Group>
			
				<Form.Group className="form-group">
					<Form.Label>Tracking Link</Form.Label>
					<InputGroup>
						<Form.Control type="text" id="track_link" />
						<div className="input-group-append">
							<InputGroup.Text id="copybtn">Copy</InputGroup.Text>
						</div>
					</InputGroup>
				</Form.Group>
			
				<Form.Group className="form-group">
					<Form.Label className="">Sub-ID </Form.Label>
					<Form.Control type="text" id="subid"/>
				</Form.Group>
                
            </Form>
        </Modal.Body>
    </Modal>

	</div>
	);
}

export default Availablecampaigns;