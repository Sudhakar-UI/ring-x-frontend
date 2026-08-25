"use client"
import React, { useState } from 'react'
import { Container, Image, Modal, Form, Nav, Tab, Table, Row, Col, Button, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';

const Reviewcommission = () => {
    const [showModal2, setShowModal2] = useState(false);
       const handleShowModal2 = () => setShowModal2(true);
       const handleCloseModal2 = () => setShowModal2(false);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Review Commission History</h2>
            </div>
            <article className="gridparentbox histagentpage">
                <Container className="sitecontainer">
                    <div className="panelcontentbox">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="cashin">
                        <div className="">
                            <Nav variant="pills" className='tabbanner'>
                                <Nav.Item><Nav.Link eventKey="cashin">Cash In History</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="cashout">Cash Out History</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="payment">Payment Request</Nav.Link></Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="cashin">
                                <Simplebar className="table-responsive sitescroll">
                                    <Table className="sitetable table-responsive-stack" id="table1">
                                    <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Deposit Amount</th>
                                        <th>Date & Time</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<tr className="nodata">
                                        <td colSpan={4}>
                                        <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                        No record found
                                        </td>
                                    </tr>*/}
                                    <tr>
                                        <td>AGT12345</td>
                                        <td>$100</td>
                                        <td>18/01/2023 10:05:05</td>
                                        <td><Badge bg="success">Approved</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>AGT12345</td>
                                        <td>$100</td>
                                        <td>18/01/2023 10:05:05</td>
                                        <td><Badge bg="success">Approved</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>AGT12345</td>
                                        <td>$100</td>
                                        <td>18/01/2023 10:05:05</td>
                                        <td><Badge bg="success">Approved</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>AGT12345</td>
                                        <td>$100</td>
                                        <td>18/01/2023 10:05:05</td>
                                        <td><Badge bg="success">Approved</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>AGT12345</td>
                                        <td>$100</td>
                                        <td>18/01/2023 10:05:05</td>
                                        <td><Badge bg="success">Approved</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>AGT12345</td>
                                        <td>$100</td>
                                        <td>18/01/2023 10:05:05</td>
                                        <td><Badge bg="success">Approved</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>AGT12345</td>
                                        <td>$100</td>
                                        <td>18/01/2023 10:05:05</td>
                                        <td><Badge bg="success">Approved</Badge></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Simplebar>
                            <ResponsiveTable tableId="table1" />
                        </Tab.Pane>
                        <Tab.Pane eventKey="cashout">
                        <Simplebar className="table-responsive sitescroll">
                         <Table className="sitetable table-responsive-stack" id="table2">
                                <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Withdrawal Amount</th>
                                    <th>Date & Time</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* <tr className="nodata">
                                    <td colSpan={8}>
                                    <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                    No record found
                                    </td>
                                </tr>  */}
                                <tr>
                                    <td>AGT12345</td>
                                    <td>$100</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td className="flxcahbtn">
                                        <div className="d-flex">
                                           <Button className="btn-sm sitebtn me-2" id="acceptbtn" onClick={handleShowModal2}>Accept Request</Button>
                                            <Button className="btn-sm borderbtn" id="declinebtn">Decline Request</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AGT12345</td>
                                    <td>$100</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td className="flxcahbtn">
                                        <div className="d-flex">
                                            <Button className="btn-sm sitebtn me-2" id="acceptbtn" onClick={handleShowModal2}>Accept Request</Button>
                                            <Button className="btn-sm borderbtn" id="declinebtn">Decline Request</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AGT12345</td>
                                    <td>$100</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td className="flxcahbtn">
                                        <div className="d-flex">
                                            <Button className="btn-sm sitebtn me-2" id="acceptbtn" onClick={handleShowModal2}>Accept Request</Button>
                                            <Button className="btn-sm borderbtn" id="declinebtn">Decline Request</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AGT12345</td>
                                    <td>$100</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td className="flxcahbtn">
                                        <div className="d-flex">
                                            <Button className="btn-sm sitebtn me-2" id="acceptbtn" onClick={handleShowModal2}>Accept Request</Button>
                                            <Button className="btn-sm borderbtn" id="declinebtn">Decline Request</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AGT12345</td>
                                    <td>$100</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td className="flxcahbtn">
                                        <div className="d-flex">
                                            <Button className="btn-sm sitebtn me-2" id="acceptbtn" onClick={handleShowModal2}>Accept Request</Button>
                                            <Button className="btn-sm borderbtn" id="declinebtn">Decline Request</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AGT12345</td>
                                    <td>$100</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td className="flxcahbtn">
                                        <div className="d-flex">
                                            <Button className="btn-sm sitebtn me-2" id="acceptbtn" onClick={handleShowModal2}>Accept Request</Button>
                                            <Button className="btn-sm borderbtn" id="declinebtn">Decline Request</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AGT12345</td>
                                    <td>$100</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td className="flxcahbtn">
                                        <div className="d-flex">
                                                <Button className="btn-sm sitebtn me-2" id="acceptbtn" onClick={handleShowModal2}>Accept Request</Button>
                                                <Button className="btn-sm borderbtn" id="declinebtn">Decline Request</Button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                            </Simplebar>
                            <ResponsiveTable tableId="table2" />
                        </Tab.Pane>
                        <Tab.Pane eventKey="payment">
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable table-responsive-stack" id="table3">
                                <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Date & Time</th>
                                    <th>Agent Name</th>
                                    <th>Requested Payment</th>
                                    <th>Platform</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/*<tr className="nodata">
                                    <td colSpan={4}>
                                    <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                    No record found
                                    </td>
                                </tr>*/}
                                <tr>
                                    <td>1</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td>John</td>
                                    <td>$100</td>
                                    <td>Forex</td>
                                    <td><Badge bg="success">Approved</Badge></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td>John</td>
                                    <td>$100</td>
                                    <td>Forex</td>
                                    <td><Badge bg="success">Approved</Badge></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td>John</td>
                                    <td>$100</td>
                                    <td>Forex</td>
                                    <td><Badge bg="success">Approved</Badge></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td>John</td>
                                    <td>$100</td>
                                    <td>Forex</td>
                                    <td><Badge bg="success">Approved</Badge></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td>John</td>
                                    <td>$100</td>
                                    <td>Forex</td>
                                    <td><Badge bg="success">Approved</Badge></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>18/01/2023 10:05:05</td>
                                    <td>John</td>
                                    <td>$100</td>
                                    <td>Forex</td>
                                    <td><Badge bg="success">Approved</Badge></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                        <ResponsiveTable tableId="table3" />
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </div>
            </Container>
        </article>
            <Userfooter />

            <Modal className="modaltable modalbgt" show={showModal2} onHide={handleCloseModal2} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-3 pb-4">
                    <Form className='siteformbg'>     
                        <div className="text-center confirmicon">
                        <Image src="assets/images/confirm.svg" className="mb-3" width={20} height={20} alt="icon"/>                        
                        <h5 className="text-center">Please Confirm</h5>        
                        <p className="text-center t-black">Accept this cash out request for $100?</p>    
                        </div>           
                        <div className="text-center d-flex mt-3">
                            <Button className='borderbtn me-2 w-100' id="cashout_cancelbtn">Cancel</Button>
                            <Button className='sitebtn w-100' id="cashout_confirmbtn">Yes</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Reviewcommission;