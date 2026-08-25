"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';

const page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2 text-start">Enable Google Authenticator</h2>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="panelcontentbox">
                        <p className="content mb-3 pb-3 t-gray">Google Authenticator is a dynamic password tool that works like SMS dynamic verification. A dynamic verification code is generated every 30s after binding, and the verification code can be used for security verification of operations such as login, coin withdrawal, and modification of security settings.</p>

                        <div className="securitycontentbox authbg">

                            <Form className='siteformbg'>
                                <div className="secttable table-content">
                                    <div> <span className="numiconb">1</span> </div>
                                    <div>
                                        <h3>Download Google Authenticator APP</h3>
                                        <ul>
                                            <li> iOS users log in to the App Store to search for "Google Authenticator". </li>
                                            <li> Android users log in to the app store or use the mobile browser to search for "Google Authenticator". </li>
                                        </ul>
                                        <div className="d-flex gap-2"> <Image src="assets/images/playstore.svg" alt="img" className="apimg" /> <Image src="assets/images/apk.svg" alt="img" className="apimg" /> </div>
                                    </div>
                                </div>
                                <div className="secttable table-content">
                                    <div> <span className="numiconb">2</span> </div>
                                    <div>
                                        <h3>Add key in Google Authenticator and back up</h3>
                                        <p className="content">Open Google Authenticator, scan the QR code or enter the key below to add the verification token.</p>
                                        <div className="qrimg"> <Image src="assets/images/qrcode.png" alt="img" className="g-qr" /> </div>
                                        <div className="google_code d-flex gap-2">
                                            <h5 className="h5">JZZFG3S6HA3DQMTH</h5>
                                            <div className="alink copy">Copy Key </div>
                                        </div>
                                        <p className="content">Note: Please save your private key properly in case of any login issues caused by switching or losing your phone.</p>
                                    </div>
                                </div>
                                <div className="secttable table-content">
                                    <div> <span className="numiconb">3</span> </div>
                                    <div>
                                        <Form.Group className="form-group" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                                            <Form.Control name="code" placeholder="Google 2fa code" id="otpverify" />
                                        </Form.Group>
                                        <div className="mt-3">
                                            <Button className="sitebtn" id="otpsubmit">Submit</Button>
                                        </div>
                                    </div>
                                </div>

                            </Form>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default page


