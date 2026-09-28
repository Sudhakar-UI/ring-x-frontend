"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";
const messages = [["John Meyer", "Buying 0.481289 BTC", "Completed", "20 unread"], ["John Meyer", "Buying 0.481289 BTC", "Completed", "8 unread"], ["Aman Khatri", "Selling 0.125 BTC", "Pending", "3 unread"]]; export default function MobilePage() {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-message-page">
            <Userheader />
            <main className="mobile-route__main">
                <div className="mobile-route__eyebrow">P2P inbox</div>
                <h1>Trade messages</h1>
                <p className="mobile-route__intro">Keep every trade conversation in one place.</p>
                <section className="mobile-list">{messages.map(([name, project, status, unread]) =>
                    <article className="mobile-message-card" key={`${name}-${project}-${status}`}>
                        <div className="mobile-section-head"><strong>{name}</strong><b>{status}</b></div>
                        <p>{project}</p>
                        <div><span>{unread}</span><a href="/buytrade">Open message ›</a></div>
                    </article>)}</section>
            </main>
            <MobileBottomNav />
        </div>);
}