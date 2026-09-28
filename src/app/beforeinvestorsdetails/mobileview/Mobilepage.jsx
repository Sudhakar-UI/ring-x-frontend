"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Image, Modal, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendarDays, faCircleCheck, faCoins, faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const stats = [
    ["Target", "$200K"],
    ["Funded", "60%"],
    ["Investors", "105"],
    ["Tokens left", "250"],
    ["Min. investment", "$256"],
    ["Estimated ROI", "5% APY"]
];

const currencies = [
    ["eth.svg", "ETH"],
    ["btc.svg", "BTC"],
    ["trx.svg", "TRX"],
    ["usdt.svg", "USDT"],
    ["usd.svg", "USD"],
    ["bch.svg", "BCH"]
];

const officialInfo = [
    ["Asset website", "ringx.com/rwa-villa"],
    ["Property location", "Dubai, UAE"],
    ["Asset category", "Luxury Real Estate"],
    ["Blockchain", "Polygon"],
    ["Launch date", "18 Apr 2025"]
];

const tokenInfo = [
    ["Token name", "MVILLA"],
    ["Token price", "$0.25"],
    ["Token standard", "ERC-20"],
    ["Total supply", "2,250,000"],
    ["Total raised", "$132,000"],
    ["Minimum purchase", "25 Tokens"],
    ["Rental yield", "5% APY"]
];

export default function Mobilepage() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.body.classList.add("investpagebg");
        return () => document.body.classList.remove("investpagebg");
    }, []);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid beforeinvestorsdetails beforeinvestorsdetails-mobile dashboardpage">
            <Userheader />
            <article className="gridparentbox">
                <div className="beforeinvestorsdetails-mobile__main">
                    <Link href="/beforeinvestors" className="beforeinvestorsdetails-mobile__back"><FontAwesomeIcon icon={faArrowLeft} /> Back to projects</Link>

                    <section className="beforeinvestorsdetails-mobile__hero">
                        <Image src="assets/images/project1.png" alt="Modern Luxury Villa" className="beforeinvestorsdetails-mobile__hero-image" />
                        <div className="beforeinvestorsdetails-mobile__hero-body">
                            <div className="beforeinvestorsdetails-mobile__eyebrow"><FontAwesomeIcon icon={faCircleCheck} /> Verified RWA project</div>
                            <h1>Modern Luxury Villa</h1>
                            <p className="beforeinvestorsdetails-mobile__location"><FontAwesomeIcon icon={faLocationDot} /> Dubai, UAE <span>·</span> Live funding</p>
                            <p className="beforeinvestorsdetails-mobile__intro">A tokenized luxury villa investment with transparent ownership, rental income potential, and secure blockchain records.</p>
                        </div>
                    </section>

                    <section className="beforeinvestorsdetails-mobile__stats" aria-label="Project summary">
                        {stats.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
                    </section>

                    <section className="beforeinvestorsdetails-mobile__section">
                        <div className="beforeinvestorsdetails-mobile__section-title"><h2>Available currencies</h2><span><FontAwesomeIcon icon={faCoins} /> 6 assets</span></div>
                        <div className="beforeinvestorsdetails-mobile__currencies">
                            {currencies.map(([icon, label]) => <span key={label}><Image src={`assets/images/color/${icon}`} alt="" />{label}</span>)}
                        </div>
                    </section>

                    <section className="beforeinvestorsdetails-mobile__section">
                        <div className="beforeinvestorsdetails-mobile__section-title"><h2>About the project</h2></div>
                        <p className="beforeinvestorsdetails-mobile__copy">The Modern Luxury Villa project enables global investors to participate in premium property ownership through blockchain technology. Each token represents fractional ownership of the underlying real-world asset.</p>
                        <div className="beforeinvestorsdetails-mobile__growth">
                            <div className="beforeinvestorsdetails-mobile__growth-head"><span>ROI growth projection</span><strong>5% APY</strong></div>
                            <div className="beforeinvestorsdetails-mobile__chart"><i /><b /><em /></div>
                            <div className="beforeinvestorsdetails-mobile__chart-labels"><span>Day 30</span><span>Day 180</span><span>Day 365</span></div>
                        </div>
                    </section>

                    <section className="beforeinvestorsdetails-mobile__section beforeinvestorsdetails-mobile__info-section">
                        <div className="beforeinvestorsdetails-mobile__section-title"><h2>Official information</h2><FontAwesomeIcon icon={faCalendarDays} /></div>
                        <dl>{officialInfo.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                    </section>

                    <section className="beforeinvestorsdetails-mobile__section beforeinvestorsdetails-mobile__info-section">
                        <div className="beforeinvestorsdetails-mobile__section-title"><h2>Token information</h2></div>
                        <dl>{tokenInfo.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                    </section>
                </div>

                <div className="beforeinvestorsdetails-mobile__sticky-action">
                    <div><small>Token price</small><strong>$0.25</strong></div>
                    <button type="button" onClick={() => setShowModal(true)}>Buy token <span>→</span></button>
                </div>
            </article>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered className="beforeinvestorsdetails-mobile__modal">
                <Modal.Header closeButton><Modal.Title>Buy RWA token</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Select currency</Form.Label>
                        <Form.Select className="mb-3"><option>USDT</option><option>BTC</option><option>ETH</option></Form.Select>
                        <Form.Label>Purchase amount</Form.Label>
                        <InputGroup className="mb-3"><Form.Control placeholder="Enter amount" /><InputGroup.Text>Tokens</InputGroup.Text></InputGroup>
                        <button type="button" className="sitebtn w-100" onClick={() => setShowModal(false)}>Confirm investment</button>
                    </Form>
                </Modal.Body>
            </Modal>
            <MobileBottomNav />
        </div>
    );
}
