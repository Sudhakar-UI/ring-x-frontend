"use client";
import React from "react";
import Link from "next/link";
import Userheader from "./Userheader";
import MobileBottomNav from "./MobileBottomNav";
const metrics = [["Buy trades", "20", "/buytrade"], ["Sell trades", "10", "/selltrade"], ["Completed", "30", "/adshistory"], ["Cancelled", "10", "/adshistory"], ["Pending", "20", "/adshistory"], ["Open", "10", "/adshistory"]];
export default function MobileP2pOverview() { return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-p2p-overview"><Userheader /><main className="mobile-p2p-overview__main"><div className="mobile-page-heading"><span>P2P workspace</span><h1>Overview</h1><p>See your trading activity at a glance.</p></div><section className="mobile-p2p-overview__metrics">{metrics.map(([label, value, href]) => <Link href={href} key={label}><strong>{value}</strong><span>{label}</span></Link>)}</section><section className="mobile-p2p-overview__feedback"><div className="mobile-section-heading"><h2>Recent feedback</h2><Link href="/feedback">View all</Link></div>{["John", "William"].map((name) => <article key={name}><div className="mobile-chat-avatar">{name[0]}</div><div><strong>{name}</strong><span>Completed trade · 80% feedback</span><p>Nice to trade with him.</p></div></article>)}</section></main><MobileBottomNav /></div>; }
