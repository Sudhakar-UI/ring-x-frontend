"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Image, Table, Row, Form, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';

import Highcharts from 'highcharts';


const Page = () => {

    useEffect(() => {
        const options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                outline: false,
                renderTo: 'spotwalletbalance' // Specify the render target
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Crypto',
                colorByPoint: true,
                borderRadius: 0,
                innerSize: '75%',
                data: [
                    { name: 'BTC 0.00310630', y: 2.369 },
                    { name: 'ETH 0.00000839', y: 3.369 },
                    { name: 'BNB 0.00000839', y: 3.369 },
                    { name: 'XRP 0.00000839', y: 3.369 },
                    { name: 'TRX 0.00000839', y: 3.369 },
                    { name: 'DOGE 0.00000839', y: 3.369 }
                ]
            }],
            legend: {
                itemMarginTop: 8,
                itemMarginBottom: 8
            }
        };

        // Initialize the chart
        Highcharts.chart(options);
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
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
            <article className="gridparentbox peerchartbnce">
                <Container className="sitecontainer walletoverviewbg">
                    <div className="flexbox">
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
                                                <th>Free Balance</th>
                                                <th>Locked Balance</th>
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
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">ETH</span><span className="t-gray">Ethereum</span></td>
                                                <td>0.293985</td>
                                                <td>0.32569</td>
                                                <td>0.00254789</td>                                             
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">XRP</span><span className="t-gray">Ripple</span></td>
                                                <td>0.293985</td>
                                                <td>0.32569</td>
                                                <td>0.00254789</td>                                               
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">BNB</span><span className="t-gray">Binance Coin</span></td>
                                                <td>0.293985</td>
                                                <td>0.32569</td>
                                                <td>0.00254789</td>                                                
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">TRX</span><span className="t-gray">Tron</span></td>
                                                <td>0.293985</td>
                                                <td>0.32569</td>
                                                <td>0.00254789</td>                                               
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td><Image src="assets/images/color/doge.svg" width={50} height={50} alt="coin" className="coinlisticon" /><span className="me-1">DOGE</span><span className="t-gray">Dogecoin</span></td>
                                                <td>0.293985</td>
                                                <td>0.32569</td>
                                                <td>0.00254789</td>                                            
                                            </tr>

                                        </tbody>
                                    </Table>
                                </SimpleBar>
                                <ResponsiveTable tableId="table1" />
                            </div>
                        </div>

                        <div className="lightwhitebg panelcontentbox">
                            <h6 className="codehading mb-4">Balance Chart</h6>
                            <div id="spotwalletbalance" className='balancechart' style={{ width: '100%', height: '450px', outline: 'none' }}></div>
                        </div>
                    </div>
                </Container>
            </article >
            <Userfooter />
        </div>
    );
}

export default Page;