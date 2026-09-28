"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowDown, faArrowUp, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const assets = [
  ["BTC", "Bitcoin", "btc.svg", "$4,985", "+2.4%"],
  ["ETH", "Ethereum", "eth.svg", "$3,240", "+5.1%"],
  ["XRP", "Ripple", "xrp.svg", "$1,847", "+0.8%"],
  ["BNB", "Binance Coin", "bnb.svg", "$638", "+1.9%"],
  ["TRX", "Tron", "trx.svg", "$420", "+2.1%"],
  ["DOGE", "Dogecoin", "doge.svg", "$215", "+3.2%"],
];

const actions = [
  ["Deposit", "/deposit", faArrowDown, "wallet-mobile-action--green"],
  ["Withdraw", "/withdraw", faArrowUp, "wallet-mobile-action--red"],
  ["Transfer", "/transfer", faArrowRightArrowLeft, "wallet-mobile-action--blue"],
];

export default function Mobilepage() {
  const [activeTab, setActiveTab] = useState("Spot");
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <div className="pagecontent gridpagecontent innerpagegrid dashboardpage wallet-mobile-page">
      <Userheader />
      <artical className="gridparentbox">
      <div className="wallet-mobile-content">
        <section className="wallet-mobile-balance" aria-label="Wallet balance">
          <div className="wallet-mobile-balance__top"><span>Wallet balance</span><button type="button" onClick={() => setHideBalance(!hideBalance)} aria-label="Toggle balance"><FontAwesomeIcon icon={hideBalance ? faEye : faEye} /></button></div>
          <small>Total asset valuation</small>
          <strong>{hideBalance ? "$ ••••••" : "$24,318"}<em>{hideBalance ? "" : ".40"}</em></strong>
          <p>≈ 0.0000000 BTC</p>
          <div className="wallet-mobile-actions">{actions.map(([label, href, icon, style]) => <Link href={href} className={`wallet-mobile-action ${style}`} key={label}><span><FontAwesomeIcon icon={icon} /></span>{label}</Link>)}</div>
        </section>

        <div className="wallet-mobile-section-title"><h2>My assets</h2><Link href="/deposithistory">History</Link></div>
        <div className="wallet-mobile-tabs" role="tablist">
          {["Spot", "P2P", "RWA", "Prediction"].map((tab) => <button type="button" role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "is-active" : ""} onClick={() => setActiveTab(tab)} key={tab}>{tab}</button>)}
        </div>
        <div className="wallet-mobile-list">
          {assets.map(([symbol, name, icon, value, change]) => <article className="wallet-mobile-asset" key={symbol}>
            <Image src={`assets/images/color/${icon}`} width={34} height={34} alt="" />
            <div className="wallet-mobile-asset__name"><b>{symbol}</b><span>{name}</span></div>
            <div className="wallet-mobile-asset__value"><b>{value}</b><span>{change}</span></div>
          </article>)}
        </div>
      </div>
      </artical>
      <MobileBottomNav />
    </div>
  );
}
