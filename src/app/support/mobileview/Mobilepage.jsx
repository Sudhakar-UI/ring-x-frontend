"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";
export default function MobilePage() {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-support-page">
            <Userheader />
            <main className="mobile-route__main">
                <div className="mobile-route__eyebrow">Help center</div>
                <h1>Support</h1>
                <p className="mobile-route__intro">Find answers or send a message to our support team.</p>
                <section className="mobile-support-hero mobile-section-card"><span>Need a hand?</span>
                    <h2>We are here to help.</h2>
                    <button className="mobile-primary-button" type="button">Start a conversation</button>
                </section>
                <section className="mobile-section-card">
                    <div className="mobile-section-head">
                        <h2>My requests</h2><span>2 open</span></div>
                    <div className="mobile-list">{["Withdrawal question", "Account verification"].map((item) => <a href="/chat" className="mobile-list-row" key={item}><span className="mobile-list-icon">?</span><span><b>{item}</b><small>Updated today · Awaiting reply</small></span><strong>›</strong></a>)}</div>
                </section>
            </main>
            <MobileBottomNav />
        </div>
    );
}