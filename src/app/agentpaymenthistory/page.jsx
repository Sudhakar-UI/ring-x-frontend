"use client"
import React, { useState } from 'react'
import { Container, Image, Modal, Form, Nav, Tab, Table, Button, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './../../../public/assets/css/p2pcustom.css';

const Page = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid agentpaymenthistory-page">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Agent Payment History</h2>
            </div>
            <article className="gridparentbox ">
                <Container className="sitecontainer feadbackpage panelcontentbox ">


                    <Tab.Container id="left-tabs-example" defaultActiveKey="receive">
                        <div className=" cardviewbg boxtabb">
                            <Nav variant="pills" className='tabbanner justify-content-start mb-3'>
                                <Nav.Item>
                                    <Nav.Link eventKey="receive">Cash in</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="trust">Cash out</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="block">Request Payments</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content className=''>
                            <Tab.Pane eventKey="receive">
                                <div className="cardbox">
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table1'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table2'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table3'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table4'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table5'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table6'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="trust">
                                <div className="cardbox">
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table7'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table8'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table9'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table10'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table11'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table12'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="block">
                                <div className="cardbox">
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table13'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table14'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table15'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table16'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table17'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table18'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start"><img src="assets/images/profile.svg" className="coinicon" width={50} height={50} alt="icon" />John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 18/05/2026</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </article>

            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modalbgt chatmodal authtblemdlbox">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form className='siteformbg'>
                            <div className="feedbackscrt">
                                <div>
                                    <Form.Label>Feedback Score (Out of 5)</Form.Label>
                                </div>
                                <div>
                                    <Form.Select className="form-control" name="feedback_score" id="feedback_score">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <Form.Group className="form-group">
                                <Form.Check type="radio" id="trustworth_radiobtn" label="Trustworthy" />
                                <label className="labelleft">Give your trading partner trustworthy feedback to increase his reputation and mark him as a trusted user.</label>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Check type="radio" id="distrust_radiobtn" label="Distrust and block" />
                                <label className="labelleft">Give your trading partner negative feedback that decreases his reputation and block his account, this prevents him from trading with you again.</label>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label>Write your Feedback</Form.Label>
                                <Form.Control as="textarea" id="enter_feedback" rows={5} />
                            </Form.Group>
                            <div className="form-group text-center mt-3">
                                <Button type="submit" id="send_btn" name="submit" className="btn sitebtn text-uppercase fnt-bld">Send</Button>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
            <Userfooter />
        </div >
    )
}

export default Page;