"use client"
import React, { useState } from 'react'
import { Container, Image, Modal, Form, Table, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './../../../public/assets/css/p2pcustom.css';


const Page = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid disputetradepage">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                        <h2 className="h2">Dispute Trade</h2>
                    </div>
            <article className="gridparentbox disputepage">
                <Container className="sitecontainer">

                    <div className="tradetablebox panelcontentbox">
                        {/* <div className="panelcontentbox contentbox">
                            <div className="nodata">
                                <Image src="assets/images/nodata.svg" width={20} height={20} alt="nodata" />
                                    <p>No record found</p>
                            </div>
                        </div> */}
                        <div className="cardbox">
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table2">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table3">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="warning">pending</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table4">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><span className="badge badge-danger">Cancel</span></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table5">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table6">
                                        <tbody>
                                            <tr>
                                                <td><span className="profileiconpic"><Image src="assets/images/profile.svg" /></span><span
                                                    className="t-darkblue"><b>John Meyer</b></span></td>
                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="table sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">11-12-2022,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink"><span className="me-1"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt chatmodal'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='chatbox ticketchat'>
                    <SimpleBar className="chatboxscroll">
                        <ul className="chat">
                            <li className="left clearfix">
                                <div className="chat-img pull-left"><Image src="assets/images/admin.svg" width={20} height={20} alt="icon"  className="img-circle" /></div>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <h4 className="primary-font">John</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h5><span className="me-1"><FontAwesomeIcon icon={faCalendarDays} /></span>Mar 18, 2024</h5></div>
                                </div>
                            </li>
                            <li className="right clearfix">
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <h4 className="primary-font">John</h4>
                                        <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
                                        <h5><span className="me-1"><FontAwesomeIcon icon={faCalendarDays} /></span>Mar 18, 2024</h5></div>
                                </div>
                                <div className="chat-img pull-right"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="img-circle" /></div>
                            </li>
                            <li className="right clearfix">
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <h4 className="primary-font">John</h4>
                                        <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
                                        <h5><span className="me-1"><FontAwesomeIcon icon={faCalendarDays} /></span>Mar 18, 2024</h5></div>
                                </div>
                                <div className="chat-img pull-right"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="img-circle" /></div>
                            </li>
                            <li className="right clearfix">
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <h4 className="primary-font">John</h4>
                                        <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
                                        <h5><span className="me-1"><FontAwesomeIcon icon={faCalendarDays} /></span>Mar 18, 2024</h5></div>
                                </div>
                                <div className="chat-img pull-right"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="img-circle" /></div>
                            </li>
                        </ul>
                    </SimpleBar>
                    <div className="chat-foot">
                        <Form className='siteformbg'>
                            <Form.Group className="form-group">
                                <Form.Label>Enter your message</Form.Label>
                                <Form.Control as="textarea" rows={2} id="enter_msg" />
                            </Form.Group>
                            <div className="form-group text-center">
                                <input type="submit" className="btn sitebtn" id="submit_btn" value="Submit" />
                            </div>
                        </Form>
                    </div>
                </Modal.Body >
            </Modal >
            <Userfooter />
        </div >
    )
}

export default Page;