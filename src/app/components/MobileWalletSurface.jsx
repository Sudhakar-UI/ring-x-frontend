"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Userheader from "./Userheader";
import MobileBottomNav from "./MobileBottomNav";
const assets = [
	["BTC", "Bitcoin", "btc.svg", "0.293985", "0.32569", "0.00254789"],
	["ETH", "Ethereum", "eth.svg", "0.293985", "0.32569", "0.00254789"],
	["XRP", "Ripple", "xrp.svg", "0.293985", "0.32569", "0.00254789"],
	["BNB", "Binance Coin", "bnb.svg", "0.293985", "0.32569", "0.00254789"],
	["TRX", "Tron", "trx.svg", "0.293985", "0.32569", "0.00254789"],
	["DOGE", "Dogecoin", "doge.svg", "0.293985", "0.32569", "0.00254789"],
];

export default function MobileWalletSurface() {
	const [hideSmall, setHideSmall] = useState(false);
	const [search, setSearch] = useState("");
	const visibleAssets = assets.filter(([, name, symbol]) => !search || name.toLowerCase().includes(search.toLowerCase()) || symbol.toLowerCase().includes(search.toLowerCase()));

	return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-wallet-surface"><Userheader /><main className="mobile-wallet-surface__main"><div className="mobile-page-heading"><span>Wallet</span><h1>Wallet balance</h1><p>Track balances across your crypto assets.</p></div><section className="mobile-wallet-surface__balance"><div><span>Total Asset Valuation</span><strong>$ 0.00000</strong><small>= 0.0000000 BTC</small></div><Image src="/assets/images/walletbalance.svg" alt="Wallet balance" width={140} height={110} /><nav><Link href="/deposit">Deposit</Link><Link href="/withdraw">Withdraw</Link><Link href="/transfer">Transfer</Link></nav></section><div className="mobile-wallet-surface__toolbar"><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search Balance" aria-label="Search balance" /><label><input type="checkbox" checked={hideSmall} onChange={(event) => setHideSmall(event.target.checked)} /> Hide Small Assets</label></div><section className="mobile-wallet-surface__assets">{visibleAssets.map(([symbol, name, icon, balance, freeBalance, lockedBalance], index) => <article key={symbol}><div className="mobile-wallet-surface__asset-head"><span>{index + 1}</span><div className="mobile-wallet-surface__coin"><Image src={`/assets/images/color/${icon}`} alt="" width={24} height={24} /></div><div><strong>{symbol}</strong><span>{name}</span></div></div><div className="mobile-wallet-surface__asset-values"><div><span>Balance</span><strong>{balance}</strong></div><div><span>Free Balance</span><strong>{freeBalance}</strong></div><div><span>Locked Balance</span><strong>{lockedBalance}</strong></div></div></article>)}</section>{visibleAssets.length === 0 && <div className="mobile-wallet-surface__empty">No assets found</div>}</main><MobileBottomNav /></div>;
}
