"use client";
import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const steps = [
  ["01", "Become an Agent", "Register and get verified. No deposit required."],
  ["02", "Recruit Sub-Agents", "Grow your network with trusted partners."],
  ["03", "Sub-Agents Earn", "Their referrals and campaigns create shared volume."],
  ["04", "You Earn 5%", "Collect commission automatically on every payout."],
];

export default function Mobilepage() {
  return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage agent-mobile-page">
    <Userheader />
    <main className="agent-mobile-page__main">
      <section className="agent-mobile-page__hero"><span className="agent-mobile-page__eyebrow">Agent program</span><h1>Build your network. Earn from every connection.</h1><p>Recruit sub-agents and receive 5% of the commissions they generate.</p><div className="agent-mobile-page__actions"><Link href="/signup">Become an agent</Link><a href="#agent-flow">How it works</a></div><Image src="assets/images/header-imag.png" alt="Agent network" /></section>
      <section className="agent-mobile-page__stats"><div><strong>5,000+</strong><span>Active agents</span></div><div><strong>$2.4M</strong><span>Paid commissions</span></div><div><strong>5%</strong><span>Passive share</span></div></section>
      <section id="agent-flow" className="agent-mobile-page__section"><div className="agent-mobile-page__section-head"><span>Agent flow</span><h2>Four steps to recurring income</h2></div><div className="agent-mobile-page__steps">{steps.map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
      <section className="agent-mobile-page__income"><span>Network advantage</span><h2>Your network becomes your income.</h2><p>Track agents, conversions, and commission from one clear dashboard.</p><Link href="/agentslist">View my agents</Link></section>
    </main><MobileBottomNav />
  </div>;
}
