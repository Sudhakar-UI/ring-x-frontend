"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Image, Table, Row, Form, Col, Tooltip, OverlayTrigger, Tab, Nav } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';
import Highcharts from 'highcharts';
import Spotchart from './Spotchart';
import P2pchart from './P2pchart';


const Page = () => {

    return (
        <div className="pagecontent gridpagecontent innerpagegrid rwawalletpage">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent innerpagetopimage">
                <Container className="sitecontainer rxt-wrapper-bg">
                    <Row className="wlltpageblnce align-items-center">
                        <Col lg={9} md={7}>
                            <h2 className="h2 pb-3">Wallet Balance</h2>
                            <div className="balanceshowt totblance">
                                <h5>Total Asset Valuation<span className="ps-2"><FontAwesomeIcon icon={faEye} /></span></h5>
                                <h4 className="h4">$ 0.00000 <span className="h5">= 0.0000000 BTC</span></h4>
                            </div>
                        </Col>
                        <Col lg={3} md={5} className="text-end">
                            <Image src="assets/images/walletbalance.svg" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer walletoverviewbg">
                    <Tab.Container id="left-tabs-example">
                        <div className="boxtabb">
                            <Nav variant="pills" className='tabbanner border-0'>
                                <Nav.Item>
                                    <Link href="/wallet" className="nav-link">Spot Balance</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="/wallet" className="nav-link">P2P Balance</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="/rwawallet" className="nav-link active">RWA Balance</Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link href="/#" className="nav-link">Prediction wallet</Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="flexbox mt-3">
                            <div className="panelcontentbox mobilepaneltablebox">

                                <div className="wllettable pt-2">
                                    <Form className="siteformbg">
                                        <div className="d-flex mb-3 sflexfilter">
                                            <div className="supportsearch p-0">
                                                <Form.Group className="form-group mb-0">
                                                    <Form.Control placeholder="Search Balance" id="spotsearch" />
                                                </Form.Group>
                                            </div>
                                            <div className="form-check me-1 pt-2">
                                                <Form.Check type="checkbox" id="spotcheck" label="Hide Small Assets" />
                                            </div>

                                        </div>
                                    </Form>
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="sitetable table-responsive-stack" id="table1">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Balance</th>
                                                    <th>Locked Balance</th>
                                                    <th>Total Balance</th>

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
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </div>
                            </div>
                            <div className="lightwhitebg panelcontentbox">
                                <h6 className="codehading mb-4">Balance Chart</h6>
                                <Spotchart />
                            </div>
                        </div>

                    </Tab.Container>

                </Container>
            </article >
            <Userfooter />
        </div>
    );
}

export default Page;