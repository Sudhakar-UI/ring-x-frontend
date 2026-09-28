"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const categories = ["Trending", "Politics", "Crypto", "Economy", "Geopolitics", "Tech", "Climate"];

export default function Mobilepage() {
  const [activeCategory, setActiveCategory] = useState("Crypto");
  const [side, setSide] = useState("Buy");
  const [choice, setChoice] = useState("Yes");
  const [activeTab, setActiveTab] = useState("Rules");

  return (
    <div className="pagecontent gridpagecontent innerpagegrid dashboardpage profile-preview-mobile-page">
      <Userheader />
      <article className="gridparentbox">
      <div className="profile-preview-mobile-content">
        <section className="profile-preview-mobile-balance">
          <div className="profile-preview-mobile-balance__title"><Link href="/before-pre-home" aria-label="Back"><FontAwesomeIcon icon={faArrowLeft} /></Link><h1>Prediction Event</h1></div>
          <div className="profile-preview-mobile-balance__cards">
            <div><span>Total portfolio <FontAwesomeIcon icon={faEye} /></span><strong>••••••</strong></div>
            <div><span>Total cash <FontAwesomeIcon icon={faEye} /></span><strong>••••••</strong></div>
          </div>
        </section>

        <div className="profile-preview-mobile-categories">
          {categories.map((category) => <button type="button" className={activeCategory === category ? "is-active" : ""} onClick={() => setActiveCategory(category)} key={category}>{category}</button>)}
        </div>

        <section className="profile-preview-mobile-market">
          <div className="profile-preview-mobile-market__heading"><span className="profile-preview-mobile-coin">Ξ</span><div><small>{activeCategory} · Crypto</small><h2>Up or Down on ETH in next 4 hours?</h2></div></div>
          <div className="profile-preview-mobile-chart"><div className="profile-preview-mobile-chart__line" /><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span><small>12PM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1PM</small></div>
          <div className="profile-preview-mobile-time"><span>✦ NOW&nbsp; | &nbsp;$0.00 vol.</span><span>1H&nbsp;&nbsp;6H&nbsp;&nbsp;1D&nbsp;&nbsp;1W&nbsp;&nbsp;1M&nbsp;&nbsp;ALL</span></div>
        </section>

        <section className="profile-preview-mobile-trade">
          <div className="profile-preview-mobile-trade__top"><div><button className={side === "Buy" ? "is-active" : ""} onClick={() => setSide("Buy")}>Buy</button><button className={side === "Sell" ? "is-active" : ""} onClick={() => setSide("Sell")}>Sell</button></div><span>Limit <FontAwesomeIcon icon={faChevronDown} /></span></div>
          <div className="profile-preview-mobile-choice"><button className={choice === "Yes" ? "is-active" : ""} onClick={() => setChoice("Yes")}>Yes 53.0¢</button><button className={choice === "No" ? "is-active" : ""} onClick={() => setChoice("No")}>No 53.0¢</button></div>
          <label>Limit Price<div><button>-</button><input value="53.0" readOnly /><button>+</button></div></label>
          <label>Shares<input value="0" readOnly /></label>
          <div className="profile-preview-mobile-steps"><button>+10</button><button>+50</button><button>+100</button></div>
          <div className="profile-preview-mobile-total"><span>Total</span><b>$0.00</b><span>To Win</span><b className="positive">$0.00</b></div>
          <button className="profile-preview-mobile-trade__submit">Trade</button>
          <small>By trading, you agree to the <Link href="#">Terms And Conditions.</Link></small>
        </section>

        <section className="profile-preview-mobile-orderbook"><h2>Order Book</h2><div className="profile-preview-mobile-orderbook__head"><b>Trades Yes</b><b>Price</b><b>Shares</b><b>Total</b></div><div className="profile-preview-mobile-orderbook__row"><span>Last: 50.0¢</span><b>53.0¢</b><span>1.00</span><span>$0.53</span></div><div className="profile-preview-mobile-orderbook__row is-green"><span>Spread: 6.0¢</span><b>47.0¢</b><span>1.00</span><span>$0.47</span></div></section>

        <section className="profile-preview-mobile-rules"><nav>{["Rules", "Open Orders", "Active Positions", "Activity"].map((tab) => <button type="button" className={activeTab === tab ? "is-active" : ""} onClick={() => setActiveTab(tab)} key={tab}>{tab}</button>)}</nav><p>{activeTab === "Rules" ? "If the price of ETH is above 2672.77 after 4 hours, Yes wins. If it is below or equal, No wins. Results are based on the price at the market close." : `${activeTab} will appear here.`}</p></section>
      </div>
      </article>
      <MobileBottomNav />
    </div>
  );
}
