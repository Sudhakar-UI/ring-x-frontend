"use client";

import { useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const availableBalance = 1250;
const feeRate = 0.01;

export default function MobilePage() {
  const [method, setMethod] = useState("Bank transfer");
  const [currency, setCurrency] = useState("USD");
  const [country, setCountry] = useState("India");
  const [amount, setAmount] = useState("");
  const [showReview, setShowReview] = useState(false);

  const amountNumber = Number.parseFloat(amount) || 0;
  const fee = amountNumber * feeRate;
  const receiveAmount = Math.max(amountNumber - fee, 0);

  const setPercentage = (percentage) => {
    setAmount((availableBalance * percentage / 100).toFixed(2));
  };

  const submitWithdrawal = (event) => {
    event.preventDefault();
    setShowReview(true);
  };

  return (
    <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-deposit-page mobile-fiatwithdraw-page">
      <Userheader />
      <main className="mobile-deposit-page__main">
        <div className="mobile-page-heading">
          <span>Wallet</span>
          <h1>Withdraw Fiat</h1>
          <p>Transfer your available balance to a verified payment account.</p>
        </div>
        <div className="mobile-deposit-page__top-action">
          <Link href="/deposit" className="mobile-primary-button">Deposit</Link>
        </div>

        <section className="mobile-deposit-page__steps" aria-label="Withdrawal steps">
          <div className="is-active"><b>1</b><span>Withdrawal details</span></div><i />
          <div><b>2</b><span>Review request</span></div><i />
          <div><b>3</b><span>Processing</span></div>
        </section>

        <section className="mobile-deposit-page__card mobile-fiatwithdraw-page__card">
          <div className="mobile-deposit-page__tabs">
            <Link href="/withdraw">Crypto</Link>
            <Link href="/fiatwithdraw" className="is-active">Fiat</Link>
          </div>

          <div className="mobile-fiatwithdraw-page__balance">
            <span>Available balance</span>
            <strong>{availableBalance.toLocaleString("en-US", { style: "currency", currency })}</strong>
          </div>

          <form className="mobile-fiatwithdraw-form" onSubmit={submitWithdrawal}>
            <Field label="Payment Method" required>
              <select value={method} onChange={(event) => setMethod(event.target.value)}>
                <option>Bank transfer</option><option>PayPal</option>
              </select>
            </Field>
            <Field label="Withdrawal Currency" required>
              <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                <option>USD</option><option>EUR</option><option>INR</option>
              </select>
            </Field>
            <Field label="Country" required>
              <select value={country} onChange={(event) => setCountry(event.target.value)}>
                <option>India</option><option>USA</option><option>United Kingdom</option>
              </select>
            </Field>
            <Field label="Withdraw Amount" required>
              <input inputMode="decimal" min="10" max={availableBalance} onChange={(event) => setAmount(event.target.value)} placeholder={`0.00 ${currency}`} required type="number" value={amount} />
            </Field>

            <div className="mobile-fiatwithdraw-page__percentages" aria-label="Choose withdrawal amount">
              {[25, 50, 75, 100].map((percentage) => (
                <button key={percentage} onClick={() => setPercentage(percentage)} type="button">{percentage}%</button>
              ))}
            </div>

            <Field label="Payout Account">
              <input readOnly value={method === "PayPal" ? "PayPal · a••••@mail.com" : "Bank account · •••• 4567"} />
            </Field>

            <div className="mobile-fiatdeposit-page__fees mobile-fiatwithdraw-page__fees">
              <div><span>Withdrawal fee ({(feeRate * 100).toFixed(2)}%)</span><strong>{fee.toFixed(2)} {currency}</strong></div>
              <div><span>Minimum withdrawal</span><strong>10.00 {currency}</strong></div>
              <div><span>You will receive</span><strong>{receiveAmount.toFixed(2)} {currency}</strong></div>
            </div>

            <p className="mobile-fiatwithdraw-page__note">Withdrawals are sent to your verified payout account. Processing time depends on your payment provider.</p>
            <button type="submit" className="mobile-primary-button">Review withdrawal</button>
          </form>
        </section>

        <section className="mobile-deposit-page__card mobile-deposit-page__history mobile-fiatwithdraw-page__history">
          <h2>Recent Fiat Withdrawals</h2>
          <div className="mobile-deposit-page__empty"><Image src="assets/images/nodata.svg" width={48} height={48} alt="" /><strong>No withdrawal records yet</strong></div>
        </section>
      </main>
      <MobileBottomNav />

      {showReview && (
        <div className="mobile-action-sheet" onClick={() => setShowReview(false)}>
          <div className="mobile-fiatwithdraw-page__review" onClick={(event) => event.stopPropagation()}>
            <span className="mobile-action-sheet__handle" />
            <h2>Review fiat withdrawal</h2>
            <p>Check the payout method and final amount before submitting your request.</p>
            <div><span>Payment method</span><strong>{method}</strong></div>
            <div><span>Payout account</span><strong>{method === "PayPal" ? "a••••@mail.com" : "Bank account · •••• 4567"}</strong></div>
            <div><span>Country</span><strong>{country}</strong></div>
            <div><span>Withdrawal amount</span><strong>{amountNumber.toFixed(2)} {currency}</strong></div>
            <div><span>Fee</span><strong>{fee.toFixed(2)} {currency}</strong></div>
            <div><span>You will receive</span><strong>{receiveAmount.toFixed(2)} {currency}</strong></div>
            <div className="mobile-transaction-page__drawer-actions">
              <button className="mobile-outline-button" type="button" onClick={() => setShowReview(false)}>Edit</button>
              <button className="mobile-primary-button" type="button" onClick={() => setShowReview(false)}>Submit request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, required, children }) {
  return <label className="mobile-fiatwithdraw-form__field"><span>{label}{required && <b> *</b>}</span>{children}</label>;
}