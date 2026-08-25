"use client"
import React, { useState } from "react"
import { Container, Form, Image, Button, Tab, Nav, Modal, Badge, InputGroup } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";
import Leftsidemenu from '../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPlus, faPaperclip } from '@fortawesome/free-solid-svg-icons';


const page = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2">Chat</h2>
                    <div className="tabrightbox"> <Link href="/support" className="btn-sm sitebtn">Back</Link> </div>
                </Container>
            </div>
            {/* <article className="gridparentbox">
                <Container className="sitecontainer supportbg">
                  
                    <div className="panelcontentbox chatticketlist">
                        <h1 className="heading-box">Ticket ID : EX6276648</h1>
                       
                        <div className="chatbox ticketchat">
                        <div className="ps-3 pe-3">
                            <Form className="siteformbg">
                                    <div className="supportsearch pb-3">
                                        <Form.Group className="form-group">
                                            <Form.Control placeholder="Search here..." id="chatsearch" />
                                        </Form.Group>
                                    </div>
                            </Form>
                        </div>
                            <SimpleBar className="chat chatboxscroll">
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg"/>
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024)</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="timetxtshow t-gray">05:05 AM</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon"id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <span className="timetxtshow t-gray">05:00 AM</span>
                                        </div>
                                    </div>
                                </li>
                            </SimpleBar>
                            <div className="chat-foot">
                                <Form className="siteformbg">
                                    <div className="form-group">
                                        <Form.Label>Enter your message</Form.Label>
                                        <textarea className="form-control" rows={4} id="support_textbox"></textarea>
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="submit" className="btn sitebtn" value="Submit" id="sendbtn" />
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Container >
            </article > */}
            <article className="gridparentbox supportbg">
                <Container className="sitecontainer">

                    <div className=' panelcontentbox'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <div className='flexbox'>
                                <div className="supportlist mt-0 panelcontentbox">
                                    <h4 className="subhead">Ticket</h4>

                                    <div className="supportsearch">
                                        <Form className="siteformbg">
                                            <Form.Group className="mb-0">
                                                <Form.Control type="text" placeholder="Search tickets..." id="supportsearch" />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                     <SimpleBar className="supportlistscroll">
                                        <Nav variant="pills" className="flex-column tabbanner">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className=""> I am facing an issue with my withdrawal request. The transaction is still pending and has not been processed yet. Kindly check and update the status.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">May 11, 2026</p>
                                                        <Badge bg="info">Info</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276649</span></p>
                                                        <p className=""> I tried to complete my KYC verification, but the document upload failed. Please help me resolve this issue so I can continue using the platform services.</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">May 12, 2026</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="three">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276650</span></p>
                                                        <p className=""> I am unable to log in to my account even after entering the correct credentials. Please assist me in resolving this login issue.</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">May 11, 2026</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="four">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className=""> I am unable to log in to my account even after entering the correct credentials. Please assist me in resolving this login issue.</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">May 11, 2026</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="five">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">May 11, 2026</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="six">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">May 11, 2026</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="seven">
                                                    <div>
                                                        <p className='thead'>Ticket Id : <span>EX6276648</span></p>
                                                        <p className="">Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                                                            amet
                                                            Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <p className="datetext">May 11, 2026</p>
                                                        <Badge bg="danger">Closed</Badge>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </SimpleBar>
                                </div>
                                  <div className="panelcontentbox chatticketlist">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <h1 className="heading-box">Ticket ID : EX6276648</h1>
                                            <div className="chatbox ticketchat">
                                                <SimpleBar className="chat chatboxscroll">
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">Support <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p> Hello! Thank you for contacting support. Could you please share your account ID or transaction ID so I can check the issue?
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="right clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">User <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>My transaction ID is TX458921.
                                                                </p>
                                                                {/* <a href="" target="_blank" className="chtimg"><Image width={100} height={100} alt="attachment" src="assets/images/logo.png" /></a> */}
                                                            </div>
                                                        </div>
                                                        <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">Support <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>  Your withdrawal request is currently under review. It will be processed shortly. Kindly wait for confirmation.

                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="right clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">User <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>  Okay, thank you for the update.

                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">Support <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p> You're welcome! If you need any further assistance, feel free to contact us anytime. 😊
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </SimpleBar>
                                                <div className="chat-foot">
                                                    <Form className="siteformbg">
                                                        <div className="tabrightbox atcimgbtn">
                                                            <Button className="btn sitebtn btn-sm" ><FontAwesomeIcon icon={faPaperclip} /> Attach Image</Button>
                                                        </div>
                                                        <Form.Group className="form-group m-0">
                                                            <Form.Label>Enter your message</Form.Label>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control name="code" id="support_textbox" type="text" />
                                                                <InputGroup.Text id="submit" className="sendbtn">
                                                                    <FontAwesomeIcon icon={faPaperPlane} />
                                                                </InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h1 className="heading-box">Ticket ID : EX6276648</h1>
                                            <div className="chatbox ticketchat">
                                                <SimpleBar className="chat chatboxscroll">
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="right clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                    </li>
                                                    <li className="right clearfix">
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                                <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="left clearfix">
                                                        <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                                            className="img-circle" width={50} height={50} alt="icon" />
                                                        </div>
                                                        <div className="chat-body clearfix">
                                                            <div className="header">
                                                                <h4 className="primary-font">John <span className="ps-2 t-gray">( May 10,
                                                                    2026)</span></h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </SimpleBar>
                                                <div className="chat-foot">
                                                    <Form className="siteformbg">
                                                        <Form.Group className="form-group mb-0">
                                                            <Form.Label>Enter your message</Form.Label>
                                                            <InputGroup className="mb-3">
                                                                <Form.Control name="code" id="textarea1" type="text" />
                                                                <InputGroup.Text id="submit" className="sendbtn">
                                                                    <FontAwesomeIcon icon={faPaperPlane} />
                                                                </InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </div>
                        </Tab.Container>
                    </div>
                    {/* <div className="panelcontentbox">
                        <div className="nodatabg">
                            <Image src={"assets/images/nodata.svg"} alt="nodata" width={100} height={100} className="nodataimg"/>
                            There's no tickets found.
                        </div>
                    </div> */}
                </Container >
            </article >
            <Userfooter />
            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Create Tickets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" id="title" />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Enter your message</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                name="Message" id="message" />
                        </Form.Group>
                        {/* <FileUpload /> */}
                        <div className="text-center">
                            <Button className='sitebtn' id="chatsubmit">Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleCloseModal2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Image Upload</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        {/* <AttachFileUpload /> */}
                        <div className="text-center">
                            <Button className='sitebtn' id="chatsubmit">Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default page