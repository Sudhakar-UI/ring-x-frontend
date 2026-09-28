"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const stats = [["Total earnings", "0"], ["Total clicks", "0"], ["Conversions", "0"], ["Active campaigns", "15"]];
const campaigns = ["Testing", "Test Affiliate", "Black Friday offer", "Black Friday offer Testing"];

export default function MobilePage() {
  return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-promoter-page"><Userheader /><main className="mobile-route__main"><div className="mobile-route__eyebrow">Affiliate pro</div><h1>Promoter dashboard</h1><p className="mobile-route__intro">Track your reach, conversions and earnings in one place.</p><section className="mobile-stat-grid">{stats.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section><section className="mobile-section-card"><div className="mobile-section-head"><h2>Campaigns</h2><a href="/availablecampaigns">View all</a></div><div className="mobile-list">{campaigns.map((campaign) => <a href="/promoterview" className="mobile-list-row" key={campaign}><span className="mobile-list-icon">↗</span><span><b>{campaign}</b><small>Business campaign</small></span><strong>›</strong></a>)}</div></section><section className="mobile-section-card mobile-highlight"><span>Quick links</span><h2>Keep growing your reach</h2><a href="/affiliateearnings" className="mobile-primary-button">View earnings</a></section></main><MobileBottomNav /></div>;
}
