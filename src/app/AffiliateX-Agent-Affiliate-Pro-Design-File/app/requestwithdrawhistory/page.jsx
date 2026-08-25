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
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";

const Requestwithdrawhistory = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2 text-start">Request Withdraw History</h2>
                    <div className="tabrightbox">
                        <Link href="/requestwithdraw" className="btn borderbtn btn-sm"><FontAwesomeIcon icon={faArrowLeft} /><span className="backtxt ms-2">Back</span></Link>
                    </div>
                </Container>
            </div>

            <article className="gridparentbox rqwithdpage">
                <Container className="sitecontainer">
                <div className="panelcontentbox">
                    <div className="mb-3 historsysrch">
                        <div className="searchfrmbox">
                        <Form className="siteformbg">
                            <div className="searchfrm">
                            <Form.Group className="form-group" id="startdate">
                                <Form.Label>From</Form.Label>
                                <div className="dateinput">
                                <Flatpickr id="start_date" placeholder="Select a date" value={startDate} onChange={(startDate) => setStartDate(startDate)}
                                    options={{ dateFormat: "Y-m-d", enableTime: false, disableMobile: true, }}
                                /></div>
                            </Form.Group>
                            <Form.Group className="form-group" id="enddate">
                                <Form.Label>To</Form.Label>
                                <div className="dateinput">
                                <Flatpickr id="end_date" placeholder="Select a date" value={endDate} onChange={(endDate) => setEndDate(endDate)} options={{ dateFormat: "Y-m-d", enableTime: false, disableMobile: true, }}
                                />
                                </div>
                            </Form.Group>
                            <div className="clearbtn">
                                <Form.Group className="form-group">
                                <Button className="btn sitebtn btn-sm me-1" id="searchbtn">Search</Button>
                                <Link href="/" className="btn sitebtn btn-sm red-btn" id="resetbtn">Reset</Link>
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>status</Form.Label>
                                <Form.Select className="form-control" id="allcoin">
                                <option>Pending</option>
                                <option>Completed</option>
                                </Form.Select>
                            </Form.Group>
                            </div>
                        </Form>
                        </div>
                    </div>
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
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Requestwithdrawhistory