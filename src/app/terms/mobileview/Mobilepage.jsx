"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function MobilePage() {
	return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-legal-page mobile-terms-page"><Userheader /><main className="mobile-utility-page__main"><div className="mobile-page-heading"><span>Account workspace</span><h1>Terms of Service</h1><p>Review the rules for using ringx and its services.</p></div><section className="mobile-legal-page__card"><LegalSection title="Using ringx">Use ringx lawfully and keep your login details secure. You are responsible for activity made through your account.</LegalSection><LegalSection title="Trading and risk">Digital assets and peer-to-peer transactions carry risk. Review every order before confirming it.</LegalSection><LegalSection title="Account safety">We may limit access when activity appears unsafe or violates these terms. Contact support when you need help.</LegalSection></section></main><MobileBottomNav /></div>;
}

function LegalSection({ title, children }) {
	return <article><h2>{title}</h2><p>{children}</p></article>;
}
