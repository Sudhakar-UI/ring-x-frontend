"use client"
import React from "react"
import Link from "next/link"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import Leftsidemenu from '../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />   
            <div className="innerpagecontent">
            <Container className="sitecontainer">
                <h2 className="h2 text-start">Change Password</h2>               
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="panelcontentbox">
                    <Form className='siteformbg'>      
                    <Row>
                    <Col lg={4} md={6}>                  
                        <Form.Group className="form-group">
                            <Form.Label>Current Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="current_password"/>
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>New Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="newpassword"/>
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1"/> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="confirmpassword"/>
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} id="eye3" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" id="changebtnsubmit" className="sitebtn w-100">Submit</Button>
                        </div>
                        </Col>
                        <Col lg={4} md={6}>
                        <div className="pt-box pwdnotes mt-4">
                            <h5 className="mb-3"><b className="t-black">Password must contain : </b> </h5>
                            <p className="content mb-1 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least 8 characters.</p>
                            <p className="content mb-1 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least One uppercase
                                (ex: A, B, etc).</p>
                            <p className="content mb-1 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least one lowercase letter (ex: a, b, etc).</p>
                            <p className="content mb-1 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least One numeric digit (ex: 1, 2, 3, etc).</p>
                            <p className="content mb-2 t-gray"><span className="me-2"><FontAwesomeIcon icon={faAngleRight} /></span>At least One special character
                                (ex: @, #, $, etc).</p>
                            <p className="content mb-0"><b>ex: Sample@123</b></p>                                
                        </div>                       
                        </Col>
                        </Row>
                    </Form>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default page


