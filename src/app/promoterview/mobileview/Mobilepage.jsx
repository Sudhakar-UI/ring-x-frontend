"use client"; import Userheader from "../../components/Userheader"; import MobileBottomNav from "../../components/MobileBottomNav"; const rows = [["Campaign A", "700", "130", "40", "15%"], ["Campaign B", "700", "130", "40", "50%"], ["Campaign C", "700", "130", "40", "20%"], ["Campaign D", "700", "130", "40", "75%"]]; export default function MobilePage() {
  return (
    <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-promoter-view-page">
      <Userheader />
      <main className="mobile-route__main">
         <a href="/affiliatetracking" className="mobile-back-link">‹ Back to tracking</a>
        <div className="mobile-page-heading"><span>Promoter details</span><h1>Performance</h1></div>       
        <section className="mobile-section-card">{rows.map(([name, clicks, leads, conversions, rate]) =>
          <article className="mobile-performance-card" key={name}>
            <div className="mobile-section-head">
              <h2>{name}</h2><b>{rate}</b></div>
            <div className="mobile-performance-metrics"><span>Clicks<strong>{clicks}</strong></span><span>Leads<strong>{leads}</strong></span><span>Conversions<strong>{conversions}</strong></span></div>
            <div className="mobile-progress"><i style={{ width: rate }} /></div>
          </article>)}</section>
        <section className="mobile-section-card">
          <div className="mobile-section-head">
            <h2>Performance chart</h2><span>Today</span></div>
          <div className="mobile-chart"><i /><i /><i /><i /></div>
        </section>
      </main>
      <MobileBottomNav />
    </div>);
}