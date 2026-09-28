"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Tooltip, OverlayTrigger, Tabs, Tab, Form, Row, Col, Button, InputGroup, Modal } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../../components/ResponsiveTable';
import MobileBottomNav from '../../components/MobileBottomNav';
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

const Mobilepage = () => {
	const [claimed, setClaimed] = useState(false);
	const [collecting, setCollecting] = useState(false);
	const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
	const endTime = stratTime + 243248; // use UNIX timestamp in seconds

	const remainingTime = endTime - stratTime;
	const days = Math.ceil(remainingTime / daySeconds);
	const daysDuration = days * daySeconds;

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobiledashboardpage">
			<Userheader />
	
			<article className="gridparentbox">
				<Container className="sitecontainer dashboardpage">
						<div className="mob-hero">
				<section className="mob-balance" aria-label="Wallet balance">
					<div className="mob-balance__top">
						<small>Total balance</small>
						<button className="mob-balance__eye" type="button" aria-label="Hide balance">
							<FontAwesomeIcon icon={faEye} />
						</button>
					</div>
					<div className="mob-balance__amt">$24,318<span>.40</span></div>
					<div className="mob-balance__chg">▲ $412.06&nbsp;&nbsp;·&nbsp;&nbsp;1.72% today</div>
					<div className="mob-balance__quick">
						<Link href="/deposit"><span className="mob-balance__q"><Image className="mob-balance__q-icon" src="assets/images/mbdeposit.svg" alt="" /></span><span>Deposit</span></Link>
						<Link href="/withdraw"><span className="mob-balance__q"><Image className="mob-balance__q-icon" src="assets/images/mbwithdraw.svg" alt="" /></span><span>Withdraw</span></Link>
						<Link href="/transfer"><span className="mob-balance__q"><Image src="assets/images/das-transfer.svg" alt="" /></span><span>Transfer</span></Link>
						<Link href="/overview"><span className="mob-balance__q"><Image src="assets/images/das-swap.svg" alt="" /></span><span>P2P</span></Link>
					</div>
				</section>

				<div className="mob-sec-h"><h2>Partner programs</h2></div>
				<div className="mob-partners">
					<Link href="/agentslist" className="mob-pcard">
						<span className="mob-pcard__ico"><Image src="assets/images/become-agent.svg" alt="" /></span>
						<b>Agent</b><span className="mob-pcard__earn">$1,240.50</span><span className="mob-pcard__sub">18 clients</span>
					</Link>
					<Link href="/affiliateearnings" className="mob-pcard">
						<span className="mob-pcard__ico"><Image src="assets/images/become-promoter.svg" alt="" /></span>
						<b>Affiliate</b><span className="mob-pcard__earn">$386.10</span><span className="mob-pcard__sub">42 referrals</span>
					</Link>
				</div>

				<div className="mob-sec-h"><h2>Open predictions</h2><Link href="/buytrade">See all</Link></div>
				<div className="mob-plist">
					<article className="mob-pred">
						<div className="mob-pred__top"><div className="mob-pred__t"><b>BTC above $120k by Dec 31</b><span><strong className="mob-pred__side mob-pred__side--yes">YES</strong> · 140 shares</span></div><div className="mob-pred__pnl mob-pred__pnl--up">+$86.20<small>avg&nbsp; 52¢</small></div></div>
						<div className="mob-pred__odds"><b>64%</b><span className="mob-pred__bar"><i style={{ width: '64%' }} /></span><span>36%</span></div>
					</article>
					<article className="mob-pred">
						<div className="mob-pred__top"><div className="mob-pred__t"><b>Fed cuts rates in October</b><span><strong className="mob-pred__side" style={{ color: '#e5484d', background: '#fde8e8' }}>NO</strong> · 60 shares</span></div><div className="mob-pred__pnl" style={{ color: '#e5484d' }}>-$12.40<small>avg&nbsp; 41¢</small></div></div>
						<div className="mob-pred__odds"><b>59%</b><span className="mob-pred__bar"><i style={{ width: '59%' }} /></span><span>41%</span></div>
					</article>
				</div>
			</div>
				</Container>
			</article>
			<Userfooter />
			<MobileBottomNav />
		</div>
	);
}

export default Mobilepage;
