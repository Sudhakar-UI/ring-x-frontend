"use client";

import { useState } from "react";
import Link from "next/link";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function Mobilepage() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-fiatdeposit-page">
			<Userheader />
			<main className="mobile-deposit-page__main">
				<div className="mobile-page-heading">
					<span>Wallet</span>
					<h1>Deposit Fiat</h1>
					<p>Add funds using a supported fiat payment method.</p>
				</div>
				<div className="mobile-deposit-page__top-action"><Link href="/withdraw" className="mobile-primary-button">Withdraw</Link></div>

				<section className="mobile-deposit-page__card mobile-fiatdeposit-page__card">
					<div className="mobile-deposit-page__tabs">
						<Link href="/deposit">Crypto</Link>
						<Link href="/fiatdeposit" className="is-active">Fiat</Link>
					</div>
					<form className="mobile-fiatdeposit-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
						<Field label="Payment Method" required>
							<select defaultValue="G-pay"><option>G-pay</option><option>Bank</option><option>PayPal</option></select>
						</Field>
						<Field label="Receive Deposit Amount In Fiat Currency" required>
							<select defaultValue="USD"><option>USD</option><option>EUR</option><option>INR</option></select>
						</Field>
						<Field label="Country" required>
							<select defaultValue="India"><option>India</option><option>USA</option><option>United Kingdom</option></select>
						</Field>
						<Field label="Deposit Amount" required>
							<input defaultValue="10" inputMode="decimal" />
						</Field>
						<Field label="Account Details">
							<input defaultValue="G-pay : 9025154031" readOnly />
						</Field>

						<div className="mobile-fiatdeposit-page__fees">
							<div><span>Deposit Fee (percentage)</span><strong>1.00 %</strong></div>
							<div><span>Minimum Deposit Limit</span><strong>1.00 USD</strong></div>
						</div>
						<button type="submit" className="mobile-primary-button">Submit</button>
					</form>
				</section>
			</main>
			<MobileBottomNav />

			{submitted && <div className="mobile-action-sheet" onClick={() => setSubmitted(false)}><div onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" /><h2>Deposit request submitted</h2><p>Your fiat deposit request has been received.</p><button type="button" className="mobile-primary-button" onClick={() => setSubmitted(false)}>Done</button></div></div>}
		</div>
	);
}

function Field({ label, required, children }) {
	return <label className="mobile-fiatdeposit-form__field"><span>{label}{required && <b> *</b>}</span>{children}</label>;
}
