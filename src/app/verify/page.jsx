"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Image, Form } from 'react-bootstrap'
import Homeheader from '../components/Homeheader';

const page = () => {
    useEffect(() => {
        document.body.classList.add('loginbanner');
        document.body.classList.remove('userpanelpage');
    })

    return (
        <div>
            <Homeheader />
           
            <section className="formbg">
                <Container>
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
                                        <h2 className="heading-title pb-3">Email Verification</h2>                                    
                                            <p className="content">Please enter the 6-digit verification code that was sent to john@mailinator.com</p>
                                            <div className="formcontentbox mt-3">
                                                <Form.Group className="form-group">
                                                <Form.Label>Enter OTP Code </Form.Label>
                                                    <Form.Control name="code" type="number" id="otpcode" />
                                                </Form.Group>
                                                <Form.Group className="mb-3 text-center">
                                                    <input type="submit" name="" className="btn sitebtn" value="Submit" id="submit"/>
                                                </Form.Group>

                                            </div>
                                        </div>
                                        <div className="logbottomcellbox">
                                            <p className="btngray mb-0">Mail not received click resend link, <Link href="/signin" className="t-blue" id="resend">Resend Code</Link>
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
    )
}

export default page
