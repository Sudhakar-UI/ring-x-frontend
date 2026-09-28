"use client";

import { useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const cryptoAssets = {
  BTC: { balance: 0.32569, fee: 0.0006, networks: ["Bitcoin"] },
  ETH: { balance: 2.45, fee: 0.003, networks: ["Ethereum", "Arbitrum"] },
  SOL: { balance: 15.5, fee: 0.01, networks: ["Solana"] },
  TRX: { balance: 2500, fee: 1, networks: ["TRON"] },
  LTC: { balance: 3.2, fee: 0.001, networks: ["Litecoin"] },
};

export default function MobilePage() {
  const [asset, setAsset] = useState("BTC");
  const [network, setNetwork] = useState("Bitcoin");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [showReview, setShowReview] = useState(false);

  const assetDetails = cryptoAssets[asset];
  const amountNumber = Number.parseFloat(amount) || 0;
  const receiveAmount = Math.max(amountNumber - assetDetails.fee, 0);

  const setPercentage = (percentage) => {
    setAmount((assetDetails.balance * percentage / 100).toFixed(8));
  };

  const submitWithdrawal = (event) => {
    event.preventDefault();
    setShowReview(true);
  };

  return (
    <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-deposit-page mobile-withdraw-page">
      <Userheader />
      <main className="mobile-deposit-page__main">
        <div className="mobile-page-heading">
          <span>Wallet</span>
          <h1>Withdraw Crypto</h1>
          <p>Send crypto to an external wallet address.</p>
        </div>
        <div className="mobile-deposit-page__top-action">
          <Link href="/deposit" className="mobile-primary-button">Deposit</Link>
        </div>

        <section className="mobile-deposit-page__steps" aria-label="Withdrawal steps">
          <div className="is-active"><b>1</b><span>Withdrawal details</span></div><i />
          <div><b>2</b><span>Review request</span></div><i />
          <div><b>3</b><span>Processing</span></div>
        </section>

        <section className="mobile-deposit-page__card mobile-withdraw-page__card">
          <div className="mobile-deposit-page__tabs">
            <Link href="/withdraw" className="is-active">Crypto</Link>
            <Link href="/fiatwithdraw">Fiat</Link>
          </div>

          <div className="mobile-withdraw-page__balance">
            <span>Available balance</span>
            <strong>{assetDetails.balance.toFixed(5)} {asset}</strong>
          </div>

          <form className="mobile-withdraw-form" onSubmit={submitWithdrawal}>
            <label className="mobile-withdraw-form__field">Select Crypto
              <select value={asset} onChange={(event) => { setAsset(event.target.value); setNetwork(cryptoAssets[event.target.value].networks[0]); setAmount(""); }}>
                <option>BTC</option><option>ETH</option><option>SOL</option><option>TRX</option><option>LTC</option>
              </select>
            </label>

            <label className="mobile-withdraw-form__field">Select Network
              <select value={network} onChange={(event) => setNetwork(event.target.value)}>
                {assetDetails.networks.map((networkName) => <option key={networkName}>{networkName}</option>)}
              </select>
            </label>

            <label className="mobile-withdraw-form__field">Wallet Address
              <input autoComplete="off" value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Paste destination address" required />
            </label>

            <label className="mobile-withdraw-form__field">Withdraw Amount
              <span className="mobile-withdraw-form__amount">
                <input inputMode="decimal" min={assetDetails.fee} max={assetDetails.balance} onChange={(event) => setAmount(event.target.value)} placeholder="0.00000000" required type="number" value={amount} />
                <strong>{asset}</strong>
              </span>
            </label>

            <div className="mobile-withdraw-page__percentages" aria-label="Choose withdrawal amount">
              {[25, 50, 75, 100].map((percentage) => (
                <button key={percentage} onClick={() => setPercentage(percentage)} type="button">{percentage}%</button>
              ))}
            </div>

            <div className="mobile-deposit-page__fees mobile-withdraw-page__fees">
              <div><span>Minimum withdrawal</span><strong>{assetDetails.fee.toFixed(8)} {asset}</strong></div>
              <div><span>Withdrawal fee</span><strong>{assetDetails.fee.toFixed(8)} {asset}</strong></div>
              <div><span>You will receive</span><strong>{receiveAmount.toFixed(8)} {asset}</strong></div>
            </div>

            <p className="mobile-withdraw-page__notice">Check that the destination address supports the selected network. Crypto withdrawals cannot be reversed.</p>
            <button className="mobile-primary-button" type="submit">Review withdrawal</button>
          </form>
        </section>

        <section className="mobile-deposit-page__card mobile-deposit-page__history mobile-withdraw-page__history">
          <h2>Recent Withdraw History</h2>
          <Link href="/withdrawhistory">View all</Link>
          <div className="mobile-deposit-page__empty"><Image src="assets/images/nodata.svg" width={48} height={48} alt="" /><strong>No withdrawal records yet</strong></div>
        </section>
      </main>
      <MobileBottomNav />

      {showReview && (
        <div className="mobile-action-sheet" onClick={() => setShowReview(false)}>
          <div className="mobile-withdraw-page__review" onClick={(event) => event.stopPropagation()}>
            <span className="mobile-action-sheet__handle" />
            <h2>Review withdrawal</h2>
            <p>Confirm the network and destination carefully before submitting.</p>
            <div><span>Asset and network</span><strong>{asset} · {network}</strong></div>
            <div><span>Destination address</span><strong className="mobile-withdraw-page__review-address">{address}</strong></div>
            <div><span>Withdrawal amount</span><strong>{amountNumber.toFixed(8)} {asset}</strong></div>
            <div><span>Fee</span><strong>{assetDetails.fee.toFixed(8)} {asset}</strong></div>
            <div><span>Receive amount</span><strong>{receiveAmount.toFixed(8)} {asset}</strong></div>
            <div className="mobile-transaction-page__drawer-actions">
              <button className="mobile-outline-button" type="button" onClick={() => setShowReview(false)}>Edit</button>
              <button className="mobile-primary-button" type="button" onClick={() => setShowReview(false)}>Confirm withdrawal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}