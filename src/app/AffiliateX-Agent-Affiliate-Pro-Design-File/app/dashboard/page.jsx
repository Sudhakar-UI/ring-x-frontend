"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Tooltip, OverlayTrigger, Tabs, Tab, Form, Row, Col, Button, InputGroup, Modal } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Leftsidemenu from '../components/Leftsidemenu';
import ResponsiveTable from '../components/ResponsiveTable';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle, faCircleChevronRight, faEye, faEyeSlash, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 3000;

const timerProps = {
	isPlaying: true,
	size: 70,
	strokeWidth: 3
};

const renderTime = (dimension, time) => {
	return (
		<div className="time-wrapper">
			<div className="datetxticon">{dimension}</div>
			<div className="time timeszeicon">{time}</div>
		</div>
	);
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Page = () => {

	const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
	const endTime = stratTime + 243248; // use UNIX timestamp in seconds

	const remainingTime = endTime - stratTime;
	const days = Math.ceil(remainingTime / daySeconds);
	const daysDuration = days * daySeconds;

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<h2 className="h2">Dashboard</h2>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer dashboardpage">
					<div className="flexbox chartflexbox">
						<div>
							<div className="welcomebanner panelcontentbox">
								<div className="table-content">
									<div>
										<h5 className="pb-2">Seamlessly <span className='txt-yellow'>send and receieve</span><br /> Crypto Payment in-ease</h5>
										<Link href="/buytoken" id="depositbtn" className="btn sitebtn">Deposit</Link>
									</div>
									<div className='p-3'>
										<Image src="assets/images/tokensale.svg" />
									</div>
								</div>
								<div className="panelcontentbox securepanelbox">
									<div className="balanceshowt totblance p-0 pb-3">
										<h5>Wallet Balance</h5>
										<h4 className="h4">$ 0.00000 <span className="h5">= 0.0000000 BTC</span></h4>
									</div>
									<div className="balancedirectbox d-flex">
										<div className="panelcontentbox">
											<Link href="/deposit" id='depositlink' className="contentbox">
												<div> <Image src="assets/images/deposit.svg" /> </div>
												<div>
													<h5>Deposit</h5>
												</div>
											</Link>
										</div>
										<div className="panelcontentbox">
											<Link href="/withdraw" id='withdrawlink' className="contentbox">
												<div> <Image src="assets/images/withdraw.svg" /> </div>
												<div>
													<h5>Withdraw</h5>
												</div>
											</Link>
										</div>
										<div className="panelcontentbox">
											<Link href="/agentslist" id='agentlink' className="contentbox">
												<div> <Image src="assets/images/transaction.svg" /> </div>
												<div>
													<h5>Agent List</h5>
												</div>
											</Link>
										</div>
										<div className="panelcontentbox">
											<Link href="/overview" id='p2ptradelink' className="contentbox">
												<div> <Image src="assets/images/ref.svg" /> </div>
												<div>
													<h5>P2P Trade</h5>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="securpanelbox panelcontentbox p-0">
								<div className="overviewbalancebox">
									<div className="balanceshowbox">
										<div className="walletbalancebox">
											<div className="tablebox d-flex">
												<div className="balancetableb panelcontentbox">
													<div className="balanceshowt table-content">
														<div>
															<h5 className="h5">Total Deposit</h5>
															<h4 className="h4">$2,5639</h4>
														</div>
														<div className="text-end">
															<Image src="assets/images/dpsticon1.svg" alt="icon" withd={20} height={20} />
														</div>
													</div>
												</div>
												<div className="balancetableb panelcontentbox">
													<div className="balanceshowt table-content">
														<div>
															<h5 className="h5">Total Withdraw</h5>
															<h4 className="h4">$2,5639</h4>
														</div>
														<div className="text-end">
															<Image src="assets/images/wthdricon1.svg" alt="icon" withd={20} height={20} />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className=" table-content mt-3 panelcontentbox">
								<div className="securpanelbox panelcontentbox p-0">
									<div className="">
										<div className="securpanelbox">
											<h2 className="subhead">Security Settings</h2>
											<div className='d-flex text-center statusflex'>
												<div className='statusline'>

												</div>
												<div className='ps-0'>
													<Image src='assets/images/email.svg' className='statusicons mb-2' width={30} height={30} />
													<p>Email Verification</p>
													<Badge className='status verifiedbadge'>Verified</Badge>
												</div>
												<div>
													<Image src='assets/images/auth.svg' className='statusicons mb-2' width={30} height={30} />
													<p>2FA Authentication </p>
													<Link href='#' className='badge status'>Not Verified</Link>
												</div>
												<div className='pe-0'>
													<Image src='assets/images/kyc.svg' className='statusicons mb-2' width={30} height={30} />
													<p>Enable KYC </p>
													<Link href='#' className='badge status'>Not Verified</Link>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

					<div className='flexbox mt-3 agentflxbg'>
						<div className='panelcontentbox agentbox'>
							<div className='d-flex align-items-center agentflex'>
								<div className=''>
									<h5>Become Agent</h5>
									<p className="mb-1">Equip agents with tools for easy client management</p>
									<Button className='btn borderbtn mt-2' id="request_agentlink">Request for Agent</Button>
								</div>
								<div className="agentimgdiv text-end">
									<Image src="assets/images/agentimg.svg" className='agentimg' width={100} height={100} alt='agent' />
								</div>
							</div>
						</div>
						<div className='panelcontentbox agentbox'>
							<div className='d-flex align-items-center agentflex'>
								<div className=''>
									<h5>Become Promoter</h5>
									<p className="mb-1">Monetize your traffic with top offers</p>
									<Link href="/promoterdashboard" className='btn borderbtn mt-2' id="request_promoterlink">Get Started</Link>
								</div>
								<div className="agentimgdiv text-end">
									<Image src="assets/images/promoter.svg" className="agentimg" width={100} height={100} alt='agent' />
								</div>
							</div>
						</div>
						<div className='panelcontentbox agentbox'>
							<div className='d-flex align-items-center agentflex'>
								<div className=''>
									<h5>Become Advertiser</h5>
									<p className="mb-1">Get more sales & Conversions</p>
									<Link href="/advertiserdashboard" className='btn borderbtn mt-2' id="request_advertiserlink">Get Started</Link>
								</div>
								<div className="agentimgdiv text-end">
									<Image src="assets/images/advertiser.svg" className='agentimg' width={100} height={100} alt='agent' />
								</div>
							</div>
						</div>
					</div>

					<div className="flexbox puractflex mt-3">
						<div className="panelcontentbox purchasetable mobilepaneltablebox">
							<h2 className="heading-box pt-0 ps-2 border-0">Transaction History</h2>
							<div className="tabrightbox trxtabright">
								<Link href="/aml-verification" id="backbtn" className="alink">View More <FontAwesomeIcon className='ms-1' icon={faArrowRight} /></Link>
							</div>
							<SimpleBar className="table-responsive sitescroll">
								<Table className="sitetable table-responsive-stack" id="table1">
									<thead>
										<tr>
											<th>S.No</th>
											<th>Date & Time</th>
											<th>Coin</th>
											<th>Amount</th>
											<th>Type</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										{/* <tr className="nodata">
							<td colSpan={8}>
								<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
								No record found
							</td>
						</tr>  */}
										<tr>
											<td>1</td>
											<td>18/01/2023 10:05:05</td>
											<td><Image src="assets/images/color/btc.svg" className="coinlisticon" />BTC</td>
											<td>2.564</td>
											<td>Deposit</td>
											<td><Badge bg="success">Success</Badge></td>
										</tr>
										<tr>
											<td>2</td>
											<td>18/01/2023 10:05:05</td>
											<td><Image src="assets/images/color/eth.svg" className="coinlisticon" />ETH</td>
											<td>2.564</td>
											<td>Withdraw</td>
											<td><Badge bg="danger">Failed</Badge></td>
										</tr>
										<tr>
											<td>3</td>
											<td>18/01/2023 10:05:05</td>
											<td><Image src="assets/images/color/trx.svg" className="coinlisticon" />TRX</td>
											<td>2.564</td>
											<td>Withdraw</td>
											<td><Badge bg="danger">Failed</Badge></td>
										</tr>
										<tr>
											<td>4</td>
											<td>18/01/2023 10:05:05</td>
											<td><Image src="assets/images/color/bnb.svg" className="coinlisticon" />BNB</td>
											<td>2.564</td>
											<td>Deposit</td>
											<td><Badge bg="success">Success</Badge></td>
										</tr>
										<tr>
											<td>5</td>
											<td>18/01/2023 10:05:05</td>
											<td><Image src="assets/images/color/sol.svg" className="coinlisticon" />SOL</td>
											<td>2.564</td>
											<td>Deposit</td>
											<td><Badge bg="success">Success</Badge></td>
										</tr>
										<tr>
											<td>6</td>
											<td>18/01/2023 10:05:05</td>
											<td><Image src="assets/images/color/btc.svg" className="coinlisticon" />BTC</td>
											<td>2.564</td>
											<td>Deposit</td>
											<td><Badge bg="success">Success</Badge></td>
										</tr>
									</tbody>
								</Table>
							</SimpleBar>
							<ResponsiveTable tableId="table1" />
						</div>
						<div className="dashrightbox">

							<div className="panelcontentbox profilepagetab">
								<Tabs
									defaultActiveKey="login"
									id="justify-tab-example"
									className="mb-3"
									justify
								>
									<Tab eventKey="login" title="Login activity">
										<div className="">
											<SimpleBar className="table-responsive">
												<Table className="sitetable" id='table1'>
													<thead>
														<tr>
															<th>Date & Time</th>
															<th>Device</th>
															<th>Location</th>
															<th>IP</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Web</td>
															<td>Malappuram India</td>
															<td>42.109.143.229</td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Web</td>
															<td>Malappuram India</td>
															<td>42.109.143.229</td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Web</td>
															<td>Malappuram India</td>
															<td>42.109.143.229</td>
														</tr>

														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Web</td>
															<td>Malappuram India</td>
															<td>42.109.143.229</td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Web</td>
															<td>Malappuram India</td>
															<td>42.109.143.229</td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Web</td>
															<td>Malappuram India</td>
															<td>42.109.143.229</td>
														</tr>
													</tbody>
												</Table>
											</SimpleBar>
										</div>
									</Tab>
									<Tab eventKey="device" title="Device Management">
										<div className="">
											<SimpleBar className="table-responsive">
												<Table className="sitetable" id='table2'>
													<thead>
														<tr>
															<th>Date & Time</th>
															<th>Source</th>
															<th>Location</th>
															<th>IP</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Chrome (Linux)</td>
															<td>India</td>
															<td>42.109.143.229</td>
															<td><Link href="#" className="alink">Logout</Link></td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Chrome (Linux)</td>
															<td>India</td>
															<td>42.109.143.229</td>
															<td><Link href="#" className="alink">Logout</Link></td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Chrome (Linux)</td>
															<td>India</td>
															<td>42.109.143.229</td>
															<td><Link href="#" className="alink">Logout</Link></td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Chrome (Linux)</td>
															<td>India</td>
															<td>42.109.143.229</td>
															<td><Link href="#" className="alink">Logout</Link></td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Chrome (Linux)</td>
															<td>India</td>
															<td>42.109.143.229</td>
															<td><Link href="#" className="alink">Logout</Link></td>
														</tr>
														<tr>
															<td>2024-05-12 13:20:17</td>
															<td>Chrome (Linux)</td>
															<td>India</td>
															<td>42.109.143.229</td>
															<td><Link href="#" className="alink">Logout</Link></td>
														</tr>
													</tbody>
												</Table>
											</SimpleBar>
										</div>
									</Tab>
								</Tabs>
							</div>

						</div>
					</div>
				</Container>
			</article>
			<Userfooter />


		
		</div>
	);
}

export default Page;