"use client";
import React, { useState ,useEffect} from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Homeheader from "../../components/Homeheader";
import MobileBottomNav from "../../components/MobileBottomNav";
const modules = [["Monetize & Earn", "Affiliate engine", "Build recurring commission from referrals."], ["P2P Trading", "Fast exchange", "Buy and sell with verified merchants."], ["Prediction Markets", "YES / NO markets", "Trade outcomes with simple choices."], ["RWA Investment", "Real asset access", "Explore tokenised real-world projects."], ["Agent Program", "Network growth", "Grow a network and earn passive rewards."], ["RXT Token", "Platform token", "Collect, stake, and use ecosystem rewards."]];
export default function Mobilepage() 
{ const [active, setActive] = useState(0); 
     useEffect(() => {
        document.body.classList.remove('userpanelpage');
      })
    return <div className="platform-mobile-page pagecontent gridpagecontent innerpagegrid dashboardpage ">
        <Homeheader />
        <main className="platform-mobile-page__main">
            <section className="platform-mobile-page__hero"><span>Platform details</span><h1>Six modules. One connected flow.</h1><p>Explore the ways RingX connects earning, trading, investing, and rewards.</p><Link href="/signup">Get started</Link><Image src="assets/images/header-bg-plat.png" alt="Platform overview" /></section><div className="platform-mobile-page__tabs">{modules.map(([title], index) => <button type="button" className={active === index ? "is-active" : ""} onClick={() => setActive(index)} key={title}>{title}</button>)}</div><section className="platform-mobile-page__module"><span>{modules[active][1]}</span><h2>{modules[active][0]}</h2><p>{modules[active][2]}</p><div><strong>Simple</strong><strong>Connected</strong><strong>Trackable</strong></div></section></main><MobileBottomNav /></div>; }
