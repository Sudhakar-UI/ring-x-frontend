"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowTrendUp, faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const categories = ["Trending", "Politics", "Crypto", "Economy", "Geopolitics", "Tech", "Climate"];
const markets = [
  ["Up or Down on ETH in next 4 hours?", "Crypto", "2h", "50%", "50%"],
  ["Up or Down on ETH in next 24 hours?", "Crypto", "6h", "55%", "45%"],
  ["Up or Down on XRP in next 24 hours?", "Crypto", "1d", "48%", "52%"],
  ["Will X win the Y election?", "Politics", "4d", "50%", "50%"],
  ["Will the Federal Reserve cut interest rates?", "Economy", "1w", "51%", "49%"],
  ["Event 5", "Tech", "2w", "50%", "50%"],
];

function MarketCard({ market }) {
  const [question, category, time, yes, no] = market;
  return (
    <article className="pre-mobile-market-card">
      <div className="pre-mobile-market-card__top"><span>{category}</span><small><FontAwesomeIcon icon={faClock} /> {time}</small></div>
      <h3>{question}</h3>
      <div className="pre-mobile-market-card__percent"><span>YES {yes}</span><span>NO {no}</span></div>
      <div className="pre-mobile-progress"><i style={{ width: yes }} /><i style={{ width: no }} /></div>
      <div className="pre-mobile-market-card__actions"><button>YES · 50¢</button><button>NO · 50¢</button></div>
    </article>
  );
}

export default function Mobilepage() {
  const [activeCategory, setActiveCategory] = useState("Trending");
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <div className="pagecontent gridpagecontent innerpagegrid dashboardpage pre-mobile-page">
      <Userheader />
       <artical className="gridparentbox">
      <div className="pre-mobile-content">
        <section className="pre-mobile-balance" aria-label="Prediction overview balance">
          <div className="pre-mobile-balance__heading"><h1>Prediction Overview</h1><Image src="assets/images/prediction-market-image.svg" alt="" /></div>
          <div className="pre-mobile-balance__cards">
            <div><span>Total portfolio <button type="button" onClick={() => setHideBalance(!hideBalance)} aria-label="Toggle portfolio visibility"><FontAwesomeIcon icon={faEye} /></button></span><strong>{hideBalance ? "••••••" : "$0.00000"}</strong></div>
            <div><span>Total cash <FontAwesomeIcon icon={faEye} /></span><strong>{hideBalance ? "••••••" : "$0.00000"}</strong></div>
          </div>
        </section>

        <div className="pre-mobile-categories" role="tablist">
          {categories.map((category) => <button type="button" className={activeCategory === category ? "is-active" : ""} onClick={() => setActiveCategory(category)} key={category}>{category}</button>)}
        </div>

        <section className="pre-mobile-featured">
          <div className="pre-mobile-featured__title"><span className="pre-mobile-coin">Ξ</span><div><small>{activeCategory} · Ethereum</small><h2>Up or Down on ETH in next 4 hours?</h2></div></div>
          <div className="pre-mobile-vote"><button>Yes - (50%)</button><button>No - (50%)</button></div>
          <div className="pre-mobile-news"><p><FontAwesomeIcon icon={faArrowTrendUp} /> 2 hours ago</p><span>Up or Down on ETH in next 4 hours?</span><p><FontAwesomeIcon icon={faArrowTrendUp} /> 6 hours ago</p><span>Up or Down on ETH in next 24 hours?</span></div>
        </section>

        <div className="pre-mobile-section-title"><h2>Breaking news</h2><Link href="#">View all</Link></div>
        <div className="pre-mobile-news-list">
          {["Up or Down on ETH in next 4 hours?", "Up or Down on ETH in next 24 hours?", "Up or Down on XRP in next 24 hours?"].map((news) => <div key={news}><span>{news}</span><b>50%</b></div>)}
        </div>

        <div className="pre-mobile-section-title"><h2>Hot topics</h2><Link href="#">View all</Link></div>
        <div className="pre-mobile-hot-topics">{["Politics", "Crypto", "Economy", "Sports"].map((topic) => <Link href="#" key={topic}><span>{topic}</span><b><FontAwesomeIcon icon={faFire} /> $4M today</b></Link>)}</div>

        <div className="pre-mobile-section-title"><h2>Open markets</h2><Link href="#">See all</Link></div>
        <div className="pre-mobile-market-grid">{markets.map((market) => <MarketCard market={market} key={market[0]} />)}</div>
      </div>
      </artical>
      <MobileBottomNav />
    </div>
  );
}
