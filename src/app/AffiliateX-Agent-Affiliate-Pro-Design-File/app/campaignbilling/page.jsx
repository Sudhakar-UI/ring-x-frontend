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

const page = () => {


    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2 text-start">Billing </h2>
                    <div className="tabrightbox">
                    <Link href="/advertiserdashboard" id="backbtn" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
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
                                        <Col lg={4} md={6}>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Crypto/Currency</Form.Label>
                                                <Form.Select className="form-control" id="crypto">
                                                    <option>BTC</option>
                                                    <option>ETH</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Payment ID</Form.Label>
                                                <Form.Control type="text" placeholder="AF452646" id="payment_id" />
                                            </Form.Group>
                                        </Col>                                        
                                        <Col lg={4} md={6}>
                                            <Form.Group className="form-group">
                                                <Form.Label>Campaign ID</Form.Label>
                                                <Form.Control type="text" placeholder="AF452646" id="campaign_id" />
                                            </Form.Group>                                       
                                            <Form.Group className="form-group">
                                                <Form.Label>Amount</Form.Label>
                                                <Form.Control type="text" id="amount" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                     <Col lg={8} md={12}>                                           
                                            <Form.Group className="form-group text-center mt-2">
                                                <Button className="btn sitebtn btn-block" id="submit">Submit</Button>
                                            </Form.Group>    
                                     </Col>
                                    </Row>                                    
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="wlltdpstbox mt-3">
                        <h2 className="heading-box pt-0 ps-2 border-0">Recent Payment History</h2>
                        <div className="tabrightbox">
                            <Link href="/campaignpayouthistory" id="viewbtn" className="alink"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">View More</span></Link>
                        </div>                        
                        <div className="panelcontentbox">
                            <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable table-responsive-stack" id="table1">
                                <thead>
                                    <tr>
                                        <th>Payment ID</th>
                                        <th>Date</th>
                                        <th>Compaign ID</th>
                                        <th>Compaign Value</th>
                                        <th>Amount</th>
                                        <th>Coin Type</th>
                                        <th>Transaction Type</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AF24646</td>
                                        <td>18/01/2024</td>                    
                                        <td>AF24646</td>
                                        <td>150</td>
                                        <td>150</td>
                                        <td>Crypto</td>
                                        <td>GFASTEUWHWJROIU648</td>
                                        <td><Badge bg="success">Completed</Badge></td>                    
                                    </tr>
                                    <tr>
                                        <td>AF24646</td>
                                        <td>18/01/2024</td>                    
                                        <td>AF24646</td>
                                        <td>150</td>
                                        <td>150</td>
                                        <td>Crypto</td>
                                        <td>GFASTEUWHWJROIU648</td>
                                        <td><Badge bg="success">Completed</Badge></td>                    
                                    </tr>
                                    <tr>
                                        <td>AF24646</td>
                                        <td>18/01/2024</td>                    
                                        <td>AF24646</td>
                                        <td>150</td>
                                        <td>150</td>
                                        <td>Crypto</td>
                                        <td>GFASTEUWHWJROIU648</td>
                                        <td><Badge bg="success">Completed</Badge></td>                    
                                    </tr>
                                    <tr>
                                        <td>AF24646</td>
                                        <td>18/01/2024</td>                    
                                        <td>AF24646</td>
                                        <td>150</td>
                                        <td>150</td>
                                        <td>Crypto</td>
                                        <td>GFASTEUWHWJROIU648</td>
                                        <td><Badge bg="success">Completed</Badge></td>                    
                                    </tr>
                                    <tr>
                                        <td>AF24646</td>
                                        <td>18/01/2024</td>                    
                                        <td>AF24646</td>
                                        <td>150</td>
                                        <td>150</td>
                                        <td>Crypto</td>
                                        <td>GFASTEUWHWJROIU648</td>
                                        <td><Badge bg="success">Completed</Badge></td>                    
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

export default page