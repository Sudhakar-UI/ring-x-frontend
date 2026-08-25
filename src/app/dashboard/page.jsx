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
	const [claimed, setClaimed] = useState(false);
	const [collecting, setCollecting] = useState(false);
	const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
	const endTime = stratTime + 243248; // use UNIX timestamp in seconds

	const remainingTime = endTime - stratTime;
	const days = Math.ceil(remainingTime / daySeconds);
	const daysDuration = days * daySeconds;

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage">
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				{/* <h2 className="h2">Dashboard</h2> */}
				{/* <div className="greeting-box">
					<p className="greeting-title">Good morning, Aman 👋</p>
					<p className="greeting-subtitle">
						Thu, May 14, 2026 · Markets open
					</p>
				</div> */}
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer dashboardpage">
					<div className="flexbox chartflexbox">
						<div>
							<div className="welcomebanner panelcontentbox h-100">
								<div className="table-content">
									{/* <div>
										<h5 className="pb-2">Seamlessly <span className='txt-yellow'>send and receieve</span><br /> Crypto Payment in-ease</h5>
										<Link href="/buytoken" id="depositbtn" className="btn sitebtn">Deposit</Link>
									</div> */}
									{/* <div className='p-3'>
										<Image src="assets/images/tokensale.svg" />
									</div> */}
								</div>
								<div className="panelcontentbox securepanelbox  h-100">
									<div className="home-wallet-x">
										<div className="balanceshowt totblance	">
											<h5>Total Portfolio</h5>
											<h4 className="h4 my-2">$ 0.00000 <span className="h5">= 0.0000</span></h4>
											<p className="green-text">
												▲ +$148 today
												<span class="tag politics ms-1"> +14 today</span>
											</p>
										</div>
										<div className=''>
											<Image src="assets/images/tokensale.svg" />
										</div>
									</div>
									<div className="balancedirectbox d-flex">
										<div className="panelcontentbox">
											<div className="contentbox contentbox-x">

												<div>
													<h5>Crypto</h5>
													<h4 className="h4  my-1"> <span className="h5">2500</span></h4>
													<small class="t-green">+20</small>
												</div>
											</div>
											{/* <Link href="/deposit" id='depositlink' className="contentbox">
												<div> <Image src="assets/images/deposit.svg" /> </div>
												<div>
													<h5>Deposit</h5>
												</div>
											</Link> */}
										</div>
										<div className="panelcontentbox">
											{/* <Link href="/withdraw" id='withdrawlink' className="contentbox">
												<div> <Image src="assets/images/withdraw.svg" /> </div>
												<div>
													<h5>Withdraw</h5>
												</div>
											</Link> */}
											<div className="contentbox contentbox-x">

												<div>
													<h5>Earn Balance</h5>
													<h4 className="h4 my-1"> <span className="h5">2500</span></h4>
													<small class="t-green">+84</small>
												</div>
											</div>
										</div>
										<div className="panelcontentbox">
											{/* <Link href="/agentslist" id='agentlink' className="contentbox">
												<div> <Image src="assets/images/transaction.svg" /> </div>
												<div>
													<h5>Agent List</h5>
												</div>
											</Link> */}
											<div className="contentbox contentbox-x">

												<div>
													<h5>RWA Returns</h5>
													<h4 className="h4 my-1"> <span className="h5">24</span></h4>
													<small class="t-green">+20</small>
												</div>
											</div>
										</div>
										<div className="panelcontentbox">
											{/* <Link href="/overview" id='p2ptradelink' className="contentbox">
												<div> <Image src="assets/images/ref.svg" /> </div>
												<div>
													<h5>P2P Trade</h5>
												</div>
											</Link> */}
											<div className="contentbox contentbox-x">

												<div>
													<h5>Prediction P&L</h5>
													<h4 className="h4 my-1"> <span className="h5">+25</span></h4>
													<small class="t-green">68% win</small>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="securpanelbox panelcontentbox">
								<div className="wallet-container">
									<div className="card wallet-card">
										{/* Header */}
										<div className="wallet-header">
											<p className="wallet-title ">Wallet Assets</p>

											<button className=" sitebtn btn-sm">View All →</button>
										</div>

										{/* Bitcoin */}
										<div className="wallet-item">
											<div className="coin-icon btc">₿</div>

											<div className="coin-info">
												<h6 className="coin-name">Bitcoin</h6>
												<h6 className="coin-balance">0.0842 BTC</h6>
											</div>

											<svg width="40" height="14" viewBox="0 0 40 14">
												<path
													d="M0,10 L7,7 L14,9 L20,4 L27,6 L34,2 L40,1"
													fill="none"
													stroke="#059669"
													strokeWidth="1.5"
												/>
											</svg>

											<div className="coin-price">
												<p className="price">$4,985</p>
												<p className="profit positive">+2.4%</p>
											</div>
										</div>

										{/* Ethereum */}
										<div className="wallet-item">
											<div className="coin-icon eth">Ξ</div>

											<div className="coin-info">
												<h6 className="coin-name">Ethereum</h6>
												<h6 className="coin-balance">1.24 ETH</h6>
											</div>

											<svg width="40" height="14" viewBox="0 0 40 14">
												<path
													d="M0,10 L7,7 L14,9 L20,4 L27,5 L34,2 L40,1"
													fill="none"
													stroke="#059669"
													strokeWidth="1.5"
												/>
											</svg>

											<div className="coin-price">
												<p className="price">$3,240</p>
												<p className="profit positive">+5.1%</p>
											</div>
										</div>

										{/* Tether */}
										<div className="wallet-item">
											<div className="coin-icon usdt">₮</div>

											<div className="coin-info">
												<h6 className="coin-name">Tether</h6>
												<h6 className="coin-balance">1,847 USDT</h6>
											</div>

											<svg width="40" height="14" viewBox="0 0 40 14">
												<path
													d="M0,7 L40,7"
													fill="none"
													stroke="#9CA3AF"
													strokeWidth="1.5"
												/>
											</svg>

											<div className="coin-price">
												<p className="price">$1,847</p>
												<p className="profit neutral">+0.0%</p>
											</div>
										</div>

										{/* RingX */}
										<div className="wallet-item featured">
											<div className="coin-icon rxt">RXT</div>

											<div className="coin-info">
												<h6 className="coin-name">RingX Token</h6>
												<h6 className="coin-balance green">12,500 RXT</h6>
											</div>

											<svg width="40" height="14" viewBox="0 0 40 14">
												<path
													d="M0,13 L7,9 L14,10 L20,5 L27,7 L34,3 L40,1"
													fill="none"
													stroke="#059669"
													strokeWidth="1.5"
												/>
											</svg>

											<div className="coin-price">
												<p className="price">$8,637</p>
												<p className="profit positive">+12.4% ↑</p>
											</div>
										</div>
									</div>

									{/* Quick Actions */}

								</div>
								{/* <div className="overviewbalancebox">
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
								</div> */}
							</div>
							<div className="quick-actions">
								<button className="action-btn blue">
									<div className="action-icon">
										<Image src="assets/images/das-deposit.svg" />
									</div>
									Deposit
								</button>
								<button className="action-btn yellow">
									<div className="action-icon">
										<Image src="assets/images/das-withdraw.svg" />
									</div>
									Withdraw
								</button>

								<button className="action-btn green">
									<div className="action-icon">

										<Image src="assets/images/das-transfer.svg" />

									</div>
									Transfer
								</button>

								{/* <button className="action-btn blue">
									<div className="action-icon">
										<Image src="assets/images/das-swap.svg" />

									</div>
									swap
								</button> */}


							</div>
							{/* <div className=" table-content mt-3 panelcontentbox">
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
							</div> */}
						</div>
					</div>
					<div className='flexbox mt-3'>
						<div className='panelcontentbox green-wrapper-bg'>
							<div className="monetize-wrapper-agent">
								<div className="left-strip"></div>
								<div className="bg-glow"></div>

								{/* Cards */}
								<div className="card-grid card-grid-col">
									{/* P2P */}
									<div className="earn-card">
										<div className="icon-box blue-bg">
											<Image className='earn-icons-img' src="assets/images/become-agent.svg" />
										</div>

										<div className='card-grid-start d-flex flex-column justify-content-between'>
											<h5 className="card-title">Become Agent</h5>
											<h5 className="earn-note my-1">
												Equip agents with tools for easy client management
											</h5>
											<Link href="#" className="h5 card-link">
												142 referrals →
											</Link>
										</div>
									</div>

									{/* Agent */}
									<div className="earn-card">
										<div className="icon-box green-bg">
											<Image className='earn-icons-img' src="assets/images/become-promoter.svg" />
										</div>

										<div className='card-grid-start'>
											<h5 className="card-title">
												Agent Program
											</h5>
											<h5 className="earn-note my-1">
												Onboard sub-agents
											</h5>
											<h5 className="card-link">
												+5% earnings →
											</h5>
										</div>
									</div>

									{/* Referral */}
									<div className="earn-card">
										<div className="icon-box green-bg">
											<Image className='earn-icons-img' src="assets/images/become-advertiser.svg" />
										</div>

										<div className='card-grid-start d-flex flex-column justify-content-between'>
											<h5 className="card-title">
												Become Advertiser
											</h5>
											<h5 className="earn-note my-1">
												Get more sales & Conversions
											</h5>
											<Link href="#" className="h5 card-link">
												142 referrals →
											</Link>
										</div>
									</div>


								</div>
							</div>
						</div>
					</div>
					<div className='flexbox mt-3'>
						<div className='panelcontentbox rxt-wrapper-bg'>
							<div className="rxt-wrapper">
								<div className="side-line"></div>
								<div className="bg-circle"></div>

								{/* Header */}
								<div className="rxt-header">
									<div className="rxt-logo">
										<Image src="assets/images/rxt-token.svg" />
									</div>

									<div className="rxt-info">
										<div className="rxt-status-row">
											<div className="status-dot">
												<div className="pulse"></div>
											</div>

											<span className="status-label">Free RXT Collection</span>

											<span className="status-badge">LIMITED DAILY</span>
										</div>

										<p className="rxt-title">
											Claim <span>50 RXT</span> free today — no deposit needed
										</p>
									</div>

									{/* Timer */}
									<div className="timer-group">
										<div className="timer-box">
											<p className="timer-number">02</p>
											<p className="timer-text">Days</p>
										</div>

										<p className="timer-separator">:</p>
										<div className="timer-box">
											<p className="timer-number">04</p>
											<p className="timer-text">HRS</p>
										</div>

										<p className="timer-separator">:</p>

										<div className="timer-box">
											<p className="timer-number">23</p>
											<p className="timer-text">MIN</p>
										</div>

										<p className="timer-separator">:</p>

										<div className="timer-box">
											<p className="timer-number">47</p>
											<p className="timer-text">SEC</p>
										</div>
									</div>

									<button
										className={`sitebtn btn-sm ${claimed ? "claimed" : ""}`}
										disabled={claimed}
										onClick={() => setClaimed(true)}
									>
										{claimed ? "Claimed ✓" : "Collect →"}
									</button>
								</div>

								{/* Content */}
								<div className="rxt-grid">
									{/* Left Card */}
									<div className="balance-card">
										<div className="balance-top">
											<div className="mini-logo">
										<Image src="assets/images/rxt-token.svg" />

											</div>

											<h6 className="balance-amount">
												12,500 <span>RXT</span>
											</h6>
										</div>

										<div className="divider"></div>

										<p className="section-heading">Today's Collection</p>

										<div className="collection-list">
											<div className="collection-item">
												<span>Direct Earning</span>
												<strong>150 RXT</strong>
											</div>

											<div className="collection-item">
												<span>Ref Sign-up</span>
												<strong>+1,200 RXT</strong>
											</div>

											<div className="collection-item">
												<span>Ref Deposit</span>
												<strong>+550 RXT</strong>
											</div>

											<div className="collection-item">
												<span>Ref Purchase</span>
												<strong>+500 RXT</strong>
											</div>
										</div>

										<button
											className={`sitebtn btn-sm w-100${collecting ? "active" : ""}`}
											onClick={() => setCollecting(true)}
										>
											{collecting
												? "✓ Collecting..."
												: "Start Collecting RXT →"}
										</button>
									</div>

									{/* Right Section */}
									<div>
										<div className="earn-header">
											<p>All ways to earn RXT</p>
										</div>

										{/* Referral */}
										<div className="label-row right">
											<div className="line"></div>
											<div className="green-dot"></div>
											<span>Referral Earning</span>
										</div>

										<div className="earn-grid">
											<div className="earn-card">
												<div className="earn-icon green-bg">
													<Image className='earn-icons-img' src="assets/images/cr-ref-signup.svg" />
												</div>
												<h5 className="earn-title">Ref Signup</h5>
												<h5 className="earn-value">+50 RXT</h5>
												<h5 className="earn-note">Per new user</h5>
											</div>

											<div className="earn-card">
												<div className="earn-icon blue-bg">
													<Image className='earn-icons-img' src="assets/images/cr-ref-kyc.svg" />

												</div>
												<h5 className="earn-title">Ref KYC</h5>
												<h5 className="earn-value">+100 RXT</h5>
												<h5 className="earn-note">When ref verifies</h5>
											</div>

											<div className="earn-card">
												<div className="earn-icon mint-bg">										<Image className='earn-icons-img' src="assets/images/cr-ref-deposit.svg" />
												</div>
												<h5 className="earn-title">Ref Deposit</h5>
												<h5 className="earn-value">1 RXT/$1</h5>
												<h5 className="earn-note">Per ref deposit</h5>
											</div>

											<div className="earn-card">
												<div className="earn-icon light-bg">										<Image className='earn-icons-img' src="assets/images/cr-ref-purchase.svg" />
												</div>
												<h5 className="earn-title">Ref Purchase</h5>
												<h5 className="earn-value">1 RXT/$1</h5>
												<h5 className="earn-note">Per ref purchase</h5>
											</div>
										</div>

										{/* Direct */}
										<div className="label-row left">
											<div className="blue-dot"></div>
											<span>Direct Earning</span>
											<div className="line"></div>
										</div>

										<div className="earn-grid mb-0">
											<div className="earn-card">
												<div className="earn-icon mint-bg">
													<Image className='earn-icons-img' src="assets/images/cr-sign-in.svg" />
												</div>
												<h5 className="earn-title">Sign-in</h5>
												<h5 className="earn-value">+30 RXT</h5>
												<h5 className="earn-note">Daily bonus</h5>
											</div>

											<div className="earn-card">
												<div className="earn-icon blue-bg">													<Image className='earn-icons-img' src="assets/images/cr-kyc-verify.svg" />
												</div>
												<h5 className="earn-title">KYC Verify</h5>
												<h5 className="earn-value">+100 RXT</h5>
												<h5 className="earn-note">One-time</h5>
											</div>

											<div className="earn-card">
												<div className="earn-icon purple-bg">													<Image className='earn-icons-img' src="assets/images/cr-purchase.svg" />
												</div>
												<h5 className="earn-title">Purchase</h5>
												<h5 className="earn-value">1 RXT/$1</h5>
												<h5 className="earn-note">Per USD spent</h5>
											</div>

											<div className="earn-card">
												<div className="earn-icon yellow-bg">													<Image className='earn-icons-img' src="assets/images/cr-deosit.svg" />
												</div>
												<h5 className="earn-title">Deposit</h5>
												<h5 className="earn-value">1 RXT/$1</h5>
												<h5 className="earn-note">Per USD deposited</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flexbox mt-3'>
						<div className='panelcontentbox green-wrapper-bg'>
							<div className="monetize-wrapper">
								<div className="left-strip"></div>
								<div className="bg-glow"></div>

								{/* Header */}
								<div className="monetize-header">
									<div className="header-icon">
										<svg
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#fff"
											strokeWidth="2"
										>
											<circle cx="9" cy="7" r="3" />
											<circle cx="17" cy="17" r="3" />
											<circle cx="5" cy="17" r="3" />
											<path d="M9 10c0 3 3 4 8 4M9 10c0 3-2 4-4 4" />
										</svg>
									</div>

									<div className="header-content">
										<div className="header-top">
											<div className="status-dot">
												<div className="pulse"></div>
											</div>

											<span className="label">Monetize</span>

											<span className="badge">
												4 More Ways to Earn
											</span>
										</div>

										<p className="title">
											Total commissions{" "}
											<span>$8,240.50</span>
										</p>
									</div>

									<button className="sitebtn btn-sm">
										Earn Now →
									</button>
								</div>

								{/* Cards */}
								<div className="card-grid card-grid-col">
									{/* P2P */}
									<div className="earn-card">
										<div className="icon-box blue-bg">
											<Image className='earn-icons-img' src="assets/images/mo-p2p-trade.svg" />
										</div>

										<div className='card-grid-start'>
											<h5 className="card-title">P2P Trade</h5>
											<h5 className="earn-note my-1">
												Buy & sell · 0% fee
											</h5>
											<h5 className="card-link">
												24 merchants →
											</h5>
										</div>
									</div>

									{/* Agent */}
									<div className="earn-card">
										<div className="icon-box green-bg">
											<Image className='earn-icons-img' src="assets/images/mo-agent-program.svg" />
										</div>

										<div className='card-grid-start'>
											<h5 className="card-title">
												Agent Program
											</h5>
											<h5 className="earn-note my-1">
												Onboard sub-agents
											</h5>
											<h5 className="card-link">
												+5% earnings →
											</h5>
										</div>
									</div>

									{/* Referral */}
									<div className="earn-card">
										<div className="icon-box green-bg">
											<Image className='earn-icons-img' src="assets/images/mo-refer-friend.svg" />
										</div>

										<div className='card-grid-start'>
											<h5 className="card-title">
												Refer Friends
											</h5>
											<h5 className="earn-note my-1">
												30% T1 · 10% T2 · 5% T3
											</h5>
											<h5 className="card-link">
												142 referrals →
											</h5>
										</div>
									</div>

									{/* Commission */}
									<div className="earn-card">
										<div className="icon-box mint-bg">
											<Image className='earn-icons-img' src="assets/images/mo-commissions.svg" />
										</div>

										<div className='card-grid-start'>
											<h5 className="card-title">
												Commissions
											</h5>
											<h5 className="earn-note my-1">
												CPA · RevShare · Hybrid
											</h5>
											<h5 className="card-link">
												84 available →
											</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flexbox mt-3'>
						<div className='panelcontentbox '>
							<div className="z-rwa">
								{/* Header */}
								<div className="rwa-header">
									<div className="rwa-title-wrap">
										<div className="rwa-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#374151"
												strokeWidth="2"
											>
												<path d="M3 21h18M5 21V10l7-4 7 4v11M9 21v-6h6v6" />
											</svg>
										</div>

										<span className="rwa-title">
											RWA Invest
										</span>
									</div>

									<button className="sitebtn btn-sm">
										Invest →
									</button>
								</div>

								{/* Stats */}
								<div className="stats-grid">
									<div className="stat-card">
										<p className="stat-label">Invested</p>
										<p className="stat-value">$8,200</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">Return</p>
										<p className="stat-value green">
											+$1,024
										</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">Avg ROI</p>
										<p className="stat-value">14.8%</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">Next pay</p>
										<p className="stat-value">8 days</p>
									</div>
								</div>

								{/* Investment Cards */}
								<div className="project-grid">
									{/* Solar */}
									<div className="project-card">
										<div className="project-icon yellow">
											<Image className='earn-icons-img' src="assets/images/rwa-solar-farm.svg" />
										</div>

										<div className="project-content">
											<p className="project-title">
												Solar Farm · Texas
											</p>

											<p className="project-sub">
												Energy · 12 months
											</p>

											<div className="progress">
												<div
													className="progress-fill green-fill"
													style={{ width: "78%" }}
												></div>
											</div>

											<p className="funded-text">
												78% funded
											</p>
										</div>

										<div className="roi-box">
											<p className="roi-value green">
												14%
											</p>
											<p className="roi-label">
												ROI/yr
											</p>
										</div>
									</div>

									{/* Real Estate */}
									<div className="project-card">
										<div className="project-icon gray">
											<Image className='earn-icons-img' src="assets/images/rwa-real-estate.svg" />
										</div>

										<div className="project-content">
											<p className="project-title">
												Real Estate · Dubai
											</p>

											<p className="project-sub">
												Property · 24 months
											</p>

											<div className="progress">
												<div
													className="progress-fill blue-fill"
													style={{ width: "42%" }}
												></div>
											</div>

											<p className="funded-text">
												42% funded
											</p>
										</div>

										<div className="roi-box">
											<p className="roi-value blue">
												18%
											</p>
											<p className="roi-label">
												ROI/yr
											</p>
										</div>
									</div>

									{/* AgriTech */}
									<div className="project-card">
										<div className="project-icon green-bg">
											<Image className='earn-icons-img' src="assets/images/rwa-agri-tech.svg" />
										</div>

										<div className="project-content">
											<p className="project-title">
												AgriTech · Punjab
											</p>

											<p className="project-sub">
												Agriculture · 18 months
											</p>

											<div className="progress">
												<div
													className="progress-fill green-fill"
													style={{ width: "61%" }}
												></div>
											</div>

											<p className="funded-text">
												61% funded
											</p>
										</div>

										<div className="roi-box">
											<p className="roi-value green">
												11%
											</p>
											<p className="roi-label">
												ROI/yr
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flexbox mt-3'>
						<div className='panelcontentbox z-pred-bg'>
							<div className="z-pred">
								{/* Header */}
								<div className="pred-header">
									<div className="pred-title-wrap">
										<div className="pred-icon">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#185FA5"
												strokeWidth="2"
											>
												<polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
											</svg>
										</div>

										<span className="pred-title">
											Prediction Markets
										</span>
									</div>

									<button className="sitebtn btn-sm">
										Trade →
									</button>
								</div>

								{/* Stats */}
								<div className="pred-stats">
									<div className="stat-card">
										<p className="stat-label">Active</p>
										<p className="stat-value">6</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">P&L</p>
										<p className="stat-value green">
											+$420
										</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">Win Rate</p>
										<p className="stat-value blue">
											68%
										</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">Markets</p>
										<p className="stat-value">
											142
										</p>
									</div>
								</div>

								{/* Events */}
								<div className="events-grid">
									{/* Event 1 */}
									<div className="event-card">
										<div className="event-top">
											<span className="tag featured">
												⚡ Featured
											</span>

											<span className="tag crypto">
												<Image className='badge-img' src="assets/images/crypto-new.svg" /> Crypto
											</span>

											<span className="event-time">
												⏱ 2h
											</span>
										</div>

										<p className="event-title">
											Will Bitcoin close above $95,000 <br /> today?
										</p>

										<div className="event-percent">
											<span className="yes">
												YES 64%
											</span>

											<span className="no">
												NO 36%
											</span>
										</div>

										<div className="progress-bar">
											<div
												className="progress-yes"
												style={{ width: "64%" }}
											></div>

											<div
												className="progress-no"
												style={{ width: "36%" }}
											></div>
										</div>

										<div className="event-buttons">
											<button className="yes-btn">
												YES · 64¢
											</button>

											<button className="no-btn">
												NO · 36¢
											</button>
										</div>
									</div>

									{/* Event 2 */}
									<div className="event-card">
										<div className="event-top">
											<span className="tag crypto">
												<Image className='badge-img' src="assets/images/sports.svg" /> Sports
											</span>

											<span className="event-time">
												⏱ 5h
											</span>
										</div>

										<p className="event-title">
											Will Lakers win tonight's  <br />game?
										</p>

										<div className="event-percent">
											<span className="yes">
												YES 52%
											</span>

											<span className="no">
												NO 48%
											</span>
										</div>

										<div className="progress-bar">
											<div
												className="progress-yes"
												style={{ width: "52%" }}
											></div>

											<div
												className="progress-no"
												style={{ width: "48%" }}
											></div>
										</div>

										<div className="event-buttons">
											<button className="yes-btn">
												YES · 52¢
											</button>

											<button className="no-btn">
												NO · 48¢
											</button>
										</div>
									</div>

									{/* Event 3 */}
									<div className="event-card">
										<div className="event-top">
											<span className="tag event">
												<Image className='badge-img' src="assets/images/events.svg" /> Events
											</span>

											<span className="event-time">
												⏱ 3d
											</span>
										</div>

										<p className="event-title">
											Will Fed cut rates this <br /> month?
										</p>

										<div className="event-percent">
											<span className="yes">
												YES 28%
											</span>

											<span className="no">
												NO 72%
											</span>
										</div>

										<div className="progress-bar">
											<div
												className="progress-yes"
												style={{ width: "28%" }}
											></div>

											<div
												className="progress-no"
												style={{ width: "72%" }}
											></div>
										</div>

										<div className="event-buttons">
											<button className="yes-btn">
												YES · 28¢
											</button>

											<button className="no-btn">
												NO · 72¢
											</button>
										</div>
									</div>

									{/* Event 4 */}
									<div className="event-card">
										<div className="event-top">
											<span className="tag politics">
												<Image className='badge-img' src="assets/images/politics.svg" /> Politics
											</span>

											<span className="event-time">
												⏱ 12d
											</span>
										</div>

										<p className="event-title">
											Will ETH reach $5,000 before <br /> June?
										</p>

										<div className="event-percent">
											<span className="yes">
												YES 39%
											</span>

											<span className="no">
												NO 61%
											</span>
										</div>

										<div className="progress-bar">
											<div
												className="progress-yes"
												style={{ width: "39%" }}
											></div>

											<div
												className="progress-no"
												style={{ width: "61%" }}
											></div>
										</div>

										<div className="event-buttons">
											<button className="yes-btn">
												YES · 39¢
											</button>

											<button className="no-btn">
												NO · 61¢
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flexbox mt-3'>
						<div className='panelcontentbox affiliate-hub-bg'>
							<div className="affiliate-hub">
								<div className="bg-circle top"></div>
								<div className="bg-circle bottom"></div>

								{/* Header */}
								<div className="hub-header">
									<div className="header-left">
										<div className="hub-icon">
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#059669"
												strokeWidth="2"
											>
												<circle cx="9" cy="7" r="3" />
												<circle cx="17" cy="17" r="3" />
												<circle cx="5" cy="17" r="3" />
												<path d="M9 10c0 3 3 4 8 4M9 10c0 3-2 4-4 4" />
											</svg>
										</div>

										<div>
											<p className="hub-title">
												Affiliate Hub
											</p>

											<p className="hub-subtitle">
												Your performance · campaigns · payouts
											</p>
										</div>

										<div className="tier-badge">
											<Image className='badge-img' src="assets/images/gold-tier.svg" />
											GOLD TIER
										</div>
									</div>

									<div className="header-actions">
										<button className="borderbtn  btn-sm">
											View Dashboard →
										</button>

										<button className="sitebtn btn-sm">
											Withdraw $84
										</button>
									</div>
								</div>

								{/* Stats */}
								<div className="stats-grid">
									<div className="stat-card">
										<p className="stat-label">
											TOTAL COMMISSION
										</p>
										<p className="stat-value">
											$5,240
										</p>
										<p className="green-text">
											▲ +$148 today
										</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">
											AVAILABLE
										</p>
										<p className="stat-value">
											$84
										</p>
										<p className="muted-text">
											Ready to withdraw
										</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">
											REFERRALS
										</p>
										<p className="stat-value">
											142
										</p>
										<p className="green-text">
											▲ +8 this week
										</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">
											CONVERSIONS
										</p>
										<p className="stat-value">
											89
										</p>
										<p className="gold-text mb-0">
											18.4% rate
										</p>
									</div>

									<div className="stat-card">
										<p className="stat-label">
											EPC
										</p>
										<p className="stat-value">
											/bin/sh.71.stats-grid
										</p>
										<p className="muted-text">
											4,820 clicks
										</p>
									</div>
								</div>

								{/* Main Content */}
								<div className="content-grid">
									{/* Commission Breakdown */}
									<div className="panel">
										<p className="panel-title">
											Commission Breakdown
										</p>

										<div className="mini-grid">
											<div className="mini-card">
												<p className="mini-label">
													CPA
												</p>
												<p className="mini-value">
													$2,620
												</p>
												<p className="green-light mb-0">
													62 deals
												</p>
											</div>

											<div className="mini-card">
												<p className="mini-label">
													RevShare
												</p>
												<p className="mini-value">
													$2,180
												</p>
												<p className="green-light mb-0">
													35%
												</p>
											</div>

											<div className="mini-card">
												<p className="mini-label">
													Hybrid
												</p>
												<p className="mini-value">
													$440
												</p>
												<p className="gold-text mb-0">
													8 deals
												</p>
											</div>
										</div>

										<div className="progress-list">
											<div className="progress-row">
												<span>T1 · 30%</span>

												<div className="progress-bar">
													<div
														className="fill blue-fill"
														style={{ width: "75%" }}
													></div>
												</div>

												<strong>$2.8K</strong>
											</div>

											<div className="progress-row">
												<span>T2 · 10%</span>

												<div className="progress-bar">
													<div
														className="fill green-fill"
														style={{ width: "48%" }}
													></div>
												</div>

												<strong>$980</strong>
											</div>

											<div className="progress-row">
												<span>T3 · 5%</span>

												<div className="progress-bar">
													<div
														className="fill gold-fill"
														style={{ width: "28%" }}
													></div>
												</div>

												<strong>$440</strong>
											</div>
										</div>

										<div className="tier-progress">
											<div className="tier-top">
												<span>Gold → Platinum</span>
												<strong>2,450 / 3,000 RXT</strong>
											</div>

											<div className="progress-bar">
												<div
													className="fill gold-fill"
													style={{ width: "82%" }}
												></div>
											</div>

											<p className="tier-note">
												550 RXT more to unlock Platinum · 25% fee discount
											</p>
										</div>
									</div>

									{/* Right Side */}
									<div className="right-column">
										{/* Referral */}
										<div className="panel">
											<p className="panel-title">
												Your Referral Link
											</p>

											<div className="ref-box">
												<p className="ref-link mb-0">
													ringx.app/r/AMAN2026
												</p>

												<button className="copy-btn">
													Copy
												</button>
											</div>

											<div className="share-grid">
												<button className="share-btn">
													Telegram
												</button>

												<button className="share-btn">
													YouTube
												</button>

												<button className="share-btn">
													Share
												</button>
											</div>
										</div>

										{/* Traffic */}
										<div className="panel">
											<p className="panel-title">
												Traffic Sources
											</p>

											<div className="traffic-list">
												<div className="traffic-row">
													<span>Telegram</span>

													<div className="progress-bar">
														<div
															className="fill tg-fill"
															style={{ width: "58%" }}
														></div>
													</div>

													<strong>58%</strong>
												</div>

												<div className="traffic-row">
													<span>YouTube</span>

													<div className="progress-bar">
														<div
															className="fill yt-fill"
															style={{ width: "24%" }}
														></div>
													</div>

													<strong>24%</strong>
												</div>

												<div className="traffic-row">
													<span>Instagram</span>

													<div className="progress-bar">
														<div
															className="fill ig-fill"
															style={{ width: "11%" }}
														></div>
													</div>

													<strong>11%</strong>
												</div>

												<div className="traffic-row">
													<span>Other</span>

													<div className="progress-bar">
														<div
															className="fill other-fill"
															style={{ width: "7%" }}
														></div>
													</div>

													<strong>7%</strong>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flexbox mt-3 last-table-x'>
						<div className='panelcontentbox '>
							<div className="dashboard-grid">
								{/* Activity Table */}
								<div className="card dashboard-card">
									<div className="card-header">
										<h5 className="card-title"><Image className='badge-img' src="assets/images/recent-activity.svg" /> Recent Activity</h5>
										<button className="view-btn">View all →</button>
									</div>

									<table className="activity-table">
										<thead>
											<tr>
												<th>Event</th>
												<th>Type</th>
												<th className="text-right">Amount</th>
												<th className="text-right">Time</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>
													<div className="activity-item">
														<div className="icon success">
															✓
														</div>

														<div>
															<p className="activity-title">Prediction Win</p>
															<p className="activity-subtitle">BTC above 0k</p>
														</div>
													</div>
												</td>

												<td>
													<span className="tag tg">Predict</span>
												</td>

												<td className="amount positive">+4.80</td>
												<td className="time">2m</td>
											</tr>
											<tr>
												<td>
													<div className="activity-item">
														<div className="icon earn">
															⬤
														</div>

														<div>
															<p className="activity-title">Referral Bonus</p>
															<p className="activity-subtitle">From Alex_2026</p>
														</div>
													</div>
												</td>

												<td>
													<span className="tag tg">Earn</span>
												</td>

												<td className="amount positive">+8.00</td>
												<td className="time">1h</td>
											</tr>
											<tr className="activity-row">
												<td className="table-cell">
													<div className="activity-item">
														<div className="activity-icon rwa-bg">
															<svg
																width="12"
																height="12"
																viewBox="0 0 24 24"
																fill="none"
																stroke="#059669"
																strokeWidth="2"
															>
																<path d="M3 21h18M5 21V10l7-4 7 4v11M9 21v-6h6v6" />
															</svg>
														</div>

														<div>
															<p className="activity-title">
																RWA Payout
															</p>

															<p className="activity-subtitle">
																Solar Farm TX
															</p>
														</div>
													</div>
												</td>

												<td className="table-cell">
													<span className="tag tgr">
														RWA
													</span>
												</td>

												<td className="table-cell amount positive">
													+8.00
												</td>

												<td className="table-cell time">
													4h
												</td>
											</tr>

											<tr className="activity-row">
												<td className="table-cell">
													<div className="activity-item">
														<div className="activity-icon wallet-bg">
															<svg
																width="12"
																height="12"
																viewBox="0 0 24 24"
																fill="none"
																stroke="#185FA5"
																strokeWidth="2"
															>
																<line x1="12" y1="5" x2="12" y2="19" />
																<line x1="5" y1="12" x2="19" y2="12" />
															</svg>
														</div>

														<div>
															<p className="activity-title">
																Deposit USDT
															</p>

															<p className="activity-subtitle">
																Bank transfer
															</p>
														</div>
													</div>
												</td>

												<td className="table-cell">
													<span className="tag tb">
														Wallet
													</span>
												</td>

												<td className="table-cell amount positive">
													+100
												</td>

												<td className="table-cell time">
													1d
												</td>
											</tr>

											<tr className="activity-row">
												<td className="table-cell">
													<div className="activity-item">
														<div className="activity-icon token-bg">
															RXT
														</div>

														<div>
															<p className="activity-title">
																Free RXT Collected
															</p>

															<p className="activity-subtitle">
																Daily bonus
															</p>
														</div>
													</div>
												</td>

												<td className="table-cell">
													<span className="tag tg">
														Token
													</span>
												</td>

												<td className="table-cell amount positive">
													+50 RXT
												</td>

												<td className="table-cell time">
													1d
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className='panelcontentbox Leaderboard-bg'>
							<div className="dashboard-grid">

								{/* Leaderboard */}
								<div className="card dashboard-card">
									<div className="leaderboard-header">
										<h5 className="card-title"><Image className='badge-img' src="assets/images/leaderboard.svg" /> Leaderboard</h5>
										<h5 className="leaderboard-subtitle">
											Top earners this month
										</h5>
									</div>

									<div className="leaderboard-item gold">
										<span className="rank gold-text">1</span>

										<div className="avatar gold-avatar">AC</div>

										<div className="leaderboard-info">
											<p className="leaderboard-name">Alex Chen</p>
											<p className="leaderboard-refs">142 refs</p>
										</div>

										<p className="leaderboard-score">2.4K</p>
									</div>
									<div className="leaderboard-row">
										<span className="leaderboard-rank silver-rank">
											2
										</span>

										<div className="leaderboard-avatar silver-avatar">
											SR
										</div>

										<div className="leaderboard-user">
											<p className="leaderboard-name">
												Sara R.
											</p>

											<p className="leaderboard-refs">
												98 refs
											</p>
										</div>

										<p className="leaderboard-points positive">
											1.8K
										</p>
									</div>
									<div className="leaderboard-row">
										<span className="leaderboard-rank bronze-rank">
											3
										</span>

										<div className="leaderboard-avatar bronze-avatar">
											MK
										</div>

										<div className="leaderboard-user">
											<p className="leaderboard-name">
												Mike K.
											</p>

											<p className="leaderboard-refs">
												76 refs
											</p>
										</div>

										<p className="leaderboard-points positive">
											1.2K
										</p>
									</div>
									<div className="leaderboard-item active-user">
										<span className="rank blue-text">7</span>

										<div className="avatar blue-avatar">AK</div>

										<div className="leaderboard-info">
											<p className="leaderboard-name active-name">You</p>
											<p className="leaderboard-refs active-name">
												142 refs
											</p>
										</div>

										<p className="leaderboard-score active-name">1.2K</p>
									</div>
									<div className="leaderboard-row">
										<span className="leaderboard-rank silver-rank">
											8
										</span>

										<div className="leaderboard-avatar silver-avatar">
											SR
										</div>

										<div className="leaderboard-user">
											<p className="leaderboard-name">
												Sara R.
											</p>

											<p className="leaderboard-refs">
												98 refs
											</p>
										</div>

										<p className="leaderboard-points positive">
											1K
										</p>
									</div>

								</div>
							</div>
						</div>
						<div className='panelcontentbox '>
							<div className="dashboard-grid">

								{/* Notifications */}
								<div className="card dashboard-card">
									<div className="card-header">
										<h5 className="card-title">
											<Image className='badge-img' src="assets/images/notification.svg" /> Notifications</h5>

										<button class="view-btn">View all →</button>
									</div>

									<div className="notification-item highlight">
										<div className="notification-icon success">
											⭐
										</div>

										<div>
											<p className="notification-title">
												You earned 50 RXT
											</p>

											<p className="notification-subtitle">
												Free daily · just now
											</p>
										</div>
									</div>

									<div className="notification-item">
										<div className="notification-icon wallet">
											📈
										</div>

										<div>
											<p className="notification-title">
												Prediction market closed
											</p>

											<p className="notification-subtitle">
												BTC above 0k — You WON · 3h
											</p>
										</div>
									</div>
									<div className="notification-item highlight-notification">
										<div className="notification-icon referral-bg">
											<svg
												width="13"
												height="13"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#059669"
												strokeWidth="2"
											>
												<circle cx="9" cy="7" r="3" />
												<circle cx="17" cy="17" r="3" />
												<circle cx="5" cy="17" r="3" />
												<path d="M9 10c0 3 3 4 8 4" />
											</svg>
										</div>

										<div>
											<p className="notification-title">
												Referral bonus received
											</p>

											<p className="notification-subtitle">
												+8 from Alex_2026 · 1h ago
											</p>
										</div>
									</div>

									<div className="notification-item">
										<div className="notification-icon market-bg">
											<svg
												width="13"
												height="13"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#185FA5"
												strokeWidth="2"
											>
												<polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
											</svg>
										</div>

										<div>
											<p className="notification-title medium">
												Prediction market closed
											</p>

											<p className="notification-subtitle">
												BTC above 0k — You WON · 3h
											</p>
										</div>
									</div>

									<div className="notification-item">
										<div className="notification-icon rwa-bg">
											<svg
												width="13"
												height="13"
												viewBox="0 0 24 24"
												fill="none"
												stroke="#374151"
												strokeWidth="2"
											>
												<path d="M3 21h18M5 21V10l7-4 7 4v11M9 21v-6h6v6" />
											</svg>
										</div>

										<div>
											<p className="notification-title medium">
												RWA payout processed
											</p>

											<p className="notification-subtitle">
												Solar Farm +8 · May 14
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className='flexbox mt-3 agentflxbg'>
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
					</div> */}

					{/* <div className="flexbox puractflex mt-3">
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
					</div> */}
				</Container>
			</article>
			<Userfooter />



		</div>
	);
}

export default Page;