"use client";
import React, { useState } from "react";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import {
  Container,
  Image,
  Nav,
  Table,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Link from "next/link";
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
          <h2 className="h2">Deposit History</h2>
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
                      <th>Sender</th>
                      <th>Receiver</th>
                      <th>Deposit</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>22-05-2026 12:13:18</td>
                      <td>
                        <Image
                          src="assets/images/color/usd.svg"
                          width="{50}"
                          height="{50}"
                          alt="coin"
                          className="coinicon"
                        />
                        USD
                      </td>
                      <td>f40c4435a3411846c3d7efd7d6dbf6c41a4312da</td>
                      <td>
                        <span className="t-green">-</span>
                      </td>
                      <td>-</td>
                      <td>10</td>
                      <td>
                        <Badge bg="warning">Completed</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>22-05-2026 12:13:18</td>
                      <td>
                        <Image
                          src="assets/images/color/eth.svg"
                          width="{50}"
                          height="{50}"
                          alt="coin"
                          className="coinicon"
                        />
                        ETH
                      </td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>
                        <span className="t-green">FDATRWYTUNDJF8455674</span>
                      </td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>2563971</td>
                      <td>
                        <Badge bg="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>22-05-2026 12:13:18</td>
                      <td>
                        <Image
                          src="assets/images/color/sol.svg"
                          width="{50}"
                          height="{50}"
                          alt="coin"
                          className="coinicon"
                        />
                        SOL
                      </td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>
                        <span className="t-green">FDATRWYTUNDJF8455674</span>
                      </td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>2563971</td>
                      <td>
                        <Badge bg="success">Completed</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>22-05-2026 12:13:18</td>
                      <td>
                        <Image
                          src="assets/images/color/trx.svg"
                          width="{50}"
                          height="{50}"
                          alt="coin"
                          className="coinicon"
                        />
                        TRX
                      </td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>
                        <span className="t-green">FDATRWYTUNDJF8455674</span>
                      </td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>2563971</td>
                      <td>
                        <Badge bg="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>22-05-2026 12:13:18</td>
                      <td>
                        <Image
                          src="assets/images/color/btc.svg"
                          width="{50}"
                          height="{50}"
                          alt="coin"
                          className="coinicon"
                        />
                        BTC
                      </td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>
                        <span className="t-green">FDATRWYTUNDJF8455674</span>
                      </td>
                      <td>FDATRWYTUNDJF8455674</td>
                      <td>2563971</td>
                      <td>
                        <Badge bg="success">Completed</Badge>
                      </td>
                    </tr>
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
