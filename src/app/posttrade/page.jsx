"use client"
import React from 'react'
import { Container, Form, Row, Col, InputGroup } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import './../../../public/assets/css/p2pcustom.css';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';


const Page = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                        <h2 className="h2">Post Trade</h2>
                    </div>
            <article className="gridparentbox">
                <Container className="sitecontainer posttradepage">
                    <div className="panelcontentbox posttradebox">
                        <div className="contentbox">
                            <Form className="siteformbg">
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Asset</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Cryptocurrency <span className="text-danger">*</span></Form.Label>
                                        </Col> 
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="cryptocurrency_select">
                                                <option>BTC</option>
                                                <option>ETH</option>
                                                <option>DASH</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>                                        
                                </div>
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Trade Type</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Buy / Sell <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="tradetype">
                                                <option>Buy</option>
                                                <option>Sell</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Location <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="location"/>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Please Specify your City</p>
                                        </Col>
                                    </Row>
                                   
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Country <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="country">
                                                <option>India</option>
                                                <option>US</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Please Specify your Country to find the Trade</p>
                                        </Col>
                                    </Row>
                              
                                </div>
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Currency Info</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Market <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="market">
                                                <option>INR</option>
                                                <option>USD</option>
                                            </Form.Select>
                                        </Col>                                      
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Margin <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <InputGroup>
                                                <Form.Control type="text" id="margin"/>
                                                <InputGroupText>%</InputGroupText>
                                            </InputGroup>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Margin you want over the coin market price. Use a negative value for buying or selling under the market price to attract more contacts.</p>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Trade price <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="trade_price" />
                                            <small className="t-green">Trade price with current market value 0.73 INR</small>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>How the trade price is determined from the hourly market price.</p>
                                        </Col>
                                    </Row>
                                  
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Min.transaction Limit <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="min_translimit" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>How the trade price is determined from the hourly market price.</p>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Max.transaction Limit <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="max_translimit"/>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Maximum transaction limit in one trade.</p>
                                        </Col>
                                    </Row>
                                
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Payment Window <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="payment_window"/>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Minimum payment time 15mins. If you does not pay within the payment time, the trade will be cancelled automatically.</p>
                                        </Col>
                                    </Row>
                                 

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Opening Hours <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={12} lg={7}>
                                        <div className="openinghbg">
                                                <div>
                                                    <h6>Sun</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="sun_startdate">
                                                            <option value="">Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="sun_enddate">
                                                            <option value="" >End</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Mon</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="mon_startdate">
                                                            <option value="" >Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="mon_endtdate">
                                                            <option value="" >End</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Tue</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="tues_startdate">
                                                            <option value="" >Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="tues_enddate">
                                                            <option value="" >End</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Wed</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="wed_startdate">
                                                            <option value="" >Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="wed_enddate">
                                                            <option value="" >End</option>
                                                            <option value="00:00">00:00</option>
                                                            <option value="00:00">00:00</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Thu</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="thurs_startdate">
                                                            <option value="" >Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="thurs_enddate">
                                                            <option value="" >End</option>
                                                            <option value="00:00">00:00</option>
                                                            <option value="00:15">00:15</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Fri</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="fri_startdate">
                                                            <option value="" >Start</option>
                                                            <option value="00:00">00:00</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="fri_enddate">
                                                            <option value="" >End</option>
                                                            <option value="00:00">00:00</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Sat</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="sat_startdate">
                                                            <option value="" >Start</option>
                                                            <option value="00:00">00:00</option>
                                                            <option value="00:15">00:15</option>
                                                            <option value="23:45">23:45</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="sat_endtdate">
                                                            <option value="" >End</option>
                                                            <option value="00:00">00:00</option>
                                                            <option value="00:15">00:15</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>               
                                        </Col>                                        
                                    </Row>
                                </div>
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Online Options</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Payment Method <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="payment_method">
                                                <option>Online Transfer</option>
                                                <option>Cash Deposit</option>
                                            </Form.Select>
                                        </Col>                                       
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Account Details<span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control as="textarea" rows={3} id="acc_details"/>
                                        </Col>     
                                        <Col md={5} lg={7}>
                                            <p>Fill your account details.</p>
                                        </Col>                                    
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Additional Information<span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="add_info"/>
                                        </Col> 
                                        <Col md={5} lg={7}>
                                            <p>Optional. If necessary, please provide details how to transfer money. This is either bank account number for wire transfers or user account for money transfer websites.</p>
                                        </Col>                                         
                                    </Row>                                   
                                   
                                </div>
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Terms of Trade</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Terms<span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control as="textarea" rows={3} id="terms"/>
                                        </Col> 
                                        <Col md={5} lg={7}>
                                            <p>Other information you wish to tell about your trade.</p>
                                        </Col>                                         
                                    </Row>                                     
                                </div>
                                <div className="text-center form-group mt-20">
                                    <input type="submit" className="btn sitebtn" id="submit_btn" />
                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div >
    )
}

export default Page;