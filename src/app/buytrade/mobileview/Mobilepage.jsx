"use client";

import { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function Mobilepage() {
	const [drawer, setDrawer] = useState(null);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-transaction-page mobile-transaction-page--buytrade mobile-trade-page mobile-buy-trade-page">
			<Userheader />
			<main className="mobile-transaction-page__main">
				<div className="mobile-page-heading">
					<span>P2P trade</span>
					<h1>Buy Trade</h1>
					<p>Complete your payment and confirm the trade.</p>
				</div>

				<section className="mobile-trade-summary mobile-section-card">
					<div className="mobile-section-head">
						<h2>Order #537468956986488</h2>
						<b>Active</b>
					</div>
					<p className="mobile-card-copy">Created 11 Jan 2024, 08:05:11</p>
					<div className="mobile-trade-metrics">
						<span>Amount<strong>0.0025 INR</strong></span>
						<span>Price<strong>10.35636 INR</strong></span>
						<span>Quantity<strong>25.3995 BTC</strong></span>
					</div>
				</section>

				<section className="mobile-section-card">
                    <div className="mobile-section-head">
                       <h2>Payment method</h2>
                    </div>
					
					<p className="mobile-card-copy">Please transfer to the following account using your own payment method.</p>
					<div className="mobile-bank-box">
						<b>Method 1</b>
						<span>Account XXXXXXXXXXX</span>
						<span>76457975634686</span>
					</div>
					<div className="mobile-trade-status">
						<strong>Payment mode <span>00:13:10</span></strong>
						<p>Please make a payment within 15 minutes, otherwise the order will be cancelled.</p>
					</div>
					<div className="mobile-trade-actions">
						<button className="mobile-primary-button" type="button" onClick={() => setDrawer("transferred")}>Transferred</button>
						<button className="mobile-outline-button" type="button" onClick={() => setDrawer("cancel")}>Cancel</button>
					</div>
				</section>

				<section className="mobile-section-card">
					<div className="mobile-section-head">
						<h2>To be released</h2>
						<span>00:13:10</span>
					</div>
					<p className="mobile-card-copy">Expected to receive assets in 15 minutes.</p>
					<div className="mobile-trade-actions">
						<button className="mobile-outline-button" type="button" onClick={() => setDrawer("cancel")}>Cancel order</button>
						<button className="mobile-primary-button" type="button" onClick={() => setDrawer("appeal")}>Appeal</button>
					</div>
				</section>

				<section className="mobile-section-card mobile-buy-trade-page__messages">
					<div className="mobile-section-head">
						<h2>Messages</h2>
						<span>John</span>
					</div>
					<div className="mobile-chat">
						<p><b>John</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className="is-me"><b>John</b>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
						<p><b>John</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<p className="mobile-buy-trade-page__contact">Contact Details: BTC 0.00256987 at 0.025639745 BTC</p>
					<label className="mobile-upload-box">
						Upload document
						<input type="file" />
					</label>
					<label className="mobile-message-field">
						Enter your message
						<textarea rows="3" />
					</label>
					<button className="mobile-primary-button" type="button">Send message</button>
				</section>
			</main>
			<MobileBottomNav />

			{drawer && (
				<div className="mobile-action-sheet" onClick={() => setDrawer(null)}>
					<div className="mobile-buy-trade-page__drawer" onClick={(event) => event.stopPropagation()}>
						<span className="mobile-action-sheet__handle" />
						{drawer === "transferred" && (
							<>
								<h2>Confirm payment</h2>
								<p className="mobile-card-copy">Please confirm that payment has been made to the seller.</p>
								<div className="mobile-bank-box">
									<b>Method 1</b>
									<span>Account XXXXXXXXXXX</span>
									<span>76457975634686</span>
								</div>
								<label>Upload proof of payment<input type="file" /></label>
								<div className="mobile-transaction-page__drawer-actions">
									<button className="mobile-outline-button" type="button" onClick={() => setDrawer(null)}>Cancel</button>
									<button className="mobile-primary-button" type="button" onClick={() => setDrawer(null)}>Confirm</button>
								</div>
							</>
						)}

						{drawer === "cancel" && (
							<>
								<h2>Cancel this trade?</h2>
								<p className="mobile-card-copy">Are you sure you want to cancel this trade?</p>
								<div className="mobile-transaction-page__drawer-actions">
									<button className="mobile-outline-button" type="button" onClick={() => setDrawer(null)}>No</button>
									<button className="mobile-primary-button" type="button" onClick={() => setDrawer(null)}>Yes, cancel</button>
								</div>
							</>
						)}

						{drawer === "appeal" && (
							<>
								<h2>Appeal trade</h2>
								<p className="mobile-card-copy">Upload proof of payment and explain the issue so both sides can verify the trade.</p>
								<label>Reason for appeal<select><option>Please select</option><option>Payment issue</option><option>Seller did not respond</option></select></label>
								<label>Description<textarea rows="3" placeholder="Describe the issue" /></label>
								<label>Upload document<input type="file" /></label>
								<div className="mobile-transaction-page__drawer-actions">
									<button className="mobile-outline-button" type="button" onClick={() => setDrawer(null)}>Cancel</button>
									<button className="mobile-primary-button" type="button" onClick={() => setDrawer(null)}>Submit appeal</button>
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
