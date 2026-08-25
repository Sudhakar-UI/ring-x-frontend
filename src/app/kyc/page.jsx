"use client"
import React, { useState } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Button, Form, InputGroup, Row, Col } from 'react-bootstrap'
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";
import Leftsidemenu from '../components/Leftsidemenu';
import Link from "next/link"


const page = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [imageName, setImageName] = useState('');
    const [imageSrc, setImageSrc] = useState('assets/images/passport-front.svg');

    const readURL = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleFileChange = (event) => {
        setImageName(event.target.files[0].name);
        readURL(event.target);
    };

    const [imageName1, setImageName1] = useState('');
    const [imageSrc1, setImageSrc1] = useState('assets/images/passport-back.svg');

    const readURL1 = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImageSrc1(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleFileChange1 = (event) => {
        setImageName1(event.target.files[0].name);
        readURL1(event.target);
    };

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2">KYC Verification</h2>
                </Container>
            </div>
            <article className="gridparentbox">

                <Container className="sitecontainer kycpage">

                    <div className="panelcontentbox">
                        <Form className="siteformbg">
                            <h5 className="subhead pb-0 mb-0 t-yellow">Personal Informations</h5>
                            <hr />
                            <Row>
                                <Col lg={3} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" id="fname" />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" id="lname" />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <div className="dateinput">
                                            <Flatpickr id="dob" placeholder="Date To" value={startDate} onChange={(startDate) => setStartDate(startDate)} options={{ dateFormat: "Y-m-d", enableTime: false, disableMobile: true, }} />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" id="state_city" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="form-group">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control as="textarea" className="txtarea" type="text" id="address" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br />
                            <h5 className="subhead pb-0 mb-0 t-yellow">ID Proof Details</h5>
                            <hr />
                            <Row>
                                <Col lg={3} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>ID Document Type</Form.Label>
                                        <Form.Select className="form-control" id="idtype">
                                            <option>India</option>
                                            <option>India</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>ID Document Number</Form.Label>
                                        <Form.Control type="text" id="id_docnum" />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Proof Of Address</Form.Label>
                                        <Form.Control type="text" id="proofaddr" />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Expiry Date</Form.Label>
                                        <div className="dateinput">
                                            <Flatpickr id="id_expydate" placeholder="Date To" value={startDate} onChange={(startDate) => setStartDate(startDate)} options={{ dateFormat: "Y-m-d", enableTime: false, disableMobile: true, }} />
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br />
                            <h5 className="subhead pb-0 mb-0 t-yellow">ID Proof Informations</h5>
                            <hr />

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="form-group kycupload">
                                        <label>ID Front Document <span className="t-red">*</span></label>
                                        <div className="kycproffbox">
                                            <div>
                                                <Image id="doc1" src={imageSrc} width={20} height={20} alt="front" />
                                            </div>
                                            <div className="uploadprofileiconbox text-end">
                                                <label className="custom-file-upload customupload" id="file-upload1">Upload here..</label>
                                                <input id="id_frtdoc" onChange={handleFileChange} name="profile" type="file" />
                                            </div>
                                        </div>
                                        <small>(Upload your image like jpg,jpeg,png (MAX: 12MB))</small>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="form-group kycupload">
                                        <label>ID Back Document <span className="t-red">*</span></label>
                                        <div className="kycproffbox">
                                            <div>
                                                <Image id="doc2" src={imageSrc1} width={20} height={20} alt="front" />
                                            </div>
                                            <div className="uploadprofileiconbox text-end">
                                                <label className="custom-file-upload customupload" is="file-upload2">Upload here..</label>
                                                <input id="id_backdoc" onChange={handleFileChange1} name="profile" type="file" />
                                            </div>
                                        </div>
                                        <small>(Upload your image like jpg,jpeg,png (MAX: 12MB))</small>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="form-group text-center">
                                <Button className="btn sitebtn" id="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Container>
            </article>
            <Userfooter />


        </div>
    )
}

export default page