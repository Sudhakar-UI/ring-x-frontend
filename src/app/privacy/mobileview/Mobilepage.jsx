"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function MobilePage() {
  return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-legal-page mobile-privacy-page"><Userheader /><main className="mobile-utility-page__main"><div className="mobile-page-heading"><span>Account workspace</span><h1>Privacy Policy</h1><p>Learn how we collect, use, and protect your information on ringx.</p></div><section className="mobile-legal-page__card"><LegalSection title="Information we collect">We may collect account, transaction, and device information when you use our services.</LegalSection><LegalSection title="How we use information">We use this information to provide, maintain, and improve the platform and to support your account access.</LegalSection><LegalSection title="Keeping your information secure">We work to keep your information secure and handle it responsibly while you use ringx.</LegalSection><LegalSection title="Your responsibilities">Use the platform responsibly and contact support if you have questions about your data or account access.</LegalSection><LegalSection title="Policy updates">We may update this policy when our services or legal requirements change.</LegalSection></section></main><MobileBottomNav /></div>;
}

function LegalSection({ title, children }) {
  return <article><h2>{title}</h2><p>{children}</p></article>;
}
