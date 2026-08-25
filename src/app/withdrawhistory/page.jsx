"use client"
import React, { useState } from "react";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import { Container, Image, Nav, Table, Form, Button, Badge } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';

const page = () => {
  //   const [startDate, setStartDate] = useState(new Date()); 
  //   const [endDate, setEndDate] = useState(new Date()); 
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <div className="pagecontent gridpagecontent innerpagegrid">
        <div className="backgroundoverlay" id="backgroundoverlay"></div>
        <Userheader />
        <Leftsidemenu />
        <div className="innerpagecontent">
          <h2 className="h2">Withdraw History</h2>
        </div>
        <article className="gridparentbox">
          <Container className="container sitecontainer historypage">

            <div className="panelcontentbox">
              <div className="mb-3 historsysrch">
                <div className="searchfrmbox">
                  <Form className="siteformbg">
                    <div className="searchfrm justify-content-start">
                      <Form.Group className="form-group" id="startdate">
                        <Form.Label>From</Form.Label>
                        <div className="dateinput">
                          <Flatpickr id="start_date" placeholder="Select a date" value={startDate} onChange={(startDate) => setStartDate(startDate)}
                            options={{ dateFormat: "Y-m-d", enableTime: false, disableMobile: true, }}
                          /></div>
                      </Form.Group>
                      <Form.Group className="form-group" id="enddate">
                        <Form.Label>To</Form.Label>
                        <div className="dateinput">
                          <Flatpickr id="end_date" placeholder="Select a date" value={endDate} onChange={(endDate) => setEndDate(endDate)} options={{ dateFormat: "Y-m-d", enableTime: false, disableMobile: true, }}
                          />
                        </div>
                      </Form.Group>
                      <div className="clearbtn">
                        <Form.Group className="form-group">
                          <Button className="btn sitebtn btn-sm me-1" id="searchbtn">Search</Button>
                          <Link href="/" className="btn sitebtn btn-sm red-btn" id="resetbtn">Reset</Link>
                        </Form.Group>
                      </div>
                      <Form.Group className="mb-3">
                        <Form.Label>Select Coin/Currency</Form.Label>
                        <Form.Select className="form-control" id="allcoin">
                          <option>All</option>
                          <option>BTC</option>
                          <option>BNB</option>
                          <option>ETH</option>
                          <option>TRX</option>
                          <option>SOL</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </Form>
                </div>
              </div>
              <SimpleBar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id="table1">
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Coin</th>
                      <th>TX Hash</th>
                      <th>Sender Address</th>
                      <th>Receiver Address </th>
                      <th>Requested Amount</th>
                      <th>Withdraw Fee</th>
                      <th>Total Withdraw</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="nodata">
                      <td colSpan={9} className="text-center">
                        <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                        No record found
                      </td>
                    </tr>
                    {/* <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Completed</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Completed</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/sol.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />SOL</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="warning">Pending</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/trx.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />TRX</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Completed</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="warning">Pending</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td><span className="t-green">256.39874</span></td>
                      <td>0.5</td>
                      <td>2563971</td>
                      <td><Badge bg="warning">Pending</Badge></td>
                    </tr> */}
                  </tbody>
                </Table>
              </SimpleBar>
              <ResponsiveTable tableId="table1" />
            </div>
          </Container>
        </article>
        <Userfooter />
      </div>
    </div>
  );
};

export default page;