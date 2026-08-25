"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { Container, Image, Nav, Tab, Table, Form, Modal, Row, Col, Button, InputGroup, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import './../../../public/assets/css/p2pcustom.css';


const Page = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid buysellpage">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Buy/Sell</h2>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer p2poverview">
                    <div className="panelcontentbox buyboxpage">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="buy">
                            <div className="buyflextab heading-box pt-0 pe-0 ps-0 border-0">
                                <div className="buytab">
                                    <Nav variant="pills" className="tabbanner">
                                        <Nav.Item><Nav.Link eventKey="buy">Buy</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="sell">Sell</Nav.Link></Nav.Item>
                                    </Nav>
                                </div>
                                <div className="cryptotabbox tabrightbox boxtabb">
                                    <div className="buyiconslectbox">
                                        <Form className="siteformbg">
                                            <Form.Select className="form-control" id="id_select2_example">
                                                <option>All</option>
                                                <option>ETH</option>
                                                <option>BNB</option>
                                                <option>XRP</option>
                                                <option>TRX</option>
                                                <option>USD</option>
                                            </Form.Select>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="buy">
                                    <div className="searchfrm">
                                        <div className="searchboxbg">
                                            <Form className="siteformbg">
                                                <Form.Group className="form-group">
                                                    <Form.Label>Amount</Form.Label>
                                                    <Form.Control type="text" placeholder="Amount" id="buy_amount" />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Fiat</Form.Label>
                                                    <Form.Select className="form-control" id="buyfiat_select">
                                                        <option>INR</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Select className="form-control" id="buycountry_select">
                                                        <option>India</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Payment Type</Form.Label>
                                                    <Form.Select className="form-control" id="buypayment_type">
                                                        <option>Payment Type</option>
                                                        <option>Cash Deposit</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <input type="submit" id="buysearch_btn" className="btn sitebtn btn-sm" value="Search" />
                                                </Form.Group>
                                            </Form>
                                        </div>
                                    </div>
                                    <div className="tabpanel">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable table-responsive-stack" id="table1">
                                                <thead>
                                                    <tr>
                                                        <th>Advertisers</th>
                                                        <th>Price</th>
                                                        <th>Available/Limit</th>
                                                        <th>Country</th>
                                                        <th>Payment Method</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="buy_btn" className="btn viewbtn green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table1" />
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sell">
                                    <div className="searchfrm">
                                        <div className="searchboxbg">
                                            <Form className="siteformbg">
                                                <Form.Group className="form-group">
                                                    <Form.Label>Amount</Form.Label>
                                                    <Form.Control type="text" placeholder="Amount" id="sell_amount" />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Fiat</Form.Label>
                                                    <Form.Select className="form-control" id="sellfiat_select">
                                                        <option>INR</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Select className="form-control" id="sellcountry_select">
                                                        <option>India</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Payment Type</Form.Label>
                                                    <Form.Select className="form-control" id="sellpayment_type">
                                                        <option>Payment Type</option>
                                                        <option>Cash Deposit</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <input type="submit" id="sellsearch_btn" className="btn sitebtn btn-sm" value="Search" />
                                                </Form.Group>
                                            </Form>
                                        </div>
                                    </div>
                                    <div className="tabpanel">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable table-responsive-stack" id="table2">
                                                <thead>
                                                    <tr>
                                                        <th>Seller</th>
                                                        <th>Price</th>
                                                        <th>Limit/Available</th>
                                                        <th>Country</th>
                                                        <th>Payment Method</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="sell_btn" className="btn viewbtn red-btn" onClick={handleShowModal2}>Sell BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="sell_btn" className="btn viewbtn red-btn" onClick={handleShowModal2}>Sell BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="sell_btn" className="btn viewbtn red-btn" onClick={handleShowModal2}>Sell BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="sell_btn" className="btn viewbtn red-btn" onClick={handleShowModal2}>Sell BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="sell_btn" className="btn viewbtn red-btn" onClick={handleShowModal2}>Sell BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="sell_btn" className="btn viewbtn red-btn" onClick={handleShowModal2}>Sell BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="sell_btn" className="btn viewbtn red-btn" onClick={handleShowModal2}>Sell BTC</Button></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span className="profiletxtlink d-flex">
                                                                <div><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="usericont" /></div>
                                                                <div>John  <br />
                                                                    <div className="t-gray">88 orders 74.47% completion</div></div>
                                                            </span>
                                                        </td>
                                                        <td><span className="tsize">0.002563</span> INR</td>
                                                        <td>
                                                            <div className="t-gray textsize">Available</div>1.00001360 BTC
                                                            <br />
                                                            <div className="t-gray textsize">Limit</div>10,000-10,000
                                                        </td>
                                                        <td>India</td>
                                                        <td><Badge bg="info">Cash Deposit</Badge></td>
                                                        <td><Button id="sell_btn" className="btn viewbtn red-btn" onClick={handleShowModal2}>Sell BTC</Button></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table2" />
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </Container>
            </article>

            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modalbgt buymodal authtblemdlbox">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Buy BTC
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <hr className="mt-0"/>
                            <div className="buytradecell">
                                <div className="tradepricebanner">
                                    <div className="tradepricebox panelcontentbox">
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Price</h1>
                                                <h3 className="h3 t-blue">0.0025 INR <span className="t-red">3s</span></h3>
                                            </div>
                                        </div>
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Payment Time Limits</h1>
                                                <h3 className="h3 t-blue">15 Minutes</h3>
                                            </div>
                                        </div>
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Seller's Payment method</h1>
                                                <h3 className="h3 t-blue">Cash Deposit</h3>
                                            </div>
                                        </div>
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Available Balance</h1>
                                                <h3 className="h3 t-blue"><a href="#"><Badge bg="info">0.5
                                                    BTC</Badge></a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Form className="siteformbg">
                                <Row className="align-items-center">
                                    <Col lg={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>I want to pay</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" id="pay_field" placeholder="" />
                                                <InputGroup.Text>INR</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>

                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>I will receive</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" id="receive_field" placeholder="" />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="text-center d-flex">
                                    <Button className="btn borderbtn me-1 w-100" id="cancel_btn">Cancel</Button>
                                    <Link href="/buytrade" className="btn sitebtn ms-1 w-100" id="buy_cryptobtn">Buy BTC</Link>
                                </div>
                            </Form>
                            <div className="notestitle notesgray termsnotes mt-3">
                                <h5><b>Terms and Conditions:</b></h5>
                                <p><span className="t-gray">Pay with your personal account</span></p>
                            </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleCloseModal2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modalbgt buymodal authtblemdlbox">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sell BTC
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <hr className="mt-0"/>
                            <div className="buytradecell">
                                <div className="tradepricebanner">
                                    <div className="tradepricebox panelcontentbox">
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Price</h1>
                                                <h3 className="h3 t-blue">0.0025 INR <span className="t-red">3s</span></h3>
                                            </div>
                                        </div>

                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Payment Time Limits</h1>
                                                <h3 className="h3 t-blue">15 Minutes</h3>
                                            </div>
                                        </div>
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Seller's Payment method</h1>
                                                <h3 className="h3 t-blue">Cash Deposit</h3>
                                            </div>
                                        </div>
                                        <div className="tradepicesubbg">
                                            <div>
                                                <h1 className="h1">Available Balance</h1>
                                                <h3 className="h3 t-blue"><a href="#"><Badge bg="info">0.5
                                                    BTC</Badge></a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Form className="siteformbg">
                                <Row className="align-items-center">
                                    <Col lg={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>I want to sell</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" id="sell_field" placeholder="" />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>

                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>I will receive</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" id="sellreceive_field" placeholder="" />
                                                <InputGroup.Text>INR</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="text-center d-flex">
                                    <Button className="btn borderbtn w-100 me-1" id="sellcancel_btn">Cancel</Button>
                                    <Link href="/selltrade" className="btn sitebtn w-100" id="sell_cryptobtn">Sell BTC</Link>
                                </div>
                            </Form>
                            <div className="notestitle notesgray termsnotes mt-3">
                                <h5><b>Terms and Conditions:</b></h5>
                                <p><span className="t-gray">Pay with your personal account</span></p>
                            </div>
                        
                </Modal.Body>
            </Modal>
            <Userfooter />
        </div>
    )
}

export default Page;