"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { Container, Form, Image, Table, Button, Row, Col, InputGroup, Modal, Badge } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Paymentrequest = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent innerpagetopimage">
        <Container className="sitecontainer">
            <Row className="wlltpageblnce align-items-center">
                <Col lg={9} md={7}>
                    <h2 className="h2 pb-3">Agent Dashboard</h2>
                    <div className="balanceshowt totblance agentpanelbox">
                        <h5>Agent Wallet Balance</h5>
                        <h4 className="h4">$ 0.00000 </h4>
                    </div>                           
                </Col>
                <Col lg={3} md={5} className="text-end">
                    <Image src="assets/images/walletbalance.svg" />
                </Col>
            </Row>
        </Container>
    </div>
      <article className="gridparentbox">
        <Container className="sitecontainer">
          <div className="flexbox agentwalletbox">
          <div className="panelcontentbox mt-0">
                <h2 className="heading-box ps-0 pt-0 pe-0 mb-4">Select Method</h2>    
                <div className="balancedirectbox">
                  <div className="panelcontentbox">
                    <Link href="/cashin" id='cashinlink' className="contentbox">
                      <div><Image src="assets/images/cash-in.svg" /> </div>
                      <div><h5>Cash In</h5></div>
                    </Link>
                  </div>
                  <div className="panelcontentbox">
                    <Link href="/cashout" id='cashoutlink' className="contentbox">
                      <div> <Image src="assets/images/cash-out.svg" /> </div>
                      <div>
                        <h5>Cash Out</h5>
                      </div>
                    </Link>
                  </div>
                  <div className="panelcontentbox active">
                    <Link href="/paymentrequest" id='paymenetreqlink' className="contentbox">
                      <div> <Image src="assets/images/payment-request.svg" /> </div>
                      <div>
                        <h5>Request Payment</h5>
                      </div>
                    </Link>
                  </div>
              </div>   
            </div>
            <div className="mt-0 panelcontentbox">     
            <h2 className="heading-box ps-0 pt-0 pe-0 mb-4">Payment Request</h2>        
                <Form className="siteformbg">  
                    <Row>
                      <Col xl={4} lg={6} md={6}>             
                        <Form.Group className="form-group">
                                <Form.Label>Select Agent</Form.Label>
                                <Form.Select className="form-control" id='currency'>
                                <option>John</option>
                                </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xl={4} lg={6} md={6}>             
                    <Form.Group className="form-group">
                                <Form.Label>Select Platform</Form.Label>
                                <Form.Select className="form-control" id='currency'>
                                <option></option>
                                </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xl={4} lg={6} md={6}>             
                    <Form.Group className="form-group">
                            <Form.Label>Select Currency</Form.Label>
                            <Form.Select className="form-control" id='paymethod'>
                            <option></option>
                            <option>BTC</option>
                            </Form.Select>
                        </Form.Group>   
                    </Col>
                    <Col xl={4} lg={6} md={6}>             
                    <Form.Group className="form-group">
                            <Form.Label>User ID in the platform</Form.Label>
                            <Form.Control id='dpstamount'  />
                        </Form.Group>
                    </Col>
                    <Col xl={4} lg={6} md={6}>             
                    <Form.Group className="form-group">
                            <Form.Label>Requested for Payment</Form.Label>
                            <InputGroup>
                            <Form.Control id='dpstamount' placeholder="eg., $100" />
                            <InputGroup.Text>USD</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    
                    </Row>

                    <Form.Group className="form-group text-center">
                        <Button type="button" className="sitebtn" onClick={handleShowModal1}>Request Payment</Button>
                    </Form.Group>
                </Form>
            </div>
          </div>
          <div className="wlltdpstbox mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Recent Payment Request History</h2>
            <div className="tabrightbox">
                <Link href="/reviewcommission" className="alink">View More <FontAwesomeIcon className='ms-1' icon={faArrowRight} /></Link>
            </div>
            <div className="panelcontentbox">
              <Simplebar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id="table1">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Date & Time</th>
                        <th>Agent Name</th>
                        <th>Requested Payment</th>
                        <th>Platform</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/*<tr className="nodata">
                        <td colSpan={4}>
                          <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                          No record found
                        </td>
                      </tr>*/}
                      <tr>
                        <td>1</td>
                        <td>18/01/2023 10:05:05</td>
                        <td>John</td>
                        <td>$100</td>
                        <td>Forex</td>
                        <td><Badge bg="success">Approved</Badge></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>18/01/2023 10:05:05</td>
                        <td>John</td>
                        <td>$100</td>
                        <td>Forex</td>
                        <td><Badge bg="success">Approved</Badge></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>18/01/2023 10:05:05</td>
                        <td>John</td>
                        <td>$100</td>
                        <td>Forex</td>
                        <td><Badge bg="success">Approved</Badge></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>18/01/2023 10:05:05</td>
                        <td>John</td>
                        <td>$100</td>
                        <td>Forex</td>
                        <td><Badge bg="success">Approved</Badge></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>18/01/2023 10:05:05</td>
                        <td>John</td>
                        <td>$100</td>
                        <td>Forex</td>
                        <td><Badge bg="success">Approved</Badge></td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>18/01/2023 10:05:05</td>
                        <td>John</td>
                        <td>$100</td>
                        <td>Forex</td>
                        <td><Badge bg="success">Approved</Badge></td>
                      </tr>
                    </tbody>
                  </Table>
              </Simplebar>
              <ResponsiveTable tableId="table1" />
            </div>
          </div>

        </Container>
      </article>
      <Userfooter />

      <Modal className="modaltable modalbgt" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-3 pb-4">
            <Form className='siteformbg'>     
                <div className="text-center confirmicon">
                <Image src="assets/images/confirm.svg" className="mb-3" width={20} height={20} alt="icon"/>                        
                <h5 className="text-center">Please Confirm</h5>        
                <p className="text-center t-black">Confirm Withdrawal of $100 to Agent AGT12345</p>    
                </div>           
                <div className="text-center d-flex mt-3">
                    <Button className='borderbtn me-2 w-100' id="submit">Cancel</Button>
                    <Button className='sitebtn w-100' id="submit">Yes</Button>
                </div>
            </Form>
        </Modal.Body>
    </Modal>
    </div>
  );
}

export default Paymentrequest