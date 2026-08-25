"use client"
import React, { useState } from "react";
import Leftsidemenu from "../components/Leftsidemenu";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import { Container, Image, Table, Form, Button, Row, Col, Badge, InputGroup, Nav, Accordion } from 'react-bootstrap';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import ResponsiveTable from '../components/ResponsiveTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Requestwithdraw = () => {

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2 text-start">Request Withdraw </h2>
                    <div className="tabrightbox">
                    <Link href="/advertiserdashboard" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
                </div>
                </Container>
            </div>

            <article className="gridparentbox">
                <Container className="sitecontainer depositbg">
                    <div className="">
                        <div className="mt-0 panelcontentbox">                           
                            <div className="walletdiv">
                                <Form className="siteformbg">
                                    <Row>
                                        <Col lg={6} md={6}>
                                            <Form.Group className="form-group">
                                                <Form.Label>Withdrawal Amount</Form.Label>
                                                <Form.Control type="text" placeholder="AF452646" id="payment_id" />
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Payment Method</Form.Label>
                                                <Form.Select className="form-control" id="crypto">
                                                    <option>Bank</option>
                                                </Form.Select>
                                            </Form.Group>     
                                            <div className="notestitle notesgray dpstnotes">
                                                <p className="pb-0"><span className="t-gray">Available Balance	</span>
                                                    <br /><span className="t-black">2,15263 BTC</span>
                                                </p>
                                            </div>                         
                                            <Form.Group className="form-group text-center mt-2">
                                                <Button className="btn sitebtn btn-block" id="submit">Submit</Button>
                                            </Form.Group>                                                                                              
                                        </Col>                                        
                                        <Col lg={6} md={6}>
                                           <Form.Group className="form-group">
                                            <Form.Label><b>Account Details : </b></Form.Label>
                                            <div className="banknotesinfo">
                                                <Table className="sitetable" id="table1">
                                                    <tbody>
                                                        <tr>
                                                            <td>Account No</td>
                                                            <td className="text-end">5426426</td>
                                                        </tr>                                                      
                                                        <tr>
                                                            <td>Account Name</td>
                                                            <td className="text-end">XXXX</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Swift Code</td>
                                                            <td className="text-end">1234</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bank Name</td>
                                                            <td className="text-end">XXXX</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bank Branch</td>
                                                            <td className="text-end">XXXX</td>
                                                        </tr>                                                      
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="wlltdpstbox mt-3">
                        <h2 className="heading-box pt-0 ps-2 border-0">Recent withdraw History</h2>
                        <div className="tabrightbox">
                            <Link href="/requestwithdrawhistory" className="alink"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">View More</span></Link>
                        </div>                        
                        <div className="panelcontentbox">
                            <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable table-responsive-stack" id="table1">
                                <thead>
                                    <tr>
                                        <th>Request Date</th>
                                        <th>Amount Requested</th>
                                        <th>Payment Method</th>
                                        <th>Status</th>
                                        <th>Processed Date</th>                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18/01/2024</td>                    
                                        <td>$500.00</td>
                                        <td>Bank Transfer</td>
                                        <td><Badge bg="success">Completed</Badge></td>  
                                        <td>18/01/2024</td>                                      
                                    </tr>
                                    <tr>
                                        <td>18/01/2024</td>                    
                                        <td>$500.00</td>
                                        <td>Bank Transfer</td>
                                        <td><Badge bg="success">Completed</Badge></td>  
                                        <td>18/01/2024</td>                                      
                                    </tr>
                                    <tr>
                                        <td>18/01/2024</td>                    
                                        <td>$500.00</td>
                                        <td>Bank Transfer</td>
                                        <td><Badge bg="success">Completed</Badge></td>  
                                        <td>18/01/2024</td>                                      
                                    </tr>
                                    <tr>
                                        <td>18/01/2024</td>                    
                                        <td>$500.00</td>
                                        <td>Bank Transfer</td>
                                        <td><Badge bg="success">Completed</Badge></td>  
                                        <td>18/01/2024</td>                                      
                                    </tr>
                                    <tr>
                                        <td>18/01/2024</td>                    
                                        <td>$500.00</td>
                                        <td>Bank Transfer</td>
                                        <td><Badge bg="success">Completed</Badge></td>  
                                        <td>18/01/2024</td>                                      
                                    </tr>
                                    <tr>
                                        <td>18/01/2024</td>                    
                                        <td>$500.00</td>
                                        <td>Bank Transfer</td>
                                        <td><Badge bg="success">Completed</Badge></td>  
                                        <td>18/01/2024</td>                                      
                                    </tr>
                                </tbody>
                                </Table>
                            </Simplebar>
                            <ResponsiveTable tableId="table1" />	
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Requestwithdraw