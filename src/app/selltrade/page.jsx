"use client"
import React, { useState } from 'react'
import { Container, Image, Form, Modal, Alert, Button } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './../../../public/assets/css/p2pcustom.css';

const Page = () => {
    const [showModal1, setShowModal1] = useState(false);

    const [showFirstModal, setShowFirstModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleCloseFirstModal = () => setShowFirstModal(false);
    const handleShowFirstModal = () => setShowFirstModal(true);

    const handleCloseSecondModal = () => {
        setShowFirstModal(false); // Close the first modal
        setShowSecondModal(true); // Open the second modal
    };
    const handleShowSecondModal = () => setShowSecondModal(true);

    const [selectedFiles, setSelectedFiles] = useState({ file1: null });

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, fileKey) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFileChange(file, fileKey);
    };

    const handleappeal_uploadbtnChange = (e, fileKey) => {
        const file = e.target.files && e.target.files[0];
        handleFileChange(file, fileKey);
    };

    const handleFileChange = (file, fileKey) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFiles({
                    ...selectedFiles,
                    [fileKey]: {
                        file: file,
                        preview: reader.result,
                    },
                });
            };
            reader.readAsDataURL(file);
        }
    };


    const [selectedFiles2, setSelectedFiles2] = useState({ file1: null });

    const handleDragOver2 = (e) => {
        e.preventDefault();
    };

    const handleDrop2 = (e, fileKey) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFileChange2(file, fileKey);
    };

    const handlefileupload2Change = (e, fileKey) => {
        const file = e.target.files && e.target.files[0];
        handleFileChange2(file, fileKey);
    };

    const handleFileChange2 = (file, fileKey) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFiles2({
                    ...selectedFiles,
                    [fileKey]: {
                        file: file,
                        preview: reader.result,
                    },
                });
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Sell Trade</h2>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer buytrademsgbox">
                    <div className="flexbox trademsgflex">
                        <div>
                            <div className="panelcontentbox green-wrapper-bg">
                                <h2 className="heading-box pt-0 ps-0 pe-0"><Image src="assets/images/color/btc.svg" className="coinlisticon" width={20} height={20} alt="icon" />Sell BTC</h2>
                                <div className="contentbox pe-0 ps-0">
                                    <p className="mb-0"><span className="t-gray">Created Time :</span> 2024-01-11, 08:05:11, <span className="t-gray">Order Number :</span> 537468956986488</p>
                                </div>
                                <div className="tradepricebanner">
                                    <div className="tradepricebox">
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Amount</h1>
                                                <h3 className="h3 t-green">0.0025 INR</h3></div>
                                        </div>
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Price</h1>
                                                <h3 className="h3 t-blue">10.35636 INR</h3></div>
                                        </div>
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Quantity</h1>
                                                <h3 className="h3 t-blue">25.3995 BTC</h3></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panelcontentbox mt-3 paymentwhitebox p-0">
                                <div className="contentbox">
                                    <div className="paymentbox">
                                        <h5><b>Payment method</b></h5>
                                        <Alert variant="info">
                                            Please transfer to the following account by using own payment method.
                                        </Alert>

                                        <div className="paymentflex">
                                            <div className="notesgray notestitle">
                                                <div>
                                                    <h4>Method 1 :</h4>
                                                    <p>XXXXXXXXXXX</p>
                                                    <p>76457975634686</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notesttop mt-3">
                                        <h6>Payment to be made by buyer <span className="t-green">00:13:10</span></h6>
                                        <p>Buyer hase not paid, please wait patiently</p>
                                        <Button className="btn sitebtn cancelbtn me-2" id="confirm_btn" onClick={handleShowModal1}>Confirm Relase</Button>
                                        <Button className="btn sitebtn" id="appeal_btn" onClick={handleShowFirstModal}>Appeal</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panelcontentbox">
                            <h2 className="heading-box pt-0 pe-0 ps-0">Message</h2>
                            <div className="chatbox ticketchat">
                                <SimpleBar className="chatboxscroll">
                                    <ul className="chat">
                                        <li className="left clearfix">
                                            <div className="chat-body clearfix">
                                                <div className="header">
                                                    <h4 className="primary-font">John</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    <h5><span className="me-2"><FontAwesomeIcon icon={faCalendarDays} /></span>
                                                        Dec 02, 2024</h5></div>
                                            </div>
                                        </li>
                                        <li className="right clearfix">
                                            <div className="chat-body clearfix">
                                                <div className="header">
                                                    <h4 className="primary-font">John</h4>
                                                    <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
                                                    <h5><span className="me-2"><FontAwesomeIcon icon={faCalendarDays} /></span>Dec 02, 2024</h5></div>
                                            </div>
                                        </li>
                                        <li className="left clearfix">
                                            <div className="chat-body clearfix">
                                                <div className="header">
                                                    <h4 className="primary-font">John</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    <h5><span className="me-2"><FontAwesomeIcon icon={faCalendarDays} /></span>Dec 02, 2024</h5></div>
                                            </div>
                                        </li>
                                        <li className="right clearfix">
                                            <div className="chat-body clearfix">
                                                <div className="header">
                                                    <h4 className="primary-font">John</h4>
                                                    <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
                                                    <h5><span className="me-2"><FontAwesomeIcon icon={faCalendarDays} /></span>Dec 02, 2024</h5></div>
                                            </div>
                                        </li>
                                    </ul>
                                </SimpleBar>
                                <div className="chat-foot pb-0 ps-0 pe-0">
                                    <Form className="siteformbg">
                                        <Form.Group className='form-group'>
                                            <p className="t-red">Contact Details : BTC 0.00256987 at 0.025639745 BTC</p>
                                            <Form.Label>Upload Document </Form.Label>
                                            <div className='kycproffbox' onDrop={(e) => handleDrop(e, 'file1')} onDragOver={handleDragOver}>
                                                <label htmlFor="fileupload2" style={{ cursor: 'pointer' }}>
                                                    <p>Click or drag and drop a file here</p>
                                                    <input
                                                        type="file"
                                                        id="fileupload2"
                                                        onChange={(e) => handlefileupload2Change(e, 'file1')}
                                                        style={{ display: 'none' }}
                                                    />
                                                </label>
                                                {selectedFiles.file1 && (
                                                    <div>
                                                        <p>{selectedFiles.file1.file.name}</p>
                                                        <img
                                                            src={selectedFiles.file1.preview}
                                                            alt="File 1 Preview"
                                                            style={{ maxWidth: '100%', maxHeight: '140px' }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <p className="t-red m-0 text-center"><small>(Maximum file upload size: 10M)</small></p>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Enter your message</Form.Label>
                                            <Form.Control as="textarea" id="enter_msg" rows={3} />
                                        </Form.Group>
                                        <Form.Group className="form-group text-center">
                                            <input id="sendbtn" type="submit" className="btn sitebtn" value="Send" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>

            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form className='siteformbg'>
                            <div className="text-center">
                                <p className="infoicon"><FontAwesomeIcon icon={faInfo} /></p>
                                <p>Be sure to confirm receipt of the payment.</p>

                                <Form.Group className="form-group formcheckb">
                                    <Form.Check type="checkbox" id="confirmed_payment" label="I have confirmed that the payment was correct" />
                                </Form.Group>
                            </div>
                            <div className="text-center d-flex">
                                <a href="#" className="btn borderbtn me-1 w-100" id="cancel_btn">Cancel</a>
                                <a className="btn sitebtn ms-1 w-100" id="popupconfirm_btn">Confirm Relase</a>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showFirstModal} onHide={handleCloseFirstModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form className='siteformbg'>
                            <p>Befor appealing</p>
                            <p>You can upload Proof of payment and account info in the chatbox to help both sides to verify the payment.</p>
                            <p>Please try to contact the counterparty if you have any problems</p>
                            <p>If you you cannot reach the buyer/Seller, or reach an agreement with the other user, please file an appeal.</p>
                            <div className="form-group mt-3 mb-0 text-center d-flex">
                                <a href="#" className="btn borderbtn me-2 w-100" id="appeal_cancelbtn">Cancel</a>
                                <Button className="btn sitebtn w-100" id="appeal_processbtn" onClick={handleCloseSecondModal}>Appeal</Button>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showSecondModal} onHide={() => setShowSecondModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form className='siteformbg'>
                            <p>1. Reason for appealing and proofs are visible to both parties and CS. Please avoid including any private or sensitive info.</p>
                            <p>2. Baseless appeal request can result in banning of the account.</p>
                            <Form.Group className="form-group">
                                <Form.Label>Reason for Appeal</Form.Label>
                                <Form.Select className="form-control" id="reason_appealselect">
                                    <option>Please Select</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" id="description" rows={3} />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" id="phone" placeholder="" />
                            </Form.Group>

                            <Form.Group className='form-group'>
                                <Form.Label>Upload Document </Form.Label>
                                <div className='kycproffbox' onDrop={(e) => handleDrop(e, 'file1')} onDragOver={handleDragOver}>
                                    <label htmlFor="appeal_uploadbtn" style={{ cursor: 'pointer' }}>
                                        <p>Click or drag and drop a file here</p>
                                        <input
                                            type="file"
                                            id="appeal_uploadbtn"
                                            onChange={(e) => handleappeal_uploadbtnChange(e, 'file1')}
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                    {selectedFiles.file1 && (
                                        <div>
                                            <p>{selectedFiles.file1.file.name}</p>
                                            <img
                                                src={selectedFiles.file1.preview}
                                                alt="File 1 Preview"
                                                style={{ maxWidth: '100%', maxHeight: '140px' }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <p className="t-red m-0 text-center"><small>(Maximum file upload size: 10M)</small></p>
                            </Form.Group>
                            <div className="form-group mt-3 text-center d-flex">
                                <Button className="btn borderbtn me-2 w-100" id="appeal_cancelpagebtn" onClick={handleCloseSecondModal}>Cancel</Button>
                                <input type="submit" className="btn sitebtn w-100" id="appeal_endbtn" value="Appeal" />
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