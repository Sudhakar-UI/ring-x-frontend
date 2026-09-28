"use client";
import React from "react";
import Link from "next/link";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const agents = [{ name: "John Doe", date: "18 Feb 2024", currency: "USD", bank: "Forex Bank" }, { name: "John Doe", date: "18 Feb 2024", currency: "USD", bank: "Forex Bank" }, { name: "Sarah Miller", date: "12 Feb 2024", currency: "EUR", bank: "Global Bank" }];
export default function Mobilepage() { return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage agents-list-mobile-page"><Userheader /><main className="agents-list-mobile-page__main"><div className="mobile-page-heading"><span>Agent program</span><h1>Agents list</h1><p>Keep track of the people in your network.</p></div><div className="agents-list-mobile-page__summary"><strong>{agents.length}</strong><span>Connected agents</span><Link href="/agent-module">Grow your network</Link></div><section className="agents-list-mobile-page__list">{agents.map((agent) => <article key={`${agent.name}-${agent.date}-${agent.currency}`}><div className="agents-list-mobile-page__head"><div className="agent-avatar">{agent.name.split(" ").map((part) => part[0]).join("")}</div><div><strong>{agent.name}</strong><span>Joined {agent.date}</span></div><b>Active</b></div><dl><div><dt>Currency</dt><dd>{agent.currency}</dd></div><div><dt>Bank</dt><dd>{agent.bank}</dd></div></dl></article>)}</section></main><MobileBottomNav /></div>; }
