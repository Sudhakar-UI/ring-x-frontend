"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";
export default function MobilePage() {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-transfer-page">
            <Userheader />
            <main className="mobile-route__main">
                <div className="mobile-page-heading">
                    <div className="mobile-route__eyebrow">Wallet</div>
                <h1>Transfer</h1>
                <p className="mobile-route__intro">Move assets between your ringx wallets quickly and securely.</p>
                </div>              
                
                <section className="mobile-form-card">
                    <div className="mobile-transfer-balance"><span>Available balance</span><strong>0.32569 BTC</strong></div>
                    <label>From
                        <select defaultValue="Spot wallet">
                            <option>Spot wallet</option>
                            <option>P2P wallet</option>
                        </select>
                    </label>
                    <label>To
                        <select defaultValue="P2P wallet">
                            <option>P2P wallet</option>
                            <option>RWA wallet</option>
                        </select>
                    </label>
                    <label>Asset
                        <select defaultValue="BTC">
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>USDT</option>
                        </select>
                    </label>
                    <label>Amount
                        <input inputMode="decimal" placeholder="0.00" />
                    </label>
                    <button className="mobile-primary-button" type="button">Review transfer</button>
                </section>
            </main>
            <MobileBottomNav />
        </div>
    );
}