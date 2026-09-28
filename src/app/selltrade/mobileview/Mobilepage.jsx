"use client";

import { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function MobilePage() {
  const [drawer, setDrawer] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { author: "John", text: "Please wait while payment is processed.", mine: false },
    { author: "You", text: "I am checking the payment now.", mine: true },
  ]);

  const openDrawer = (type) => {
    setPaymentConfirmed(false);
    setDrawer(type);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;
    setMessages((current) => [...current, { author: "You", text, mine: true }]);
    setMessage("");
  };

  return (
    <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-transaction-page mobile-transaction-page--selltrade mobile-trade-page mobile-sell-trade-page">
      <Userheader />
      <main className="mobile-transaction-page__main">
        <a className="mobile-back-link" href="/overview">‹ Back to trades</a>
        <div className="mobile-page-heading">
          <span>P2P trade</span>
          <h1>Sell BTC</h1>
          <p>Review the buyer&apos;s payment and release your assets.</p>
        </div>

        <section className="mobile-trade-summary mobile-section-card">
          <div className="mobile-section-head">
            <h2>Order #537468956986488</h2>
            <b>Active</b>
          </div>
          <p className="mobile-card-copy">Created 11 Jan 2024, 08:05:11</p>
          <div className="mobile-trade-metrics">
            <span>Amount<strong>0.0025 INR</strong></span>
            <span>Price<strong>10.35636 INR</strong></span>
            <span>Quantity<strong>25.3995 BTC</strong></span>
          </div>
        </section>

        <section className="mobile-section-card">
          <div className="mobile-section-head">
            <h2>Payment details</h2>
            <span className="mobile-sell-trade-page__timer">00:13:10</span>
          </div>
          <p className="mobile-card-copy">The buyer is completing payment. Verify the funds in your account before releasing BTC.</p>
          <div className="mobile-bank-box">
            <b>Payment method · Bank transfer</b>
            <span>Account XXXXXXXX</span>
            <span>76457975634686</span>
          </div>
          <div className="mobile-trade-status">
            <strong>Payment to be made by buyer</strong>
            <p>Do not release your assets until the payment has arrived and is confirmed.</p>
          </div>
          <div className="mobile-trade-actions">
            <button className="mobile-primary-button" type="button" onClick={() => openDrawer("release")}>Confirm release</button>
            <button className="mobile-outline-button" type="button" onClick={() => openDrawer("appeal")}>Appeal trade</button>
          </div>
        </section>

        <section className="mobile-section-card mobile-sell-trade-page__messages">
          <div className="mobile-section-head">
            <div>
              <h2>Trade messages</h2>
              <span className="mobile-sell-trade-page__online">John · Counterparty</span>
            </div>
            <span className="mobile-sell-trade-page__secure">Order chat</span>
          </div>
          <div className="mobile-chat" aria-live="polite">
            {messages.map((item, index) => (
              <p className={item.mine ? "is-me" : ""} key={`${item.author}-${index}`}>
                <b>{item.author}</b>{item.text}
              </p>
            ))}
          </div>
          <label className="mobile-upload-box">
            Attach payment document
            <input type="file" accept="image/*,.pdf" />
          </label>
          <form className="mobile-sell-trade-page__composer" onSubmit={sendMessage}>
            <label className="mobile-message-field">
              Message
              <textarea rows={3} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write a message..." />
            </label>
            <button className="mobile-primary-button" type="submit" disabled={!message.trim()}>Send message</button>
          </form>
        </section>
      </main>
      <MobileBottomNav />

      {drawer && (
        <div className="mobile-action-sheet" onClick={() => setDrawer(null)}>
          <div
            aria-labelledby="sell-trade-dialog-title"
            aria-modal="true"
            className="mobile-sell-trade-page__drawer"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <span className="mobile-action-sheet__handle" />
            {drawer === "release" ? (
              <>
                <h2 id="sell-trade-dialog-title">Confirm BTC release</h2>
                <p className="mobile-card-copy">Only continue after you have verified the buyer&apos;s payment in your bank account.</p>
                <div className="mobile-transaction-page__drawer-detail">
                  <span>Order amount</span>
                  <strong>0.0025 INR</strong>
                </div>
                <label className="mobile-sell-trade-page__confirm-check">
                  <input type="checkbox" checked={paymentConfirmed} onChange={(event) => setPaymentConfirmed(event.target.checked)} />
                  I have received and verified the payment
                </label>
                <div className="mobile-transaction-page__drawer-actions">
                  <button className="mobile-outline-button" type="button" onClick={() => setDrawer(null)}>Go back</button>
                  <button className="mobile-primary-button" type="button" disabled={!paymentConfirmed} onClick={() => setDrawer(null)}>Release BTC</button>
                </div>
              </>
            ) : (
              <>
                <h2 id="sell-trade-dialog-title">Appeal this trade</h2>
                <p className="mobile-card-copy">Contact the buyer first. Share only information needed to resolve this order.</p>
                <label>Reason for appeal
                  <select defaultValue="">
                    <option value="" disabled>Select a reason</option>
                    <option>Payment not received</option>
                    <option>Incorrect payment amount</option>
                    <option>Other payment issue</option>
                  </select>
                </label>
                <label>Description
                  <textarea rows={3} placeholder="Describe the issue" />
                </label>
                <label>Supporting document
                  <input type="file" accept="image/*,.pdf" />
                </label>
                <div className="mobile-transaction-page__drawer-actions">
                  <button className="mobile-outline-button" type="button" onClick={() => setDrawer(null)}>Cancel</button>
                  <button className="mobile-primary-button" type="button" onClick={() => setDrawer(null)}>Submit appeal</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}