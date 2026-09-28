"use client";

import { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const tickets = [
	["EX6276648", "I am facing an issue with my withdrawal request. The transaction is still pending and has not been processed yet. Kindly check and update the status.", "May 11, 2026", "Info"],
	["EX6276649", "I tried to complete my KYC verification, but the document upload failed. Please help me resolve this issue.", "May 12, 2026", "Closed"],
	["EX6276650", "I am unable to log in to my account even after entering the correct credentials. Please assist me.", "May 11, 2026", "Closed"],
	["EX6276648", "I am unable to log in to my account even after entering the correct credentials.", "May 11, 2026", "Closed"],
];

function Conversation({ onAttach }) {
	return <div className="mobile-chat-page__conversation"><div className="mobile-chat-page__messages"><p><b>Support <small>May 10, 2026</small></b>Hello! Thank you for contacting support. Could you please share your account ID or transaction ID so I can check the issue?</p><p className="is-me"><b>User <small>May 10, 2026</small></b>My transaction ID is TX458921.</p><p><b>Support <small>May 10, 2026</small></b>Your withdrawal request is currently under review. It will be processed shortly. Kindly wait for confirmation.</p><p className="is-me"><b>User <small>May 10, 2026</small></b>Okay, thank you for the update.</p><p><b>Support <small>May 10, 2026</small></b>You are welcome! If you need further assistance, feel free to contact us anytime.</p></div><button type="button" className="mobile-outline-button mobile-chat-page__attach" onClick={onAttach}>Attach Image</button><label className="mobile-chat-page__message-field">Enter your message<div><input placeholder="Write your message" /><button type="button" aria-label="Send message">Send</button></div></label></div>;
}

export default function Mobilepage() {
	const [sheet, setSheet] = useState(null);
	const [selectedTicket, setSelectedTicket] = useState(null);

	return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-chat-page"><Userheader /><main className="mobile-utility-page__main"><div className="mobile-page-heading"><span>Support workspace</span><h1>Chat</h1><p>View support tickets and continue your conversations.</p></div><div className="mobile-chat-page__top-actions"><button type="button" className="mobile-primary-button" onClick={() => setSheet("create")}>+ Create Ticket</button></div><section className="mobile-chat-page__ticket-panel"><div className="mobile-section-head"><h2>Ticket</h2><span>{tickets.length} tickets</span></div><input className="mobile-chat-page__search" placeholder="Search tickets..." /><div className="mobile-chat-page__tickets">{tickets.map(([id, description, date, status], index) => <button type="button" key={`${id}-${index}`} className={`mobile-chat-page__ticket ${selectedTicket === index ? "is-active" : ""}`} onClick={() => setSelectedTicket(index)}><strong>Ticket ID : {id}</strong><p>{description}</p><div><span>{date}</span><b className={status === "Info" ? "is-info" : "is-closed"}>{status}</b></div></button>)}</div></section></main><MobileBottomNav />{selectedTicket !== null && <div className="mobile-action-sheet" onClick={() => setSelectedTicket(null)}><div className="mobile-chat-page__drawer" onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" /><div className="mobile-chat-page__drawer-head"><h2>Ticket ID : {tickets[selectedTicket][0]}</h2><button type="button" onClick={() => setSelectedTicket(null)} aria-label="Close ticket">Close</button></div><Conversation onAttach={() => setSheet("upload")} /></div></div>}{sheet && <div className="mobile-action-sheet" onClick={() => setSheet(null)}><div className="mobile-chat-page__drawer mobile-chat-page__form-drawer" onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" />{sheet === "create" ? <><h2>Create Ticket</h2><label>Title<input placeholder="Enter ticket title" /></label><label>Enter your message<textarea rows="4" placeholder="Describe your issue" /></label><button type="button" className="mobile-primary-button" onClick={() => setSheet(null)}>Submit</button></> : <><h2>Image Upload</h2><label className="mobile-chat-page__file-field">Choose image<input type="file" accept="image/*" /></label><button type="button" className="mobile-primary-button" onClick={() => setSheet(null)}>Submit</button></>}</div></div>}</div>;
}
