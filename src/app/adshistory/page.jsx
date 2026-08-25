"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { Container, Image, Table, Modal, Button, Form } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import './../../../public/assets/css/p2pcustom.css';
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";

const Page = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);
  const [showModal2, setShowModal2] = useState(false);
  const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent">
        <h2 className="h2">Advertisement History</h2>
      </div>
      <article className="gridparentbox">
        <Container className="sitecontainer p2poverview">
          <div className="panelcontentbox ">
        <div className="mb-3 mt-3 historsysrch">
							<div className="searchfrmbox">
								<Form className="siteformbg">
									<div className="searchfrm">
										<Form.Group className="mb-3">
											<Form.Label>Search Promoter</Form.Label>
											<Form.Control className="form-control" id="promoter" />
										</Form.Group>
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
										{/* <div className="clearbtn">
											<Form.Group className="mb-0">
												<Button className="borderbtn btn-sm" id="download_btn">Download Excel</Button>
											</Form.Group>
										</div> */}
									</div>
								</Form>
							</div>
						</div>
            <div className="tabpanel adshistpage">
              <SimpleBar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id="table1">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Date</th>
                      <th>Coins</th>
                      <th>Type</th>
                      <th>Limit</th>
                      <th>Max limit</th>
                      <th>Margin (%)</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="nodata">
												<td colSpan={10}>
													<Image src="../assets/images/nodata.svg"/>
													<p>No record found</p>
												</td>
											</tr>
                    {/* <tr>
                      <td>1</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/btc.svg" className="smallcoin" />BTC</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/eth.svg" className="smallcoin" />ETH</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>10.3659</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/xrp.svg" className="smallcoin" />XRP</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.26</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/bnb.svg" className="smallcoin" />BNB</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/trx.svg" className="smallcoin" />TRX</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/btc.svg" className="smallcoin" />BTC</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>2.5987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/xrp.svg" className="smallcoin" />XRP</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>2.5987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/eth.svg" className="smallcoin" />ETH</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>2.5987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/trx.svg" className="smallcoin" />TRX</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>2482.5987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>11-12-2024</td>
                      <td><Image src="../assets/images/color/eth.svg" className="smallcoin" />ETH</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>10.3659</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="btn viewbtn me-1 t-green">View</Link><Link id="edit_btn" href="#"
                          className="btn viewbtn me-1 t-green">Edit</Link><Button id="cancel_btn" type="button"
                            className="btn viewbtn me-1 t-red" onClick={handleShow1}>Cancel</Button><Button id="disable_btn" type="button"
                              className="btn viewbtn t-red" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr> */}
                  </tbody>
                </Table>
              </SimpleBar>
              <ResponsiveTable tableId="table1" />
            </div>
          </div>
        </Container>
      </article>
      <Userfooter />

      <Modal show={showModal1} onHide={handleClose1} className='modalbgt' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h4>Are you sure want to cancel this Advertisement?</h4>
            <hr className="mt-4 mb-4" />
            <Form className="siteformbg">
              <Button id="yes" type="button" className="btn viewbtn green-btn me-1">Yes</Button>
              <Button id="no" type="button" className="btn viewbtn red-btn">No</Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showModal2} onHide={handleClose2} className='modalbgt' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h4>Are you sure want to disable this Advertisement?</h4>
            <hr className="mt-4 mb-4" />
            <Form className="siteformbg">
              <Button id="yes" type="button" className="btn viewbtn green-btn me-1">Yes</Button>
              <Button id="no" type="button" className="btn viewbtn red-btn">No</Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Page;