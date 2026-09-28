"use client";
import { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const words = ["Semantic", "Professed", "Mortified", "Corrode", "Evacuee", "Alone", "Eagle", "Fiscally", "Drippy", "Legwarmer", "Elude", "Ensure"];

export default function MobilePage() {
  const [accepted, setAccepted] = useState(false);
  const copy = () => navigator.clipboard?.writeText(words.join(" "));
  return <div className=" pagecontent gridpagecontent innerpagegrid dashboardpage  mobile-recovery-page"><Userheader /><main className="mobile-route__main">
    <div className="mobile-page-heading"><span>Security</span><h1>Backup phrase</h1>
      <p className="mobile-route__intro">Store these words safely. They are the only way to recover your account on a new device.</p>
    </div>

    <section className="mobile-phrase-card"><div className="mobile-section-head"><h2>Your recovery phrase</h2><button type="button" onClick={copy} className="mobile-text-button">Copy all</button></div><div className="mobile-phrase-grid">{words.map((word, index) => <span key={word}><small>{index + 1}</small>{word}</span>)}</div></section><label className="mobile-check-row"><input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} /> I have stored my recovery phrase safely</label><button className="mobile-primary-button" type="button" disabled={!accepted}>Confirm and continue</button></main><MobileBottomNav /></div>;
}
