"use client"
import React from "react";
import Link from 'next/link';
import { Container, Image, Table } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';




const Page = () => {


    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <h2 className="h2">Notifications</h2>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer transferpage">



                    <div className="panelcontentbox mobilepaneltablebox">
                        <div className="wllettable">
                            {/* <h2 className="heading-box pt-0 mb-3 ps-0">Notifications History</h2> */}
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable table-responsive-stack" id="table1">
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Title</th>
                                            <th>Description</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="nodata">
                                            <td colSpan={7}>
                                                <Image src="../assets/images/nodata.svg" />
                                                <p>No record found</p>
                                            </td>
                                        </tr>
                                        {/* <tr>
                                                <td>05:05:00, 18/02/2024</td>
                                                <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                    BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                <td>Funding</td>
                                                <td>P2P</td>
                                                <td>0.254789</td>
                                                <td><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>05:05:00, 18/02/2024</td>
                                                <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                    BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                <td>Funding</td>
                                                <td>P2P</td>
                                                <td>0.254789</td>
                                                <td><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>05:05:00, 18/02/2024</td>
                                                <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                                    BTC<span className="t-gray ms-2">Bitcoin</span></td>
                                                <td>Funding</td>
                                                <td>P2P</td>
                                                <td>0.254789</td>
                                                <td><Badge bg="success">Completed</Badge></td>
                                            </tr> */}
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </div>


                </Container>
            </article >
            <Userfooter />
        </div>
    );
}

export default Page;