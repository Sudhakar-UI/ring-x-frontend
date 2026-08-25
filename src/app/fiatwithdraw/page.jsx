"use client"
import React, { useState } from "react";
import Leftsidemenu from "../components/Leftsidemenu";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import { Container, Image, Table, Form, Button, Row, Col, Badge, InputGroup, Nav, Accordion } from 'react-bootstrap';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';
import ResponsiveTable from '../components/ResponsiveTable';

const page = () => {

  const [imageName, setImageName] = useState('');
  const [imageSrc, setImageSrc] = useState('assets/images/proof.svg');

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
  return (
    <div className="pagecontent gridpagecontent innerpagegrid fiatwithdrawpage">
      <Userheader />
      <Leftsidemenu />
      {/* <div className="innerpagecontent">
        <Container className="sitecontainer">
          <h2 className="h2 text-start">Withdraw</h2>
        </Container>
      </div> */}
      <div className="innerpagecontent d-flex align-items-center justify-content-between">
        <h2 className="h2 text-start"> Withdraw Fiat</h2>
        <Link href="/deposit" className="sitebtn btn-sm">Deposit</Link>
      </div>

      <article className="gridparentbox">
        <Container className="sitecontainer depositbg">
          <div className="flexboxtable">
            <div className="mt-0 panelcontentbox">
              <div className="innerpagetab historytab mb-4 wallettab">
                <Nav variant="pills" className="tabbanner">
                  <Nav.Item><Nav.Link href="/deposit" id='cryptotab'>Crypto</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/fiatdeposit" className="active" id='fiattab'>Fiat</Nav.Link></Nav.Item>
                </Nav>
              </div>
              <div className="walletdiv">
                <Form className="siteformbg">
                  <Row>
                    <Col xl={12} lg={12} md={12}>
                      <div className="stpsflowbox">
                        <div className="d-flex stpsfexbox currentstep">
                          <div><span className="stpiconb">1</span></div>
                          <div>
                            <Form.Group className="form-group">
                              <Form.Label>Payment Method</Form.Label>
                              <Form.Select className="form-control" id="paymethod">
                                <option>Bank</option>
                                <option>PayPal</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="d-flex stpsfexbox currentstep">
                          <div><span className="stpiconb">2</span></div>
                          <div>
                            <Form.Group className="form-group">
                              <Form.Label>Receive deposit amount in currency</Form.Label>
                              <Form.Select className="form-control" id="currency">
                                <option>USD</option>
                                <option>CNY</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="d-flex stpsfexbox addressstep">
                          <div><span className="stpiconb">3</span></div>
                          <div>
                            <Form.Group className="form-group">
                              <Form.Label>Country</Form.Label>
                              <Form.Select className="form-control" id="country">
                                <option>India</option>
                                <option>USA</option>
                              </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group">
                              <div className="stoplimtboxt">
                                <div className="link-div">
                                  <div className="activelimit" id='25'>25%</div>
                                  <div id='50'>50%</div>
                                  <div id='75'>75%</div>
                                  <div id='100'>100%</div>
                                </div>
                              </div>
                            </Form.Group>
                            <div className="lightgraybg">
                              <div className="notestitle notesgray ">
                                <p className="pb-0">
                                  <span className="t-gray">Min Withdraw</span><span className="t-black">0.00060000
                                    BTC</span></p>
                                <p className="pb-0"><span className="t-gray">Max Withdraw</span><span className="t-black">0.00060000
                                  BTC</span></p>
                              </div>
                              <div className="notestitle notesgray">
                                <p className="pb-0"><span className="t-gray">Withdraw Fee</span><span className="t-black">0.00060000
                                  BTC</span></p>
                                <p className="pb-0"><span className="t-gray">Total Withdraw</span><span className="t-black">0.00060000
                                  BTC</span></p>
                              </div>
                            </div>
                            <Form.Group className="form-group text-center mt-2">
                              <Button className="btn sitebtn btn-block" id="submit">Submit</Button>
                            </Form.Group>

                          </div>
                        </div>

                      </div>


                      {/* Bank method */}








                      {/* <Form.Group className="form-group kycupload">
                                                <label>Upload Document <span className="t-red">*</span></label>
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
                                            </Form.Group> */}

                      {/* paypal method */}
                      {/* 
                                            <Form.Group className="form-group">
                                                <Form.Label>Receive deposit amount in currency</Form.Label>
                                                <Form.Select className="form-control" id="currency">
                                                    <option>USD</option>
                                                    <option>CNY</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group className="form-group">
                                                <Form.Label>Deposit Amount</Form.Label>
                                                <Form.Control type="text" id="dpstamount" />
                                            </Form.Group>

                                            <Form.Group className="form-group">
                                                <Form.Label>Account Details:</Form.Label>
                                                <Form.Control type="text" id="paypalid" value='PayPal ID : XXXXX' />
                                            </Form.Group> */}

                      {/* <Form.Group className="form-group">
                                            <Form.Label>Service provide</Form.Label>
                                            <Form.Select className="form-control" id="service">
                                                <option>USD</option>
                                                <option>CNY</option>
                                            </Form.Select>
                                        </Form.Group> */}

                    </Col>
                    {/* <Col xl={6} lg={12}> */}

                    {/* <Form.Group className="form-group">
                                                <Form.Label><b>Account Details : </b></Form.Label>
                                                <div className="banknotesinfo">
                                                    <Table className="sitetable" id="table1">
                                                        <tbody>
                                                            <tr>
                                                                <td>Account No</td>
                                                                <td className="text-end">5426426</td>
                                                            </tr>
                                                            <tr>
                                                            <td>Account Type</td>
                                                            <td className="text-end">test</td>
                                                        </tr>
                                                            <tr>
                                                                <td>Account Name</td>
                                                                <td className="text-end">XXXX</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Swift Code</td>
                                                                <td className="text-end">1234</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Bank Name</td>
                                                                <td className="text-end">XXXX</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Bank Branch</td>
                                                                <td className="text-end">XXXX</td>
                                                            </tr>
                                                            <tr>
                                                            <td>Bank Code</td>
                                                            <td className="text-end">46266426</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bank Branch</td>
                                                            <td className="text-end">test</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bank Branch Code</td>
                                                            <td className="text-end">6426</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bank Address</td>
                                                            <td className="text-end">XXXXX</td>
                                                        </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Form.Group> */}
                    {/* <div className="notestitle notesgray dpstnotes lightgraybg">
                                                <p className="pb-0"><span className="t-gray">Deposit Fee (percentage)</span>
                                                    <br /><span className="t-black">000 % </span>
                                                </p>
                                                <p className="pb-0"><span className="t-gray">Minimum deposit limit</span>
                                                    <br /><span className="t-black">100.0000 BTC</span>
                                                </p>
                                                
                                            </div> */}
                    {/* </Col> */}
                    {/* <Col xl={6} lg={12}>
                                            
                                        </Col> */}
                  </Row>
                </Form>
              </div>
            </div>
            <div className="trendcoinbox mt-0 panelcontentbox">
              <h4 className="subhead">How to withdraw</h4>
              <div className="hwtbg">
                <h4 className="h4">1.Select Payment Method</h4>
                <p>Choose your preferred payment method.</p>
                <h4 className="h4">2.Select Your Fiat Currency</h4>
                <p>Choose the fiat currency you want to withdraw.</p>
                <h4 className="h4">3.Select Country</h4>
                <p>Select the country where you hold your bank account.</p>
                
              </div>
            </div>
          </div>

          <div className="wlltdpstbox mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Recent Deposit History</h2>
            <div className="panelcontentbox">
              <Simplebar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id='table2'>
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Currency</th>
                      <th>Payment Type</th>
                      <th>Deposit</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr className="nodata">
                                <td colSpan={8} className='text-center'>
                                    <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                    No record found
                                </td>
                                </tr> */}
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>Bank</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/cny.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />CNY</td>
                      <td>Paypal</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>Bank</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>Bank</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/cny.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />CNY</td>
                      <td>Paypal</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                    <tr>
                      <td>18/01/2024, 05:05:00</td>
                      <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                      <td>Bank</td>
                      <td>2563971</td>
                      <td><Badge bg="success">Confirm</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </Simplebar>
              <ResponsiveTable tableId="table2" />
            </div>
          </div>
        </Container>
      </article>
      <Userfooter />
    </div>
  )
}

export default page