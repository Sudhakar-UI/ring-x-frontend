"use client"
import React, { useEffect, useState } from "react";
import {
    Container,
    Table,
    Image,
    Modal,
    Row,
    Col,
    Form,
    InputGroup,
    Button
} from "react-bootstrap";

import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import Distributionchart from "../components/Distributionchart";

const Investorsdetails = () => {

    useEffect(() => {
        document.body.classList.add('investpagebg');

        return () => {
            document.body.classList.remove('investpagebg');
            document.body.classList.remove('loginbanner');
        };
    }, []);

    const [showModal1, setShowModal1] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    return (
        <>
            <div className="innerpage">

                <Homeheader />

                {/* Banner */}
                <div className="innercontentpage investorbanner">
                    <Container>
                        <div className="text-center">

                            <h2 className="heading-title pb-2">
                                Invest in Real-World Assets Powered by Blockchain.
                            </h2>

                            <p>
                                Discover premium tokenized real estate, luxury
                                properties, and blockchain-backed investment
                                opportunities with transparent ownership and secure
                                digital asset management.
                            </p>

                        </div>
                    </Container>
                </div>

                {/* Project Section */}
                <section className="projectbg">

                    <Container>

                        <div className="projectinfopage">

                            {/* Top Info */}
                            <div className="projectinfopage-flex">
                                <Image
                                    src="assets/images/project1.png"
                                    width={420}
                                    height={300}
                                    alt="RWA Project"
                                    className="img-fluid rounded investiconpro-img"
                                /> 

                                <div className="prtcnt">
                                    <h3 className="heading-title mb-1">
                                        Modern Luxury Villa
                                    </h3>

                                    <p className="mb-2">
                                        <i>
                                            <small className="t-blue">
                                                Verified RWA Project • Live Funding
                                            </small>
                                        </i>
                                    </p>

                                    <p className="content">
                                        Invest in a premium tokenized luxury villa
                                        located in a high-growth real estate zone.
                                        This blockchain-backed RWA project allows
                                        investors to own fractional shares of
                                        real-world property assets with transparent
                                        ownership records, passive rental income
                                        opportunities, and long-term value
                                        appreciation through secure smart contract
                                        infrastructure.
                                    </p>

                                    <ul className="prtlistbadge">

                                        <li>
                                            <span>Target</span><br />
                                            <span>$200K</span>
                                        </li>

                                        <li>
                                            <span>Funded</span><br />
                                            <span>60%</span>
                                        </li>

                                        <li>
                                            <span>Investors</span><br />
                                            <span>105</span>
                                        </li>

                                        <li>
                                            <span>Available Tokens</span><br />
                                            <span>250</span>
                                        </li>

                                        <li>
                                            <span>Minimum Investment</span><br />
                                            <span>$256</span>
                                        </li>

                                        <li>
                                            <span>Estimated ROI</span><br />
                                            <span>5% APY</span>
                                        </li>

                                    </ul>

                                </div>

                            </div>

                            {/* Content */}
                            <div className="prtcnt mt-4">

                                <Row>

                                    {/* Left */}
                                    <Col lg={7}>

                                        <h5 className="h5 pb-2">
                                            Available Currencies
                                        </h5>

                                        <ul className="currencylistb mb-3">

                                            <li>
                                                <Image
                                                    src="assets/images/color/eth.svg"
                                                    className="coinlisticon"
                                                    width={15}
                                                    height={15}
                                                    alt="ETH"
                                                />
                                                ETH
                                            </li>

                                            <li>
                                                <Image
                                                    src="assets/images/color/btc.svg"
                                                    className="coinlisticon"
                                                    width={15}
                                                    height={15}
                                                    alt="BTC"
                                                />
                                                BTC
                                            </li>

                                            <li>
                                                <Image
                                                    src="assets/images/color/trx.svg"
                                                    className="coinlisticon"
                                                    width={15}
                                                    height={15}
                                                    alt="TRX"
                                                />
                                                TRX
                                            </li>

                                            <li>
                                                <Image
                                                    src="assets/images/color/usdt.svg"
                                                    className="coinlisticon"
                                                    width={15}
                                                    height={15}
                                                    alt="USDT"
                                                />
                                                USDT
                                            </li>

                                            <li>
                                                <Image
                                                    src="assets/images/color/usd.svg"
                                                    className="coinlisticon"
                                                    width={15}
                                                    height={15}
                                                    alt="USD"
                                                />
                                                USD
                                            </li>

                                            <li>
                                                <Image
                                                    src="assets/images/color/bch.svg"
                                                    className="coinlisticon"
                                                    width={15}
                                                    height={15}
                                                    alt="BCH"
                                                />
                                                BCH
                                            </li>

                                        </ul>

                                        {/* About */}
                                        <h3 className="subhead">
                                            About the Project
                                        </h3>

                                        <p className="content">
                                            The Modern Luxury Villa project is a
                                            tokenized real estate investment
                                            opportunity that enables global
                                            investors to participate in premium
                                            property ownership through blockchain
                                            technology. Each token represents
                                            fractional ownership of the underlying
                                            real-world asset, providing
                                            transparency, liquidity, and secure
                                            digital ownership verification.
                                        </p>

                                        {/* Chart */}
                                        <Distributionchart />

                                        <p className="content mt-3">
                                            This RWA investment model combines
                                            traditional real estate stability with
                                            blockchain efficiency. Token holders
                                            gain access to real-time investment
                                            tracking, secure transactions, and
                                            automated reward distribution through
                                            decentralized infrastructure.

                                            The property is professionally managed
                                            and strategically located in a rapidly
                                            developing urban investment zone
                                            designed to maximize long-term capital
                                            growth and passive income generation.
                                        </p>

                                        <Button
                                            type="button"
                                            className="sitebtn mt-2"
                                            onClick={handleShowModal1}
                                        >
                                            Buy Token
                                        </Button>
                                        <Button
                                            type="button"
                                            className="borderbtn mt-2 ms-1"
                                            onClick={handleShowModal1}
                                        >
                                            Investing Form
                                        </Button>

                                    </Col>

                                    {/* Right */}
                                    <Col lg={5}>

                                        {/* Official Info */}
                                        <div className="lightgraybg">

                                            <h5 className="subhead">
                                                Official Information
                                            </h5>

                                            <Table
                                                className="sitetable mb-0"
                                                id="table1"
                                            >
                                                <tbody>

                                                    <tr>
                                                        <td>Asset Website</td>
                                                        <td>
                                                            https://ringx.com/rwa-villa
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Property Location</td>
                                                        <td>Dubai, UAE</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Asset Category</td>
                                                        <td>Luxury Real Estate</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Blockchain Network</td>
                                                        <td>Polygon</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Launch Date</td>
                                                        <td>18 Apr 2025</td>
                                                    </tr>

                                                </tbody>
                                            </Table>

                                        </div>

                                        {/* Token Info */}
                                        <div className="lightgraybg mt-3">

                                            <h3 className="subhead">
                                                Token Information
                                            </h3>

                                            <Table
                                                className="sitetable mb-0"
                                                id="table2"
                                            >
                                                <tbody>

                                                    <tr>
                                                        <td>Token Name</td>
                                                        <td>MVILLA</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Token Price</td>
                                                        <td>$0.25</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Token Standard</td>
                                                        <td>ERC-20</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Total Supply</td>
                                                        <td>2,250,000</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Total Raised</td>
                                                        <td>$132,000</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Minimum Purchase</td>
                                                        <td>25 Tokens</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Rental Yield</td>
                                                        <td>5% APY</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Ownership Type</td>
                                                        <td>Fractional Ownership</td>
                                                    </tr>

                                                </tbody>
                                            </Table>

                                        </div>

                                    </Col>

                                </Row>

                            </div>

                        </div>

                    </Container>

                </section>

                <Homefooter />

                {/* Modal */}
                <Modal
                    show={showModal1}
                    onHide={handleCloseModal1}
                    centered
                    className='modalbgt pjmodal'
                >

                    <Modal.Header closeButton>
                        <Modal.Title>
                            Buy RWA Token
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form className="siteformbg">

                            <Form.Group className="form-group forminputbox">

                                <Form.Label>
                                    Select Currency
                                </Form.Label>

                                <Form.Select
                                    className="form-control"
                                    id='currency'
                                >
                                    <option>USDT</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                </Form.Select>

                            </Form.Group>

                            <Form.Group className="form-group forminputbox mb-2">

                                <Form.Label>
                                    Purchase Amount
                                </Form.Label>

                                <InputGroup>

                                    <Form.Control
                                        name="code"
                                        id="buyvolume"
                                        placeholder="Enter amount"
                                    />

                                    <div className="input-group-append">
                                        <InputGroup.Text>
                                            Tokens
                                        </InputGroup.Text>
                                    </div>

                                </InputGroup>

                            </Form.Group>

                            <Form.Group className="form-group mb-2">

                                <div className="notestokenb">

                                    <p className="pb-0 mb-0">
                                        <span className="t-gray">
                                            Token Price
                                        </span>

                                        <span className="t-black">
                                            $0.25
                                        </span>
                                    </p>

                                    <p className="pb-0 mb-0">
                                        <span className="t-gray">
                                            Estimated ROI
                                        </span>

                                        <span className="t-black">
                                            5% APY
                                        </span>
                                    </p>

                                </div>

                            </Form.Group>

                            <div className="text-center">

                                <Button
                                    className="sitebtn w-100"
                                    id="submit"
                                >
                                    Confirm Investment
                                </Button>

                            </div>

                        </Form>

                    </Modal.Body>

                </Modal>

            </div>
        </>
    )
}

export default Investorsdetails;