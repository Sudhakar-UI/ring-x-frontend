"use client"; import { useState } from "react"; import Userheader from "../../components/Userheader"; import MobileBottomNav from "../../components/MobileBottomNav"; export default function MobilePage() { const [status, setStatus] = useState("Pending"); return (
<div className="pagecontent gridpagecontent innerpagegrid dashboardpage  mobile-withdraw-history-page">
	<Userheader />
	<main className="gridparentbox">
    <a href="/requestwithdraw" className="mobile-back-link">‹ Back to withdraw</a>
	    <div className="mobile-page-heading"><span>Wallet activity</span><h1>Withdraw history</h1></div>
		<section className="mobile-filter-card">
			    <div className="mobile-filter-card__dates">
				<label>From
					<input type="date" />
				</label>
				<label>To
					<input type="date" />
				</label>
			</div>
			<label>Status
				<select value={status} onChange={(event)=> setStatus(event.target.value)}>
					<option>Pending</option>
					<option>Completed</option>
				</select>
			</label>
			<button type="button" className="mobile-primary-button">Apply filters</button>
		</section>
		    <section className="mobile-list mobile-history-list" aria-label="Withdrawal requests">{[1, 2, 3, 4].map((item) =>
			<article className="mobile-history-card" key={item}>
				<div className="mobile-section-head"><strong>$500.00</strong><b>Completed</b></div>
				    <p>Bank transfer</p>
				    <div className="mobile-history-card__dates">
					    <div><span>Request date</span><strong>18/01/2024</strong></div>
					    <div><span>Processed</span><strong>18/01/2024</strong></div>
				    </div>
			    </article>)}</section>
	</main>
	<MobileBottomNav />
</div> ); }