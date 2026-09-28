"use client";

import { useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function Mobilepage() {
	const [drawer, setDrawer] = useState(null);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-deposit-page">
			<Userheader />
			<main className="mobile-deposit-page__main">
				<div className="mobile-page-heading"><span>Wallet</span><h1>Deposit Crypto</h1><p>Choose a network and send crypto to your deposit address.</p></div>
				<div className="mobile-deposit-page__top-action"><Link href="/withdraw" className="mobile-primary-button">Withdraw</Link></div>

				<section className="mobile-deposit-page__steps"><div className="is-active"><b>1</b><span>Waiting for payment</span></div><i /><div><b>2</b><span>Processing payment</span></div><i /><div><b>3</b><span>Success!</span></div></section>

				<section className="mobile-deposit-page__card mobile-deposit-page__deposit-card">
					<div className="mobile-deposit-page__tabs"><Link href="/deposit" className="is-active">Crypto</Link><Link href="/fiatdeposit">Fiat</Link></div>
					<div className="mobile-deposit-page__step-field"><label>Select Crypto<select><option>USDT</option><option>ETH</option><option>BNB</option><option>TRX</option><option>SOL</option></select></label></div>
					<div className="mobile-deposit-page__step-field"><label>Select Network<select><option>Mainnet</option><option>BTC</option></select></label></div>
					<div className="mobile-deposit-page__step-field mobile-deposit-page__address-field"><div><label>Wallet Address</label><div className="mobile-deposit-page__address"><span>0x687c6b8f4561e6a0c3c063183a353e3c6d3e52</span><button type="button" aria-label="Copy wallet address">Copy</button><button type="button" onClick={() => setDrawer("qr")} aria-label="Show QR code">QR</button></div><div className="mobile-deposit-page__fees"><div><span>Deposit Fee</span><strong>0.00000000 ETH</strong></div><div><span>Deposit Fee Type</span><strong>Percentage</strong></div><div><span>Minimum Deposit Limit</span><strong>1.00000000 ETH</strong></div></div><p>Note: Deposit may take from a few minutes to over 30 minutes.</p></div></div>
				</section>
				<section className="mobile-deposit-page__card mobile-deposit-page__history"><h2>Recent Deposit History</h2><div className="mobile-deposit-page__empty"><Image src="assets/images/nodata.svg" width={48} height={48} alt="" /><strong>No record found</strong></div></section>
			</main>
			<MobileBottomNav />

			{drawer === "qr" && <div className="mobile-action-sheet" onClick={() => setDrawer(null)}><div className="mobile-deposit-page__qr-drawer" onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" /><button type="button" className="mobile-deposit-page__close" onClick={() => setDrawer(null)} aria-label="Close QR code">x</button><h2>Deposit Crypto via QR Code</h2><p>Use your wallet to scan the QR code and transfer crypto to your account.</p><Image src="assets/images/qrcode.png" width={220} height={220} alt="Deposit wallet QR code" /><button type="button" className="mobile-primary-button">Download</button></div></div>}
		</div>
	);
}
