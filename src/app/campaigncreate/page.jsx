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
		<div className="pagecontent gridpagecontent innerpagegrid campaign-page-new">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer campaign-wrapper-new">
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
							{/* DETAILS SECTION */}

							<div className="card-head-new pt-0">
								<div className="card-icon-new">
									<i className="fa fa-bullhorn"></i>
								</div>

								<div>
									<h4>Campaign Details</h4>
									<p>Enter campaign information and branding details</p>
								</div>
							</div>

							<div className="card-body-new">

								<Row className="details-row-new">

									<Col lg={6}>

										<Form.Group className="form-group details-group-new">

											<Form.Label className="input-label-new">
												Campaign Name
											</Form.Label>

											<Form.Control
												placeholder="Enter campaign name"
												id='campaignname'
												className="input-box-new"
											/>

										</Form.Group>

									</Col>

									<Col lg={6}>
										<Form.Group className="form-group kycupload">
											<Form.Label>Upload Campaign Logo <span className="t-red">*</span></Form.Label>
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

									<Col lg={6}>

										<Form.Group className="form-group details-group-new">

											<Form.Label className="input-label-new">
												Short Description
											</Form.Label>

											<Form.Control
												as="textarea"
												rows="5"
												id='shortdescription'
												className="textarea-box-new"
												placeholder="Enter short description"
											/>

										</Form.Group>

									</Col>

									<Col lg={6}>

										<Form.Group className="form-group details-group-new">

											<Form.Label className="input-label-new">
												Long Description
											</Form.Label>

											<Form.Control
												as="textarea"
												rows="5"
												id='longdescription'
												className="textarea-box-new"
												placeholder="Enter detailed description"
											/>

										</Form.Group>

									</Col>

								</Row>

							</div>



							<div className="card-head-new">
								<div className="card-icon-new">
									{/* <i className="fa fa-bullhorn"></i> */}
									<Image src="assets/images/campain-status.svg" className="coinlisticon-o" width={20} height={20} alt="icon" />
								</div>

								<div>
									<h4>Campaign Status</h4>
								</div>
							</div>

							<div className="card-body-new p-0 py-2">

								<div className="status-grid-new">

									<div className="status-option-new active-status-new">
										<Form.Check
											type="radio"
											label="Active"
											name="campaignStatus"
										/>
										<div className="status-desc-new">
											Visible to affiliates
										</div>
									</div>

									<div className="status-option-new pause-status-new">
										<Form.Check
											type="radio"
											label="Paused"
											name="campaignStatus"
										/>
										<div className="status-desc-new">
											Visible to affiliates
										</div>
									</div>

									<div className="status-option-new stop-status-new">
										<Form.Check
											type="radio"
											label="Stopped"
											name="campaignStatus"
										/>
										<div className="status-desc-new">
											Invisible to affiliates
										</div>
									</div>

								</div>

							</div>
							{/* COOKIES SECTION */}

							<div className="card-head-new">
								<div className="card-icon-new">
									{/* <i className="fa fa-cookie-bite"></i> */}
									<Image src="assets/images/cookies.svg" className="coinlisticon-o" width={20} height={20} alt="icon" />
								</div>

								<div>
									<h4>Cookies</h4>
									<p>Configure cookie settings for this campaign</p>
								</div>
							</div>

							<div className="card-body-new">

								<Row className="cookie-row-new">

									<Col lg={4}>
										<Form.Group className="form-group cookie-group-new">

											<Form.Label className="input-label-new">
												Limit cookie lifetime to (days)
											</Form.Label>

										</Form.Group>
									</Col>

									<Col lg={8}>
										<Form.Group className="form-group cookie-group-new">

											<Form.Control
												id='cookielifetime'
												className="input-box-new"
												placeholder="Enter cookie lifetime"
											/>

											<small className="helper-text-new">
												The lifetime of cookies in days, setting applies to this campaign only.
												If you specify 14 days, affiliates will get commission for all sales
												done in the next 14 days after the visitor clicked on affiliate link.
											</small>

										</Form.Group>
									</Col>

								</Row>

								<Row className="cookie-row-new">

									<Col lg={4}>
										<Form.Group className="form-group cookie-group-new">

											<Form.Label className="input-label-new">
												Overwrite previous cookies
											</Form.Label>

										</Form.Group>
									</Col>

									<Col lg={8}>

										<Form.Group className="form-group cookie-group-new">

											<div className="radio-group-new">

												<div className="radio-card-new">
													<FormCheck
														type="radio"
														id="overwrite_yes"
														label="Yes"
														name="overwrite"
													/>
												</div>

												<div className="radio-card-new">
													<FormCheck
														type="radio"
														id="overwrite_no"
														label="No"
														name="overwrite"
													/>
												</div>

												<div className="radio-card-new">
													<FormCheck
														type="radio"
														id="overwrite_defualt"
														label="Default (No)"
														name="overwrite"
													/>
												</div>

											</div>

											<small className="helper-text-new">
												Check if you want to overwrite all previous cookies set by another campaigns.
												This ensures the latest click is considered while computing commissions.
											</small>

										</Form.Group>

									</Col>

								</Row>

								<Row className="cookie-row-new">

									<Col lg={4}>
										<Form.Group className="form-group cookie-group-new">

											<Form.Label className="input-label-new">
												Delete cookie after lead/sale
											</Form.Label>

										</Form.Group>
									</Col>

									<Col lg={8}>

										<Form.Group className="form-group cookie-group-new">

											<div className="radio-group-new">

												<div className="radio-card-new">
													<FormCheck
														type="radio"
														id="delete_yes"
														label="Yes"
														name="deletecookie"
													/>
												</div>

												<div className="radio-card-new">
													<FormCheck
														type="radio"
														id="delete_no"
														label="No"
														name="deletecookie"
													/>
												</div>

												<div className="radio-card-new">
													<FormCheck
														type="radio"
														id="delete_default"
														label="Default (No)"
														name="deletecookie"
													/>
												</div>

											</div>

										</Form.Group>

									</Col>

								</Row>

							</div>
							{/* AFFILIATE LINKING METHOD */}

							<div className="card-head-new">
								<div className="card-icon-new">
									{/* <i className="fa fa-link"></i> */}
									<Image src="assets/images/linkid.svg" className="coinlisticon-o" width={20} height={20} alt="icon" />

								</div>

								<div>
									<h4>Affiliate Linking Method</h4>
									<p>Choose how affiliates will be linked</p>
								</div>
							</div>

							<div className="card-body-new">

								<Row className="linksstylerowbox affiliate-row-new">

									<Col lg={12}>

										<Form.Group className="form-group affiliate-group-new">

											<div className="link-style-box-new">

												<Table
													className="sitetable affiliate-table-new"
													id="table1"
												>

													<thead>

														<tr>
															<th>Link Style</th>
															<th>Ratings</th>
															<th>Sample URL</th>
														</tr>

													</thead>

													<tbody>

														<tr className="affiliate-table-row-new">

															<td>
																<div className="radio-card-new">

																	<FormCheck
																		type="radio"
																		id="linkstylestatus1"
																		label="Default (Tracking Settings)"
																		name="linkstyle"
																	/>

																</div>
															</td>

															<td>

																<div className="star-rating-new">

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																</div>

															</td>

															<td className="sample-link-new">
																https://www.text.com/FGDSGSAH46646
															</td>

														</tr>

														<tr className="affiliate-table-row-new">

															<td>
																<div className="radio-card-new">

																	<FormCheck
																		type="radio"
																		id="linkstylestatus2"
																		label="Anchor Links"
																		name="linkstyle"
																	/>

																</div>
															</td>

															<td>

																<div className="star-rating-new">

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																</div>

															</td>

															<td className="sample-link-new">
																https://www.text.com/FGDSGSAH46646
															</td>

														</tr>

														<tr className="affiliate-table-row-new">

															<td>
																<div className="radio-card-new">

																	<FormCheck
																		type="radio"
																		id="linkstylestatus3"
																		label="New style links (URL Parameters)"
																		name="linkstyle"
																	/>

																</div>
															</td>

															<td>

																<div className="star-rating-new">

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																</div>

															</td>

															<td className="sample-link-new">
																https://www.text.com/FGDSGSAH46646
															</td>

														</tr>

														<tr className="affiliate-table-row-new">

															<td>
																<div className="radio-card-new">

																	<FormCheck
																		type="radio"
																		id="linkstylestatus4"
																		label="Mod Rewrite links"
																		name="linkstyle"
																	/>

																</div>
															</td>

															<td>

																<div className="star-rating-new">

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																</div>

															</td>

															<td className="sample-link-new">
																https://www.text.com/FGDSGSAH46646
															</td>

														</tr>

														<tr className="affiliate-table-row-new">

															<td>
																<div className="radio-card-new">

																	<FormCheck
																		type="radio"
																		id="linkstylestatus5"
																		label="Direct link style (no URL Parameters)"
																		name="linkstyle"
																	/>

																</div>
															</td>

															<td>

																<div className="star-rating-new">

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																</div>

															</td>

															<td className="sample-link-new">
																https://www.text.com/FGDSGSAH46646
															</td>

														</tr>

														<tr className="affiliate-table-row-new">

															<td>
																<div className="radio-card-new">

																	<FormCheck
																		type="radio"
																		id="linkstylestatus6"
																		label="Redirect links"
																		name="linkstyle"
																	/>

																</div>
															</td>

															<td>

																<div className="star-rating-new">

																	<span className="star-active-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																	<span className="star-disable-new">
																		<FontAwesomeIcon icon={faStar} />
																	</span>

																</div>

															</td>

															<td className="sample-link-new">
																https://www.text.com/FGDSGSAH46646
															</td>

														</tr>

													</tbody>

												</Table>

											</div>

										</Form.Group>

									</Col>

								</Row>

								<Row className="affiliate-input-row-new">



									<Col lg={6}>

										<Form.Group className="form-group affiliate-group-new">
											<Form.Label className="input-label-new">
												Campaign URL
											</Form.Label>

											<Form.Control
												id='campaignurl'
												className="input-box-new"
												placeholder="Enter campaign URL"
											/>

											<small className="helper-text-new">
												This URL is used instead of Main site URL for redirect and Mod Rewrite links
											</small>

										</Form.Group>

									</Col>



									<Col lg={6}>

										<Form.Group className="form-group affiliate-group-new">
											<Form.Label className="input-label-new">
												Additional URL Parameters for campaign ?
											</Form.Label>

											<Form.Control
												id='campaignurl_parameter'
												className="input-box-new"
												placeholder="Enter URL parameters"
											/>

											<small className="helper-text-new">
												Example : param1=value1 & param2=value2
											</small>

										</Form.Group>

									</Col>
								</Row>



							</div>
							{/* PRODUCT ID MATCHING */}

							<div className="card-head-new">
								<div className="card-icon-new">
									{/* <i className="fa fa-box"></i> */}
									<Image src="assets/images/product-id-matching.svg" className="coinlisticon-o" width={20} height={20} alt="icon" />

								</div>

								<div>
									<h4>Product ID Matching</h4>
									<p>Configure product based campaign matching</p>
								</div>
							</div>

							<div className="card-body-new">

								<Row className="product-row-new">



									<Col lg={6}>

										<Form.Group className="form-group product-group-new">
											<Form.Label className="input-label-new">
												Product ID's
											</Form.Label>

											<Form.Control
												id='productid'
												className="input-box-new"
												placeholder="Enter product IDs separated by comma"
											/>

											<small className="helper-text-new">
												Campaign for commissions can be chosen by product ID instead of banner.
												Specify all product ID's that belong to this campaign.
												Product ID's should be comma separated.
											</small>

										</Form.Group>

									</Col>

								</Row>

								<div className="extended-search-box-new">

									<div className="checkbox-card-new">

										<FormCheck
											type="checkbox"
											id="searchmode"
											label="Extended search mode"
											className="checkbox-new"
										/>

									</div>

									<p className="extended-info-new">
										Enable advanced product searching and campaign matching support.
									</p>

								</div>

								<div className="submit-btn-wrapper-new">

									<Button
										className="sitebtn submit-btn-new"
										id="submit"
									>
										Create Campaign
									</Button>

								</div>

							</div>

						</Form>
					</div>
				</Container>
			</article>
			<Userfooter />
		</div>
	);
}

export default Campaigncreate;