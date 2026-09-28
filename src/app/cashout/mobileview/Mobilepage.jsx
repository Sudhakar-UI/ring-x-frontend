"use client";

import { useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const requests = [
	["AGT12345", "$100", "18/01/2023 10:05:05"],
	["AGT12345", "$100", "18/01/2023 10:05:05"],
	["AGT12345", "$100", "18/01/2023 10:05:05"],
	["AGT12345", "$100", "18/01/2023 10:05:05"],
	["AGT12345", "$100", "18/01/2023 10:05:05"],
];

export default function Mobilepage() {
	const [sheet, setSheet] = useState(null);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-transaction-page mobile-transaction-page--cashout mobile-cashout-page">
			<Userheader />
			<main className="mobile-transaction-page__main">
				<div className="mobile-page-heading"><span>Agent wallet</span><h1>Cash Out</h1><p>Send a cash-out request and review recent withdrawals.</p></div>
				<section className="mobile-cashout-page__balance"><div><span>Agent Wallet Balance</span><strong>$ 0.00000</strong></div><Image src="assets/images/walletbalance.svg" width={88} height={68} alt="" /></section>

				<section className="mobile-cashout-page__methods">
					<h2>Select Method</h2>
					<div><Link href="/cashin"><Image src="assets/images/cash-in.svg" width={24} height={24} alt="" />Cash In</Link><Link href="/cashout" className="is-active"><Image src="assets/images/cash-out.svg" width={24} height={24} alt="" />Cash Out</Link><Link href="/paymentrequest"><Image src="assets/images/payment-request.svg" width={24} height={24} alt="" />Request Payment</Link></div>
				</section>

				<section className="mobile-cashout-page__form mobile-section-card">
					<h2>Cash Out</h2>
					<label>Select Agent ID<select><option>eg., AGT12345</option></select><small>Invalid Agent ID. Please try again</small></label>
					<label>Enter Amount<input placeholder="eg., $100" /><small>Invalid amount. Please enter a valid number</small></label>
					<label>Select Payment Method<select><option>Please select</option><option>Bank</option></select></label>
					<label>Select Coin<select><option>Please select</option><option>BTC</option></select></label>
					<button type="button" className="mobile-primary-button" onClick={() => setSheet("request")}>Send Request</button>
				</section>

				<section className="mobile-cashout-page__history mobile-section-card">
					<div className="mobile-section-head"><h2>Recent Cash Out History</h2><Link href="/agentpaymenthistory">View More</Link></div>
					<div className="mobile-cashout-page__rows">
						{requests.map(([agent, amount, date], index) => <article key={`${agent}-${index}`}><div><span>User ID</span><strong>{agent}</strong></div><div><span>Withdrawal Amount</span><strong>{amount}</strong></div><div><span>Date &amp; Time</span><strong>{date}</strong></div><div className="mobile-cashout-page__row-actions"><button type="button" className="mobile-primary-button" onClick={() => setSheet("accept")}>Accept Request</button><button type="button" className="mobile-outline-button" onClick={() => setSheet("decline")}>Decline Request</button></div></article>)}
					</div>
				</section>
			</main>
			<MobileBottomNav />

			{sheet && <div className="mobile-action-sheet" onClick={() => setSheet(null)}><div className="mobile-cashout-page__drawer" onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" /><Image src="assets/images/confirm.svg" width={28} height={28} alt="" /><h2>Please Confirm</h2>{sheet === "request" && <p>Confirm withdrawal of $100 to Agent AGT12345.</p>}{sheet === "accept" && <p>Accept this cash out request for $100?</p>}{sheet === "decline" && <p>Decline this cash out request for $100?</p>}<div className="mobile-transaction-page__drawer-actions"><button type="button" className="mobile-outline-button" onClick={() => setSheet(null)}>Cancel</button><button type="button" className="mobile-primary-button" onClick={() => setSheet(null)}>Yes</button></div></div></div>}
		</div>
	);
}
