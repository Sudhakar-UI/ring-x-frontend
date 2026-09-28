"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import Spotchart from "../Spotchart";
import P2pchart from "../P2pchart";

const assets = [
  ["BTC", "Bitcoin", "btc.svg"],
  ["ETH", "Ethereum", "eth.svg"],
  ["XRP", "Ripple", "xrp.svg"],
  ["BNB", "Binance Coin", "bnb.svg"],
  ["TRX", "Tron", "trx.svg"],
  ["DOGE", "Dogecoin", "doge.svg"],
];

const WalletTable = ({ p2p }) => (
  <div className="wallet-desktop-table">
    <div className="wallet-table-toolbar">
      <input type="search" placeholder="Search Balance" aria-label="Search balance" />
      <label><input type="checkbox" /> Hide Small Assets</label>
    </div>
    <div className="wallet-table-scroll">
      <table>
        <thead>
          <tr><th>#</th><th>Name</th><th>Balance</th><th>Free Balance</th><th>Locked Balance</th><th>Action</th></tr>
        </thead>
        <tbody>
          {assets.map(([symbol, name, icon], index) => (
            <tr key={symbol}>
              <td>{index + 1}</td>
              <td><Image src={`assets/images/color/${icon}`} width={22} height={22} alt="" /> <b>{symbol}</b> <span>{name}</span></td>
              <td>0.293985</td><td>0.32569</td><td>0.00254789</td>
              <td>{p2p ? <Link href="/transfer" className="wallet-action wallet-action--transfer">Transfer</Link> : <><Link href="/deposit" className="wallet-action wallet-action--deposit">Deposit</Link><Link href="/withdraw" className="wallet-action wallet-action--withdraw">Withdraw</Link></>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function Desktoppage() {
  const [tab, setTab] = useState("spot");

  return (
    <div className="pagecontent gridpagecontent innerpagegridm wallet-page">
      <div className="backgroundoverlay" id="backgroundoverlay" />
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent innerpagetopimage">
        <Container className="sitecontainer rxt-wrapper-bg">
          <div className="wallet-desktop-hero">
            <div><h2>Wallet Balance</h2><div className="balanceshowt totblance"><h5>Total Asset Valuation <FontAwesomeIcon icon={faEye} /></h5><h4>$ 0.00000 <span>= 0.0000000 BTC</span></h4></div></div>
            <Image src="assets/images/walletbalance.svg" alt="Wallet balance" width={150} height={120} />
          </div>
        </Container>
      </div>
      <article className="gridparentbox">
        <Container className="sitecontainer walletoverviewbg">
          <nav className="wallet-desktop-tabs" aria-label="Wallet types">
            <button className={tab === "spot" ? "is-active" : ""} onClick={() => setTab("spot")}>Spot Balance</button>
            <button className={tab === "p2p" ? "is-active" : ""} onClick={() => setTab("p2p")}>P2P Balance</button>
            <Link href="/rwawallet">RWA Balance</Link><Link href="/rwawallet">Prediction Wallet</Link>
          </nav>
          <div className="wallet-desktop-grid">
            <div className="wallet-desktop-panel"><WalletTable p2p={tab === "p2p"} /></div>
            <div className="wallet-desktop-panel wallet-desktop-chart"><h6>Balance Chart</h6>{tab === "spot" ? <Spotchart /> : <P2pchart />}</div>
          </div>
        </Container>
      </article>
      <Userfooter />
    </div>
  );
}
