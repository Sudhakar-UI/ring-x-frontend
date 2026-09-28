"use client";
import React, { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const tabs = ["Cash in", "Cash out", "Request payments"];
const records = [{ name: "John", date: "05:05:00, 18/05/2026", share: "80%", note: "Nice to trade with him." }, { name: "John", date: "04:42:00, 17/05/2026", share: "80%", note: "Payment request received." }];

export default function Mobilepage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [showFeedback, setShowFeedback] = useState(false);

  const closeFeedback = () => setShowFeedback(false);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    closeFeedback();
  };

  return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage agent-payment-mobile-page"><Userheader /><main className="agent-payment-mobile-page__main"><div className="mobile-page-heading"><span>Agent workspace</span><h1>Payment history</h1><p>Review activity and update payment requests.</p></div><div className="mobile-segmented-tabs">{tabs.map((tab) => <button type="button" className={activeTab === tab ? "is-active" : ""} onClick={() => setActiveTab(tab)} key={tab}>{tab}</button>)}</div><section className="agent-payment-mobile-page__list">{records.map((record, index) => <article key={`${record.date}-${index}`}><div className="agent-payment-mobile-page__top"><div><strong>{record.name}</strong><span>{record.date}</span></div><b>{record.share}</b></div><div className="agent-payment-mobile-page__details"><span>Payment type<strong>{activeTab}</strong></span><span>Note<strong>{record.note}</strong></span></div><button type="button" className="mobile-outline-button" onClick={() => setShowFeedback(true)}>Update request</button></article>)}</section></main><MobileBottomNav />{showFeedback && <div className="agent-payment-mobile-page__drawer-layer" role="presentation" onClick={closeFeedback}><section className="agent-payment-mobile-page__drawer" role="dialog" aria-modal="true" aria-labelledby="agent-feedback-title" onClick={(event) => event.stopPropagation()}><div className="agent-payment-mobile-page__drawer-handle" /><div className="agent-payment-mobile-page__drawer-head"><h2 id="agent-feedback-title">Update feedback</h2><button type="button" aria-label="Close feedback" onClick={closeFeedback}>×</button></div><form className="agent-payment-mobile-page__feedback-form" onSubmit={handleFeedbackSubmit}><label>Feedback Score (Out of 5)<select name="feedback_score" defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></label><label className="agent-payment-mobile-page__radio"><input type="radio" name="feedback_type" value="trustworthy" defaultChecked /> <span><strong>Trustworthy</strong><small>Give your trading partner trustworthy feedback to increase his reputation and mark him as a trusted user.</small></span></label><label className="agent-payment-mobile-page__radio"><input type="radio" name="feedback_type" value="distrust" /> <span><strong>Distrust and block</strong><small>Give your trading partner negative feedback that decreases his reputation and block his account, this prevents him from trading with you again.</small></span></label><label>Write your Feedback<textarea name="feedback" rows="4" /></label><button type="submit" className="mobile-primary-button">Send</button></form></section></div>}</div>;
}
