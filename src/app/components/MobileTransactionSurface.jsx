"use client";
import React, { useState } from "react";
import Link from "next/link";
import Userheader from "./Userheader";
import MobileBottomNav from "./MobileBottomNav";

const rows = [{ user: "John", id: "AGT12345", price: "0.002563 INR", amount: "$100", date: "18 Jan 2026", method: "Cash Deposit" }, { user: "William", id: "AGT12346", price: "0.002590 INR", amount: "$250", date: "17 Jan 2026", method: "Bank" }];

export default function MobileTransactionSurface({ title, mode = "trade" }) {
  const [tab, setTab] = useState(mode === "sell" || mode === "cashout" ? "sell" : "buy");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const isCash = mode === "cashin" || mode === "cashout";
  const isSell = tab === "sell";
  const heading = isCash ? (isSell ? "Cash out" : "Cash in") : (isSell ? "Sell crypto" : "Buy crypto");

  return (
    <div className={`pagecontent gridpagecontent innerpagegrid dashboardpage mobile-transaction-page mobile-transaction-page--${mode}`}>
      <Userheader />
      <main className="mobile-transaction-page__main">
        <div className="mobile-page-heading">
          <span>{isCash ? "Agent wallet" : "P2P marketplace"}</span>
          <h1>{title}</h1>
          <p>{isCash ? "Move funds with a clear, guided request." : "Compare offers and choose the right payment method."}</p>
        </div>

        <div className="mobile-segmented-tabs mobile-transaction-tabs">
          <button type="button" className={!isSell ? "is-active" : ""} onClick={() => setTab("buy")}>{isCash ? "Cash in" : "Buy"}</button>
          <button type="button" className={isSell ? "is-active" : ""} onClick={() => setTab("sell")}>{isCash ? "Cash out" : "Sell"}</button>
          {isCash && <Link href="/paymentrequest">Request</Link>}
        </div>

        <section className="mobile-transaction-page__form">
          <h2>{heading}</h2>
          <div className="mobile-transaction-page__fields">
            <label>
              {isCash ? "Select user" : "Amount"}
              {isCash ? <select><option>John</option><option>William</option></select> : <input placeholder="Enter amount" />}
            </label>
            <label>
              {isCash ? "Enter amount" : "Fiat currency"}
              <input placeholder={isCash ? "$100" : "INR"} />
            </label>
            <label>
              {isCash ? "Payment method" : "Country"}
              <select><option>{isCash ? "Bank" : "India"}</option><option>Cash Deposit</option></select>
            </label>
            <label>
              {isCash ? "Coin" : "Payment type"}
              <select><option>{isCash ? "BTC" : "Cash Deposit"}</option><option>Bank</option></select>
            </label>
          </div>
          <button type="button" className="mobile-primary-button">{isCash ? "Send request" : "Search offers"}</button>
        </section>

        <section className="mobile-transaction-page__offers">
          <div className="mobile-section-heading">
            <h2>{isCash ? `Recent ${isSell ? "cash out" : "cash in"}` : `${isSell ? "Sell" : "Buy"} offers`}</h2>
            <span>{rows.length} records</span>
          </div>

          {rows.map((row, index) => (
            <article key={`${row.id}-${index}`}>
              <div className="mobile-transaction-page__offer-head">
                <div>
                  <strong>{row.user}</strong>
                  <span>{row.id} · {row.date}</span>
                </div>
                <b>{row.method}</b>
              </div>

              <dl>
                <div>
                  <dt>Price</dt>
                  <dd>{row.price}</dd>
                </div>
                <div>
                  <dt>Available</dt>
                  <dd>{row.amount}</dd>
                </div>
              </dl>

              {!isCash && (
                <button type="button" className="mobile-primary-button" onClick={() => setSelectedOffer(row)} style={{ marginTop: 0 }}>
                  Buy BTC
                </button>
              )}
            </article>
          ))}
        </section>
      </main>

      <MobileBottomNav />

      {selectedOffer && (
        <div className="mobile-action-sheet" onClick={() => setSelectedOffer(null)}>
          <div onClick={(event) => event.stopPropagation()}>
            <span className="mobile-action-sheet__handle" />
            <h2>Buy BTC</h2>
            <div className="mobile-transaction-page__drawer-summary">
              <div className="mobile-transaction-page__drawer-detail">
                <span>Price</span>
                <strong>{selectedOffer.price}</strong>
              </div>
              <div className="mobile-transaction-page__drawer-detail">
                <span>Payment time limits</span>
                <strong>15 Minutes</strong>
              </div>
              <div className="mobile-transaction-page__drawer-detail">
                <span>Seller's payment method</span>
                <strong>{selectedOffer.method}</strong>
              </div>
              <div className="mobile-transaction-page__drawer-detail">
                <span>Available balance</span>
                <strong>{selectedOffer.amount}</strong>
              </div>
            </div>

            <div className="mobile-transaction-page__drawer-form">
              <label>
                I want to pay
                <div className="mobile-transaction-page__drawer-input-row">
                  <input type="text" defaultValue="" placeholder="Enter amount" />
                  <span>INR</span>
                </div>
              </label>
              <label>
                I will receive
                <div className="mobile-transaction-page__drawer-input-row">
                  <input type="text" defaultValue="" placeholder="Enter amount" />
                  <span>BTC</span>
                </div>
              </label>
            </div>

            <div className="mobile-transaction-page__drawer-actions">
              <button type="button" className="mobile-outline-button" onClick={() => setSelectedOffer(null)}>
                Cancel
              </button>
              <button type="button" className="mobile-primary-button" onClick={() => setSelectedOffer(null)}>
                Confirm buy
              </button>
            </div>

            <div className="mobile-transaction-page__drawer-terms">
              <strong>Terms and Conditions:</strong>
              <p>Pay with your personal account</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
