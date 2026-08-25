"use client"
import React, { useState } from "react";
import Leftsidemenu from "../components/Leftsidemenu";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const page = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const [showModal2, setShowModal2] = useState(false);
    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const [showModal3, setShowModal3] = useState(false);
    const handleShowModal3 = () => setShowModal3(true);
    const handleCloseModal3 = () => setShowModal3(false);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid bankpage">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent ">
                <Container className="sitecontainer  panelcontentbox p-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <h2 className="h2 text-start">Bank Details</h2>
                        <Button onClick={handleShowModal1} className="btn sitebtn btn-sm"><FontAwesomeIcon icon={faPlus} /><span className="backtxt ms-2">Add Bank</span></Button>

                    </div>

                    <article className="">
                        <Container className="sitecontainer bankpage">

                            <Row className="cardlistbox">
                                <Col lg={3}>
                                    <div className="panelcontentbox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable" id="table1">
                                                <tbody>
                                                    <tr>
                                                        <td>Date & Time</td>
                                                        <td className="text-end">05:05:00, 18/02/2024
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Currency</td>
                                                        <td className="text-end"><span className="t-blue">USD
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bank Name</td>
                                                        <td className="text-end">Test
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Type</td>
                                                        <td className="text-end"><span className="t-blue">Test Bank
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Name</td>
                                                        <td className="text-end">Testname
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account No</td>
                                                        <td className="text-end">1234567
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a onClick={handleShowModal2} className="btn btn-sm borderbtn">Update</a>

                                                        </td>
                                                        <td className="text-end">
                                                            <a onClick={handleShowModal3} className="btn btn-sm borderbtn" id="deletebtn">Delete</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="panelcontentbox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable" id="table2">
                                                <tbody>
                                                    <tr>
                                                        <td>Date & Time</td>
                                                        <td className="text-end">05:05:00, 18/02/2024
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Currency</td>
                                                        <td className="text-end"><span className="t-blue">USD
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bank Name</td>
                                                        <td className="text-end">Test
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Type</td>
                                                        <td className="text-end"><span className="t-blue">Test Bank
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Name</td>
                                                        <td className="text-end">Testname
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account No</td>
                                                        <td className="text-end">1234567
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a onClick={handleShowModal2} className="btn btn-sm borderbtn">Update</a>

                                                        </td>
                                                        <td className="text-end">
                                                            <a onClick={handleShowModal3} className="btn btn-sm borderbtn">Delete</a>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="panelcontentbox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable" id="table3">
                                                <tbody>
                                                    <tr>
                                                        <td>Date & Time</td>
                                                        <td className="text-end">05:05:00, 18/02/2024
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Currency</td>
                                                        <td className="text-end"><span className="t-blue">USD
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bank Name</td>
                                                        <td className="text-end">Test
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Type</td>
                                                        <td className="text-end"><span className="t-blue">Test Bank
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Name</td>
                                                        <td className="text-end">Testname
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account No</td>
                                                        <td className="text-end">1234567
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a onClick={handleShowModal2} className="btn btn-sm borderbtn">Update</a>

                                                        </td>
                                                        <td className="text-end">
                                                            <a onClick={handleShowModal3} className="btn btn-sm borderbtn">Delete</a>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="panelcontentbox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable" id="table4">
                                                <tbody>
                                                    <tr>
                                                        <td>Date & Time</td>
                                                        <td className="text-end">05:05:00, 18/02/2024
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Currency</td>
                                                        <td className="text-end"><span className="t-blue">USD
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bank Name</td>
                                                        <td className="text-end">Test
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Type</td>
                                                        <td className="text-end"><span className="t-blue">Test Bank
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Name</td>
                                                        <td className="text-end">Testname
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account No</td>
                                                        <td className="text-end">1234567
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a onClick={handleShowModal2} className="btn btn-sm borderbtn">Update</a>

                                                        </td>
                                                        <td className="text-end">
                                                            <a onClick={handleShowModal3} className="btn btn-sm borderbtn">Delete</a>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="panelcontentbox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable" id="table5">
                                                <tbody>
                                                    <tr>
                                                        <td>Date & Time</td>
                                                        <td className="text-end">05:05:00, 18/02/2024
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Currency</td>
                                                        <td className="text-end"><span className="t-blue">USD
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bank Name</td>
                                                        <td className="text-end">Test
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Type</td>
                                                        <td className="text-end"><span className="t-blue">Test Bank
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Name</td>
                                                        <td className="text-end">Testname
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account No</td>
                                                        <td className="text-end">1234567
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a onClick={handleShowModal2} className="btn btn-sm borderbtn">Update</a>

                                                        </td>
                                                        <td className="text-end">
                                                            <a onClick={handleShowModal3} className="btn btn-sm borderbtn">Delete</a>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="panelcontentbox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable" id="table6">
                                                <tbody>
                                                    <tr>
                                                        <td>Date & Time</td>
                                                        <td className="text-end">05:05:00, 18/02/2024
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Currency</td>
                                                        <td className="text-end"><span className="t-blue">USD
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bank Name</td>
                                                        <td className="text-end">Test
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Type</td>
                                                        <td className="text-end"><span className="t-blue">Test Bank
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Name</td>
                                                        <td className="text-end">Testname
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account No</td>
                                                        <td className="text-end">1234567
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a onClick={handleShowModal2} className="btn btn-sm borderbtn">Update</a>

                                                        </td>
                                                        <td className="text-end">
                                                            <a onClick={handleShowModal3} className="btn btn-sm borderbtn">Delete</a>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="panelcontentbox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable" id="table7">
                                                <tbody>
                                                    <tr>
                                                        <td>Date & Time</td>
                                                        <td className="text-end">05:05:00, 18/02/2024
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Currency</td>
                                                        <td className="text-end"><span className="t-blue">USD
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bank Name</td>
                                                        <td className="text-end">Test
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Type</td>
                                                        <td className="text-end"><span className="t-blue">Test Bank
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Name</td>
                                                        <td className="text-end">Testname
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account No</td>
                                                        <td className="text-end">1234567
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a onClick={handleShowModal2} className="btn btn-sm borderbtn">Update</a>

                                                        </td>
                                                        <td className="text-end">
                                                            <a onClick={handleShowModal3} className="btn btn-sm borderbtn">Delete</a>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="panelcontentbox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable" id="table8">
                                                <tbody>
                                                    <tr>
                                                        <td>Date & Time</td>
                                                        <td className="text-end">05:05:00, 18/02/2024
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Currency</td>
                                                        <td className="text-end"><span className="t-blue">USD
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bank Name</td>
                                                        <td className="text-end">Test
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Type</td>
                                                        <td className="text-end"><span className="t-blue">Test Bank
                                                        </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Name</td>
                                                        <td className="text-end">Testname
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account No</td>
                                                        <td className="text-end">1234567
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a onClick={handleShowModal2} className="btn btn-sm borderbtn">Update</a>

                                                        </td>
                                                        <td className="text-end">
                                                            <a onClick={handleShowModal3} className="btn btn-sm borderbtn">Delete</a>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </article>
                </Container>
            </div>
            <Userfooter />

            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Bank Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Currency <span className="text-danger">*</span></Form.Label>
                                    <Form.Select className="form-control" id="currency">
                                        <option>USD</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account Type <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="accounttype" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="accountname" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account No <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="account_no" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Code <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="bank_code" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Branch<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="bank_branch" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Branch Code<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="bank_branchcode" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="bank_name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Address<span className="text-danger">*</span></Form.Label>
                                    <Form.Control as="textarea" rows={3} name="Message" id="address_add" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="text-center">
                            <Button className="btn sitebtn" id="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={showModal2} onHide={handleCloseModal2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Bank Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Currency <span className="text-danger">*</span></Form.Label>
                                    <Form.Select className="form-control" id="updatecurrency">
                                        <option>USD</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account Type <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updateaccounttype" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updateaccountname" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Account No <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updateaccount_no" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Code <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updatebank_code" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Branch<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updatebank_branch" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Branch Code<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updatebank_branchcode" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" id="updatebank_name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Form.Group className="form-group">
                                    <Form.Label className="">Bank Address<span className="text-danger">*</span></Form.Label>
                                    <Form.Control as="textarea" rows={3} name="Message" id="update-address" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="text-center">
                            <Button className="btn sitebtn" id="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showModal3} onHide={handleCloseModal3}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h4>Delete Bank Detail</h4>
                        <p>Are you want to remove this bank account?</p>
                    </div>
                    <Form className="siteformbg">
                        <div className="text-center">
                            <Button className="btn sitebtn me-1" id="yes_btn">Confirm</Button>
                            <Button className="btn borderbtn" id="no_btn">Cancel</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default page;