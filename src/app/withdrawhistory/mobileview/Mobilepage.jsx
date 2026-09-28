"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";
export default function MobilePage() {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-withdraw-history-page">
            <Userheader />
            <main className="mobile-route__main">
                <a className="mobile-back-link" href="/withdraw">‹ Back to withdraw</a>
                <div className="mobile-page-heading">
                <div className="mobile-route__eyebrow">Wallet activity</div>
                <h1>Withdrawal history</h1>
                </div>
                <div class="mobile-page-heading"><span>Wallet activity</span><h1>Withdraw history</h1></div>
                <section className="mobile-filter-card">
                    <label>Status
                        <select defaultValue="All statuses">
                            <option>All statuses</option>
                            <option>Completed</option>
                            <option>Pending</option>
                        </select>
                    </label>
                    <button className="mobile-primary-button" type="button">Apply filter</button>
                </section>
                <section className="mobile-list">{["Completed", "Completed", "Pending"].map((status, index) =>
                    <article className="mobile-history-card" key={`${status}-${index}`}>
                        <div className="mobile-section-head"><strong>0.125 BTC</strong><b>{status}</b></div>
                        <p>Bitcoin withdrawal</p><span>Requested 18/01/2024 · Network fee 0.0001 BTC</span></article>)}</section>
            </main>
            <MobileBottomNav />
        </div>);
}