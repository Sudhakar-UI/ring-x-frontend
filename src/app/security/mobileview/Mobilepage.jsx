"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";
 const items = [["Two-factor authentication", "Google Authenticator", "Enabled", "/auth"],
  ["Email verification", "Send codes to your email", "Enable", "#"], 
  ["KYC verification", "Review your identity status", "View", "/kyc"],
  ["Backup phrase", "Recover your account safely", "View", "/recoverykey"]];
    export default function MobilePage() {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-security-page">
            <Userheader />
            <main className="mobile-route__main">
                <div className="mobile-page-heading"><span>Account protection</span><h1>Security settings</h1></div>
                <p className="mobile-route__intro">Protect your account with verification methods and recovery tools.</p>
                <section className="mobile-section-card">
                    <div className="mobile-list">{items.map(([title, text, action, href]) => <a className="mobile-list-row" href={href} key={title}><span className="mobile-list-icon">✓</span><span><b>{title}</b><small>{text}</small></span><em>{action}</em></a>)}</div>
                </section>
                <section className="mobile-highlight mobile-section-card"><span>Security tip</span>
                    <h2>Never share your recovery phrase.</h2>
                    <p>ringx support will never ask for your phrase or password.</p>
                </section>
            </main>
            <MobileBottomNav />
        </div>
    );
}