"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
	useEffect(() => {
		document.body.classList.add('loginbanner');
		document.body.classList.remove('userpanelpage');
	})
	return (
		<div>
			<Homeheader />

			<section className="formbg">
				<Container className="sign">
					<div className="formboxbg">
						<div className="leftsideformbox">
							<div className="leftsidecontent">
							<h2><span className="txt-yellow">ringx</span> - Powering the future of Affiliate Marketing</h2>
							<p>Maximize your earnings, grow your network, and track rela-time performance with our smart affiliate solutions.</p>
							</div>

							<Image src="assets/images/buytoken.svg" className="loginiconb" width={50} height={50} alt="icon" />
						</div>
						<div className="rightsideformbox">
							<Form className="siteformbg">
								<div className="login-form">
									<div className="loginformbox">
										<div className="logcenterbox">
											<h2 className="heading-title pb-3">Forgot Password</h2>
											<p className="btngray">Enter your e-mail address to receive the reset password link</p>
											<div className="formcontentbox mt-4">
												<Form.Group className="form-group">
													<Form.Label>Email Address </Form.Label>
													<Form.Control type="text" name="" id="email" />
												</Form.Group>
												<div className="text-center">
													<Button type="submit" className=" sitebtn ashbtn" id="submit">Update Password</Button>
												</div>
											</div>
										</div>
										<div className="logbottomcellbox">
											<p className="btngray"><Link href="/signin" className="ms-1 t-blue" id="login"><i className="fa fa-long-arrow-left me-2"></i> Back to login </Link>
											</p>
										</div>
									</div>

								</div>
							</Form>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}

export default Page;


