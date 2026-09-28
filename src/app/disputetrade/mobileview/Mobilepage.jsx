"use client";

import { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const disputes = [
	{ id: 1, status: "Completed" },
	{ id: 2, status: "Completed" },
	{ id: 3, status: "Pending" },
	{ id: 4, status: "Cancel" },
	{ id: 5, status: "Completed" },
	{ id: 6, status: "Completed" },
];

export default function Mobilepage() {
	const [selectedDispute, setSelectedDispute] = useState(null);
	const [message, setMessage] = useState("");
	const [sentMessage, setSentMessage] = useState(false);

	const closeDrawer = () => {
		setSelectedDispute(null);
		setMessage("");
		setSentMessage(false);
	};

	const sendMessage = (event) => {
		event.preventDefault();
		if (!message.trim()) return;
		setSentMessage(true);
		setMessage("");
	};

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-dispute-page">
			<Userheader />
			<main className="mobile-utility-page__main">
				<div className="mobile-page-heading">
					<span>Trade workspace</span>
					<h1>Dispute trade</h1>
					<p>Review your trade disputes and continue the conversation with the counterparty.</p>
				</div>

				<section className="mobile-dispute-page__panel">
					<div className="mobile-section-head">
						<h2>Dispute requests</h2>
						<span>{disputes.length} requests</span>
					</div>
					<div className="mobile-dispute-page__cards">
						{disputes.map((dispute) => (
							<article className="mobile-dispute-card" key={dispute.id}>
								<div className="mobile-dispute-card__head">
									<div className="mobile-dispute-card__person">
										<img src="/assets/images/profile.svg" alt="" />
										<strong>John Meyer</strong>
									</div>
									<span className={`mobile-dispute-card__status is-${dispute.status.toLowerCase()}`}>
										{dispute.status}
									</span>
								</div>
								<div className="mobile-dispute-card__details">
									<div><span>Project</span><strong>Buying 0.481289 BTC</strong></div>
									<div><span>Time and date</span><strong>11-12-2022, 08:00</strong></div>
									<div><span>Unread</span><strong>20</strong></div>
								</div>
								<button type="button" className="mobile-dispute-card__chat" onClick={() => setSelectedDispute(dispute)}>
									<span aria-hidden="true">»</span> Chat
								</button>
							</article>
						))}
					</div>
				</section>
			</main>
			<MobileBottomNav />

			{selectedDispute && (
				<div className="mobile-action-sheet" onClick={closeDrawer}>
					<div className="mobile-dispute-chat-drawer" onClick={(event) => event.stopPropagation()}>
						<span className="mobile-action-sheet__handle" />
						<div className="mobile-dispute-chat-drawer__head">
							<div>
								<span>Dispute request</span>
								<h2>Chat with John</h2>
							</div>
							<button type="button" onClick={closeDrawer} aria-label="Close chat">×</button>
						</div>
						<div className="mobile-dispute-chat-drawer__messages">
							<p><strong>John</strong><span>Mar 18, 2024</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<p className="is-me"><strong>You</strong><span>Mar 18, 2024</span>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
							{sentMessage && <p className="is-me"><strong>You</strong><span>Just now</span>Thanks, I have shared the details.</p>}
						</div>
						<form className="mobile-dispute-chat-drawer__form" onSubmit={sendMessage}>
							<label htmlFor="dispute-message">Enter your message</label>
							<div>
								<input id="dispute-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write your message" />
								<button type="submit">Send</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
