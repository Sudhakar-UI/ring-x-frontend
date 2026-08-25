"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, InputGroup, Form, Button, Image, FormCheck } from "react-bootstrap";
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
											<h2 className="heading-title pb-3">Login</h2>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Username </Form.Label>
													<Form.Control type="text" name="" id="username" />
												</Form.Group>
												<Form.Group className="form-group">
													<Form.Label>Password</Form.Label>
													<InputGroup>
														<Form.Control type="text" id="password" />
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
												<div className="d-flex logflex">
													<Form.Group className="form-group">
														<FormCheck type="checkbox" id="terms-agreement" label="Remember Me" />
													</Form.Group>
													<div className="text-end"><p className="btngray"> <Link href="/forgot" className="t-blue" id="reset">Forgot your password?</Link> </p></div>
												</div>
												<div className="text-center">
													<Button type="submit" className=" sitebtn ashbtn" id="submit"> Submit </Button>
												</div>
											</div>
										</div>
										<div className="logbottomcellbox">
											<p className="btngray mb-0"> Don't have an account?<Link href="/signup" className="ms-1 t-blue" id="register"> Create an account </Link>
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


