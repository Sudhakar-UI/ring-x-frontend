"use client";
import { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const tabs = { "Cash in": ["Deposit amount", "$100", "Approved"], "Cash out": ["Withdrawal amount", "$100", "Needs review"], "Payment": ["Requested payment", "$100", "Approved"] };

export default function MobilePage() {
  const [tab, setTab] = useState("Cash in");
  return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-review-page">
    <Userheader /><main className="mobile-route__main">
      <div className="mobile-page-heading"><span>Agent workspace</span><h1>Review commission</h1></div>
      <div className="mobile-segmented-tabs">{Object.keys(tabs).map((item) => <button key={item} type="button" className={tab === item ? "is-active" : ""} onClick={() => setTab(item)}>{item}</button>)}</div><section className="mobile-list">{[1, 2, 3, 4].map((item) => <article className="mobile-review-card" key={item}><div className="mobile-section-head"><span>AGT12345</span><b className={tab === "Cash out" ? "is-warning" : ""}>{tabs[tab][2]}</b></div><strong>{tabs[tab][1]}</strong><p>{tabs[tab][0]}</p><small>18/01/2023 · 10:05:05</small>{tab === "Cash out" && <div className="mobile-review-actions"><button type="button" className="mobile-primary-button">Accept</button><button type="button" className="mobile-outline-button">Decline</button></div>}</article>)}</section></main><MobileBottomNav /></div>;
}
