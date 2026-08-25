"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Image, Table, Row, Form, Col, Tooltip, OverlayTrigger, InputGroup, Badge, Button } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange, faEye } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';




const Page = () => {


    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Transfer</h2>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer transferpage">
                    <div className="flexbox">
                        <div className="panelcontentbox">
                            <h2 className="heading-box pt-0 mb-3 ps-0">Transfer</h2>
                            <Form className="siteformbg">
                                <Row>
                                    <Form.Group className="form-group">
                                        <Form.Label>From</Form.Label>
                                        <Form.Select className="form-control" id='country'>
                                            <option>Funding</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <div className="arrowhead">
                                            <FontAwesomeIcon icon={faExchange} className="exicon" />
                                        </div>
                                        <Form.Label>To</Form.Label>
                                        <Form.Select className="form-control" id='country'>
                                            <option>P2P</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Coin</Form.Label>
                                        <Form.Select className="form-control" id='country'>
                                            <option>BTC</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <div className="arrowhead">
                                            <p className="content mb-0">5.01554 Available</p>
                                        </div>
                                        <Form.Label>Amount</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="number" id="max_amount" />
                                            <div className="input-group-append">
                                                <InputGroup.Text> Max</InputGroup.Text>
                                            </div>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <p className="content">
                                    Transfer between Funding and P2P are considered internal and completely free of charge. These transactions are executed instantly. so you can move your funds seamlessly.
                                </p>
                            </Form>
                            <div className="text-center">
                                <Button className="sitebtn">Transfer</Button>
                            </div>
                        </div>

                        <div className="panelcontentbox mobilepaneltablebox">
                            <div className="wllettable">
                                <h2 className="heading-box pt-0 mb-3 ps-0">Transfer History</h2>
                                <SimpleBar className="table-responsive sitescroll">
                                    <Table className="sitetable table-responsive-stack" id="table1">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date & Time</th>
                                                <th>Coin</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>05:05:00, 18/02/2024</td>
                                                <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                    BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                <td>Funding</td>
                                                <td>P2P</td>
                                                <td>0.254789</td>
                                                <td><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>05:05:00, 18/02/2024</td>
                                                <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                    BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                <td>Funding</td>
                                                <td>P2P</td>
                                                <td>0.254789</td>
                                                <td><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>05:05:00, 18/02/2024</td>
                                                <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                    BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                <td>Funding</td>
                                                <td>P2P</td>
                                                <td>0.254789</td>
                                                <td><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                                <ResponsiveTable tableId="table1" />
                            </div>
                        </div>

                    </div>
                </Container>
            </article >
            <Userfooter />
        </div>
    );
}

export default Page;