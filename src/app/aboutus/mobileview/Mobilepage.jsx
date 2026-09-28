"use client";
import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function Mobilepage() {
  useEffect(() => { document.body.classList.add("innerpagebg"); return () => document.body.classList.remove("innerpagebg"); }, []);
  return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage aboutus-mobile-page">
    <Userheader />
    <main className="aboutus-mobile-page__main">
      <section className="aboutus-mobile-page__hero"><span>About NexaHive</span><h1>Building a clearer way to own and grow digital assets.</h1><p>We connect real-world opportunities with secure blockchain ownership and simple tools for everyday investors.</p></section>
      <section className="aboutus-mobile-page__story"><div className="aboutus-mobile-page__icon"><Image src="assets/images/ringx-logo.svg" alt="NexaHive" /></div><h2>Transparent by design</h2><p>Our platform brings tokenized projects, wallet tools, and partner programs into one calm, accessible experience. Every workflow is designed to make important information easy to understand before you take action.</p></section>
      <div className="aboutus-mobile-page__values"><article><strong>01</strong><h3>Access</h3><p>Explore opportunities without unnecessary complexity.</p></article><article><strong>02</strong><h3>Trust</h3><p>See clear project information and activity details.</p></article><article><strong>03</strong><h3>Ownership</h3><p>Manage your digital participation in one place.</p></article></div>
    </main><MobileBottomNav />
  </div>;
}
