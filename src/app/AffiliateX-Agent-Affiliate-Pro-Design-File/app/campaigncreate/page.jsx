"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Row, Col, Form, FormCheck, Button } from 'react-bootstrap';
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
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Campaigncreate = () => {
	const [imageName, setImageName] = useState('');
    const [imageSrc, setImageSrc] = useState('assets/images/proof.svg');

    const readURL = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleFileChange = (event) => {
        setImageName(event.target.files[0].name);
        readURL(event.target);
    };
	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
			<Container className="sitecontainer">	
				<h2 className="h2">Create Campaign</h2>
				<div className="tabrightbox">
					<Link href="/campaignsoverview" id="backbtn" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
				</div>
			</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer">	
				<div className="panelcontentbox createcampaignpage">
					<Form className="siteformbg">
				  	 <h5 className="subhead pb-0">Details</h5>
					 <hr/>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Campaign Name</Form.Label>
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<Form.Control placeholder="" id='campaignname' />
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Upload Campaign Logo <span className="t-red">*</span></Form.Label>
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group kycupload">
								<div className="kycproffbox">
										<div>
											<Image id="doc2" src={imageSrc} width={20} height={20} alt="front" />
										</div>
										<div className="uploadprofileiconbox text-end">
											<label className="custom-file-upload customupload" is="file-upload1">Upload here..</label>
											<input id="id_backdoc" onChange={handleFileChange} name="profile" type="file" />
										</div>
									</div>
									<small>(Upload your image like jpg,jpeg,png (MAX: 12MB))</small>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Short Description</Form.Label>
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<Form.Control as="textarea" rows="5" id='shortdescription' />
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Long Description</Form.Label>
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<Form.Control as="textarea" rows="5" id='longdescription' />
								</Form.Group>
							</Col>
						</Row>					
					
						<h5 className="subhead pb-0">Campaign Status</h5>
						<hr/>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Status</Form.Label>								
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="form-group">
									<div className="d-flex">
										<div className="me-4"><FormCheck type="radio" id="activestatus" label="Active" /></div>
										<div className="me-4"><FormCheck type="radio" id="pausedstatus" label="Paused (Visible to affiliates)" /></div>
										<div className="me-4"><FormCheck type="radio" id="stoppedstatus" label="Stopped (Invisible to affiliates)" /></div>
									</div>
								</Form.Group>
							</Col>
						</Row>
						<h5 className="subhead pb-0">Cookies</h5>
						<hr/>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Limit cookie lifetime to (days)</Form.Label>								
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<Form.Control id='cookielifetime' />
									<small>The lifetime of cookies in days, setting applies to this campaign only. For example, If you specify 14 days, Affiliates will get commission for all sales done in the next 14 days after the visitor clicked on affiliate link.</small>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Overwrite previous cookies</Form.Label>								
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<div className="d-flex">
										<div className="me-4"><FormCheck type="radio" id="overwrite_yes" label="Yes" /></div>
										<div className="me-4"><FormCheck type="radio" id="overwrite_no" label="No" /></div>
										<div className="me-4"><FormCheck type="radio" id="overwrite_defualt" label="Default (No)" /></div>
									</div>
									<small>Check if you want to overwrite all previous cookies set by another campaigns. That will ensure that always the latest click is considered when computing commissions.</small>
								</Form.Group>
							</Col>
						</Row>
						<Row>						
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Delete cookie after lead/sale</Form.Label>							
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<div className="d-flex">
										<div className="me-4"><FormCheck type="radio" id="delete_yes" label="Yes" /></div>
										<div className="me-4"><FormCheck type="radio" id="delete_no" label="No" /></div>
										<div className="me-4"><FormCheck type="radio" id="delete_default" label="Default (No)" /></div>
									</div>
								</Form.Group>
							</Col>
						</Row>
						<h5 className="subhead pb-0">Affiliate Linking Method</h5>
						<hr/>
						<Row className="linksstylerowbox">
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Link Style</Form.Label>								
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<Table className="sitetable" id="table1">
										<thead>
											<tr>
												<th></th>
												<th>Anchor Links</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><FormCheck type="radio" id="linkstylestatus" label="Defult (Tracking Settings)" /></td>
												<td><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span></td>
												<td>https://www.text.com/FGDSGSAH46646</td>
											</tr>
											<tr>
												<td><FormCheck type="radio" id="linkstylestatus" label="Anchor links" /></td>
												<td><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span></td>
												<td>https://www.text.com/FGDSGSAH46646</td>
											</tr>
											<tr>
												<td><FormCheck type="radio" id="linkstylestatus" label="New style links (URL Parameters)" /></td>
												<td><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span></td>
												<td>https://www.text.com/FGDSGSAH46646</td>
											</tr>
											<tr>
												<td><FormCheck type="radio" id="linkstylestatus" label="Mod Rewrite links" /></td>
												<td><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span></td>
												<td>https://www.text.com/FGDSGSAH46646</td>
											</tr>
											<tr>
												<td><FormCheck type="radio" id="linkstylestatus" label="Direct link style (no URL Parameters)" /></td>
												<td><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span></td>
												<td>https://www.text.com/FGDSGSAH46646</td>
											</tr>
											<tr>
												<td><FormCheck type="radio" id="linkstylestatus" label="Redirect links" /></td>
												<td><span className="staricon t-gray selected"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span><span className="staricon t-gray"><FontAwesomeIcon icon={faStar} /></span></td>
												<td>https://www.text.com/FGDSGSAH46646</td>
											</tr>
										</tbody>
									</Table>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Campaign URL</Form.Label>								
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<Form.Control id='campaignurl' />
									<small>This URL is used instead of Main site URL for redirect and Mod Rewrite links</small>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Additional URL Parameters for campaign ?</Form.Label>								
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<Form.Control id='campaignurl_parameter' />
									<small>example : Param1=value 1 & param 2=value or for anchor params: # param1=value1 &parm2=value2</small>
								</Form.Group>
							</Col>
						</Row>
						<h5 className="subhead pb-0">Product ID Matching</h5>
						<hr/>
						<Row>
							<Col lg={3}>
								<Form.Group className="form-group">
									<Form.Label>Product ID's</Form.Label>								
								</Form.Group>
							</Col>
							<Col lg={4}>
								<Form.Group className="form-group">
									<Form.Control id='productid' />
									<small>Campaign for commissions can be choosen by product ID instead of banner. To do this you need to specify all product IS's that belong to this campaign. Product ID's need to be comma separated.</small>
								</Form.Group>
							</Col>
						</Row>
						<Form.Group className="form-group">
							<FormCheck type="checkbox" id="searchmode" label="Extended search mode" />
						</Form.Group>
						<Form.Group className="form-group">
							<Button className="sitebtn" id="submit">Create</Button>
						</Form.Group>
					</Form>
				</div>	
			</Container>
		</article>
	<Userfooter />		
	</div>
	);
}

export default Campaigncreate;