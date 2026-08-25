"use client"
import React, { useState } from "react";
import Leftsidemenu from "../components/Leftsidemenu";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import { Container, Row, Col, Table, Button, Modal, Form, Image } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Agentlist = () => {

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2 text-start">Agents List</h2>
                    <div className="tabrightbox">
                        <Link href="/dashboard" className="btn btn-sm borderbtn"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
                    </div>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer bankpage">

                    <Row className="cardlistbox">
                        <Col lg={3}>
                            <div className="panelcontentbox">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td>Date & Time</td>
                                                <td className="text-end">05:05:00, 18/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td className="text-end"><span className="t-blue">John Doe</span></td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td className="text-end">USD</td>
                                            </tr>                                           
                                            <tr>
                                                <td>Bank Name</td>
                                                <td className="text-end">Forex Bak</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="panelcontentbox">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td>Date & Time</td>
                                                <td className="text-end">05:05:00, 18/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td className="text-end"><span className="t-blue">John Doe</span></td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td className="text-end">USD</td>
                                            </tr>                                           
                                            <tr>
                                                <td>Bank Name</td>
                                                <td className="text-end">Forex Bak</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="panelcontentbox">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td>Date & Time</td>
                                                <td className="text-end">05:05:00, 18/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td className="text-end"><span className="t-blue">John Doe</span></td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td className="text-end">USD</td>
                                            </tr>                                           
                                            <tr>
                                                <td>Bank Name</td>
                                                <td className="text-end">Forex Bak</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="panelcontentbox">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table1">
                                    <tbody>
                                            <tr>
                                                <td>Date & Time</td>
                                                <td className="text-end">05:05:00, 18/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td className="text-end"><span className="t-blue">John Doe</span></td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td className="text-end">USD</td>
                                            </tr>
                                            <tr>
                                                <td>Bank Name</td>
                                                <td className="text-end">Forex Bak</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="panelcontentbox">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table1">
                                    <tbody>
                                            <tr>
                                                <td>Date & Time</td>
                                                <td className="text-end">05:05:00, 18/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td className="text-end"><span className="t-blue">John Doe</span></td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td className="text-end">USD</td>
                                            </tr>
                                            <tr>
                                                <td>Bank Name</td>
                                                <td className="text-end">Forex Bak</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="panelcontentbox">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td>Date & Time</td>
                                                <td className="text-end">05:05:00, 18/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td className="text-end"><span className="t-blue">John Doe</span></td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td className="text-end">USD</td>
                                            </tr>
                                            <tr>
                                                <td>Bank Name</td>
                                                <td className="text-end">Forex Bak</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="panelcontentbox">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td>Date & Time</td>
                                                <td className="text-end">05:05:00, 18/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td className="text-end"><span className="t-blue">John Doe</span></td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td className="text-end">USD</td>
                                            </tr>
                                            <tr>
                                                <td>Bank Name</td>
                                                <td className="text-end">Forex Bak</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="panelcontentbox">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td>Date & Time</td>
                                                <td className="text-end">05:05:00, 18/02/2024</td>
                                            </tr>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td className="text-end"><span className="t-blue">John Doe</span></td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td className="text-end">USD</td>
                                            </tr>
                                            <tr>
                                                <td>Bank Name</td>
                                                <td className="text-end">Forex Bak</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </article>
            <Userfooter />
        </div>
    );
};

export default Agentlist;