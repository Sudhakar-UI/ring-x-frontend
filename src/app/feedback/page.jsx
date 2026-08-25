"use client"
import React, { useState } from 'react'
import { Container, Image, Modal, Form, Nav, Tab, Table, Button, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './../../../public/assets/css/p2pcustom.css';
import Link from 'next/link';
import ResponsiveTable from '../components/ResponsiveTable';

const Page = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid feedback-page">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Feedback</h2>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer walletoverviewbg">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="spot">
                        <div className="boxtabb">
                            <Nav variant="pills" className='tabbanner border-0'>
                                <Nav.Item>
                                    <Nav.Link eventKey="spot">Receive</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="trustuser">Trust Users</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="blocked">Blocked Users</Nav.Link>
                                </Nav.Item>


                            </Nav>
                        </div>
                        <Tab.Content className='mt-3'>
                            <Tab.Pane eventKey="spot">
                                <div className="">
                                    <div className="panelcontentbox mobilepaneltablebox">

                                        <div className="wllettable pt-2">

                                            <SimpleBar className="table-responsive sitescroll">
                                                <Table className="sitetable table-responsive-stack" id="table1">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>Balance</th>
                                                            <th>Free Balance</th>
                                                            <th>Locked Balance</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {/* <tr>
                                                            <td>1</td>
                                                            <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                                BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/deposit" id="deposit" className="btn btn-sm green-btn me-1">Deposit</Link>
                                                                <Link href="/withdraw" id="withdraw" className="btn btn-sm red-btn">Withdraw</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">ETH</span><span className="t-gray">Ethereum</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/deposit" id="deposit" className="btn btn-sm green-btn me-1">Deposit</Link>
                                                                <Link href="/withdraw" id="withdraw" className="btn btn-sm red-btn">Withdraw</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">XRP</span><span className="t-gray">Ripple</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/deposit" id="deposit" className="btn btn-sm green-btn me-1">Deposit</Link>
                                                                <Link href="/withdraw" id="withdraw" className="btn btn-sm red-btn">Withdraw</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">BNB</span><span className="t-gray">Binance Coin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/deposit" id="deposit" className="btn btn-sm green-btn me-1">Deposit</Link>
                                                                <Link href="/withdraw" id="withdraw" className="btn btn-sm red-btn">Withdraw</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">TRX</span><span className="t-gray">Tron</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/deposit" id="deposit" className="btn btn-sm green-btn me-1">Deposit</Link>
                                                                <Link href="/withdraw" id="withdraw" className="btn btn-sm red-btn">Withdraw</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td><Image src="assets/images/color/doge.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">DOGE</span><span className="t-gray">Dogecoin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/deposit" id="deposit" className="btn btn-sm green-btn me-1">Deposit</Link>
                                                                <Link href="/withdraw" id="withdraw" className="btn btn-sm red-btn">Withdraw</Link>
                                                            </td>
                                                        </tr> */}
                                                        <tr className="nodata">
                                                            <td colSpan={6}>
                                                                <Image src="../assets/images/nodata.svg" />
                                                                <p>No record found</p>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                            <ResponsiveTable tableId="table1" />
                                        </div>
                                    </div>

                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="trustuser">
                                <div className="">
                                    <div className="panelcontentbox mobilepaneltablebox">
                                        <div className="wllettable pt-2">

                                            <SimpleBar className="table-responsive sitescroll">
                                                <Table className="sitetable table-responsive-stack" id="table2">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>Balance</th>
                                                            <th>Free Balance</th>
                                                            <th>Locked Balance</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                                BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">ETH</span><span className="t-gray">Ethereum</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">XRP</span><span className="t-gray">Ripple</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">BNB</span><span className="t-gray">Binance Coin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">TRX</span><span className="t-gray">Tron</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td><Image src="assets/images/color/doge.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">DOGE</span><span className="t-gray">Dogecoin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                            <ResponsiveTable tableId="table2" />
                                        </div>
                                    </div>

                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="blocked">
                                <div className="">
                                    <div className="panelcontentbox mobilepaneltablebox">
                                        <div className="wllettable pt-2">

                                            <SimpleBar className="table-responsive sitescroll">
                                                <Table className="sitetable table-responsive-stack" id="table2">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Name</th>
                                                            <th>Balance</th>
                                                            <th>Free Balance</th>
                                                            <th>Locked Balance</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                                BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">ETH</span><span className="t-gray">Ethereum</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">XRP</span><span className="t-gray">Ripple</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">BNB</span><span className="t-gray">Binance Coin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">TRX</span><span className="t-gray">Tron</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>6</td>
                                                            <td><Image src="assets/images/color/doge.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">DOGE</span><span className="t-gray">Dogecoin</span></td>
                                                            <td>0.293985</td>
                                                            <td>0.32569</td>
                                                            <td>0.00254789</td>
                                                            <td>
                                                                <Link href="/transfer" id="transfer" className="btn sitebtn btn-sm">Transfer</Link>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                            <ResponsiveTable tableId="table2" />
                                        </div>
                                    </div>

                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                </Container>
            </article >

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