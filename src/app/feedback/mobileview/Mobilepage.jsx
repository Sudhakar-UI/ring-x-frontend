"use client";

import { useState } from "react";
import Link from "next/link";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const feedbackTabs = ["Receive", "Trust Users", "Blocked Users"];
const users = [
	["BTC", "Bitcoin", "btc.svg"],
	["ETH", "Ethereum", "eth.svg"],
	["XRP", "Ripple", "xrp.svg"],
	["BNB", "Binance Coin", "bnb.svg"],
	["TRX", "Tron", "trx.svg"],
	["DOGE", "Dogecoin", "doge.svg"],
];

export default function Mobilepage() {
	const [activeTab, setActiveTab] = useState("Receive");

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-feedback-page">
			<Userheader />
			<main className="mobile-utility-page__main">
				<div className="mobile-page-heading">
					<span>Account workspace</span>
					<h1>Feedback</h1>
					<p>Manage users you trust and review feedback activity.</p>
				</div>

				<div className="mobile-feedback-page__tabs" role="tablist" aria-label="Feedback views">
					{feedbackTabs.map((tab) => (
						<button
							type="button"
							role="tab"
							aria-selected={activeTab === tab}
							className={activeTab === tab ? "is-active" : ""}
							key={tab}
							onClick={() => setActiveTab(tab)}
						>
							{tab}
						</button>
					))}
				</div>

				<section className="mobile-feedback-page__table-panel">
					{activeTab === "Receive" ? (
						<div className="mobile-feedback-page__empty" role="status">
							<img src="/assets/images/nodata.svg" alt="" />
							<strong>No record found</strong>
							<span>No users are available to receive feedback.</span>
						</div>
					) : (
						<div className="mobile-feedback-page__rows">
							{users.map(([symbol, name, icon], index) => (
								<article className="mobile-feedback-row" key={symbol}>
									<div className="mobile-feedback-row__head">
										<span className="mobile-feedback-row__number">{index + 1}</span>
										<div className="mobile-feedback-row__asset">
											<img src={`/assets/images/color/${icon}`} alt="" />
											<strong>{symbol}</strong>
											<span>{name}</span>
										</div>
										<Link href="/transfer" className="mobile-feedback-row__action">Transfer</Link>
									</div>
									<div className="mobile-feedback-row__details">
										<div><span>Balance</span><strong>0.293985</strong></div>
										<div><span>Free balance</span><strong>0.32569</strong></div>
										<div><span>Locked balance</span><strong>0.00254789</strong></div>
									</div>
								</article>
							))}
						</div>
					)}
				</section>
			</main>
			<MobileBottomNav />
		</div>
	);
}
