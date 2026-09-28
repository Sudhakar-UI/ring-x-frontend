"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function MobilePage() {
  return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage  mobile-withdraw-page"><Userheader /><main className="mobile-route__main">
    <a href="/advertiserdashboard" className="mobile-back-link">‹ Back to dashboard</a>
      <div className="mobile-page-heading"><span>Wallet</span><h1>Request withdraw</h1></div>       
    <section className="mobile-form-card"><div className="mobile-balance-strip"><span>Available balance</span><strong>2,15263 BTC</strong></div><label>Withdrawal amount<input inputMode="decimal" placeholder="Enter amount" /></label><label>Payment method<select defaultValue="Bank"><option>Bank</option><option>USDT</option></select></label><button className="mobile-primary-button" type="button">Submit request</button></section><section className="mobile-section-card"><div className="mobile-section-head"><h2>Recent withdrawals</h2><a href="/requestwithdrawhistory">View all</a></div><div className="mobile-list">{[1, 2, 3].map((item) => <div className="mobile-list-row" key={item}><span className="mobile-list-icon mobile-list-icon--green">✓</span><span><b>$500.00</b><small>Bank transfer · 18/01/2024</small></span><em>Completed</em></div>)}</div></section></main><MobileBottomNav /></div>;
}
