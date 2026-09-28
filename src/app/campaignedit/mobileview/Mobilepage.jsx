"use client";

import { useState } from "react";
import Link from "next/link";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const commissionRows = [
	["Commission", "$0.20"],
	["2nd tier commission", "$0.15"],
	["3rd tier commission", "$0.15"],
	["4th tier commission", "$0.20"],
	["5th tier commission", "$0.20"],
];

const linkingMethods = ["Default (Tracking Settings)", "Anchor Links", "New style links (URL Parameters)", "Mod Rewrite links", "Direct link style (no URL Parameters)", "Redirect links"];

function CampaignDetails() {
	return (
		<>
			<section className="mobile-campaign-create__section">
				<div className="mobile-campaign-create__section-head"><span>!</span><div><h2>Campaign Details</h2><p>Enter campaign information and branding details</p></div></div>
				<div className="mobile-campaign-create__fields">
					<label>Campaign Name<input placeholder="Enter campaign name" /></label>
					<label>Upload Campaign Logo <em>*</em><input type="file" accept="image/jpeg,image/png" /></label>
					<label>Short Description<textarea rows="4" placeholder="Enter short description" /></label>
					<label>Long Description<textarea rows="4" placeholder="Enter detailed description" /></label>
				</div>
			</section>

			<section className="mobile-campaign-create__section">
				<div className="mobile-campaign-create__section-head"><span>+</span><div><h2>Campaign Status</h2><p>Choose how this campaign appears to affiliates.</p></div></div>
				<div className="mobile-campaign-create__status-list">
					{[["active", "Active", "Visible to affiliates"], ["paused", "Paused", "Visible to affiliates"], ["stopped", "Stopped", "Invisible to affiliates"]].map(([value, label, description]) => <label key={value} className={`mobile-campaign-create__status mobile-campaign-create__status--${value}`}><input type="radio" name="campaignStatus" defaultChecked={value === "active"} /><strong>{label}</strong><small>{description}</small></label>)}
				</div>
			</section>

			<section className="mobile-campaign-create__section">
				<div className="mobile-campaign-create__section-head"><span>o</span><div><h2>Cookies</h2><p>Configure cookie settings for this campaign.</p></div></div>
				<label>Limit cookie lifetime to (days)<input placeholder="Enter cookie lifetime" /></label>
				<small className="mobile-campaign-create__helper">The lifetime applies to this campaign only and controls how long affiliate commissions are tracked.</small>
				<fieldset><legend>Overwrite previous cookies</legend><div className="mobile-campaign-create__radios"><label><input type="radio" name="overwrite" /> Yes</label><label><input type="radio" name="overwrite" /> No</label><label><input type="radio" name="overwrite" defaultChecked /> Default (No)</label></div></fieldset>
				<fieldset><legend>Delete cookie after lead/sale</legend><div className="mobile-campaign-create__radios"><label><input type="radio" name="deletecookie" /> Yes</label><label><input type="radio" name="deletecookie" /> No</label><label><input type="radio" name="deletecookie" defaultChecked /> Default (No)</label></div></fieldset>
			</section>

			<section className="mobile-campaign-create__section">
				<div className="mobile-campaign-create__section-head"><span>&gt;</span><div><h2>Affiliate Linking Method</h2><p>Choose how affiliates will be linked.</p></div></div>
				<div className="mobile-campaign-create__link-list">{linkingMethods.map((method, index) => <label key={method}><input type="radio" name="linkstyle" defaultChecked={index === 0} /><span>{method}</span><strong className="mobile-campaign-create__rating">{"*".repeat(Math.max(1, 4 - Math.floor(index / 2)))}<i>{"*".repeat(Math.min(4, 1 + Math.floor(index / 2)))}</i></strong><small>https://www.text.com/FGDSGSAH46646</small></label>)}</div>
				<label>Campaign URL<input placeholder="Enter campaign URL" /></label>
				<label>Additional URL Parameters for campaign?<input placeholder="Enter URL parameters" /></label>
			</section>

			<section className="mobile-campaign-create__section">
				<div className="mobile-campaign-create__section-head"><span>#</span><div><h2>Product ID Matching</h2><p>Configure product based campaign matching.</p></div></div>
				<label>Product IDs<input placeholder="Enter product IDs separated by comma" /></label>
				<small className="mobile-campaign-create__helper">Specify all product IDs that belong to this campaign. Product IDs should be comma separated.</small>
				<label className="mobile-campaign-create__checkbox"><input type="checkbox" /> Extended search mode</label>
				<button type="button" className="mobile-primary-button">Save Details</button>
			</section>
		</>
	);
}

function CommissionCard({ onEdit, onDisable }) {
	return <article className="mobile-campaign-edit__commission-card"><div className="mobile-campaign-edit__commission-head"><strong>per Click</strong><span>Active</span></div><dl>{commissionRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className="mobile-campaign-edit__commission-actions"><button type="button" className="mobile-outline-button" onClick={onEdit}>Edit</button><button type="button" className="mobile-outline-button is-danger" onClick={onDisable}>Disable</button></div></article>;
}

export default function Mobilepage() {
	const [tab, setTab] = useState("details");
	const [sheet, setSheet] = useState(null);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-campaign-page mobile-campaign-page--edit mobile-campaign-edit-page">
			<Userheader />
			<main className="mobile-campaign-page__main">
				<div className="mobile-page-heading"><span>Affiliate pro</span><h1>Campaign Details Update</h1><p>Update campaign information and commission settings.</p></div>
				<Link href="/campaignsmanager" className="mobile-campaign-create__back">&lt; Back to campaigns</Link>
				<div className="mobile-campaign-edit__tabs"><button type="button" className={tab === "details" ? "is-active" : ""} onClick={() => setTab("details")}>Edit Details</button><button type="button" className={tab === "commission" ? "is-active" : ""} onClick={() => setTab("commission")}>Commission Settings</button></div>
				{tab === "details" ? <form className="mobile-campaign-create__form"><CampaignDetails /></form> : <section className="mobile-campaign-edit__commission-list">{[1, 2, 3].map((item) => <CommissionCard key={item} onEdit={() => setSheet("edit")} onDisable={() => setSheet("disable")} />)}</section>}
			</main>
			<MobileBottomNav />

			{sheet && <div className="mobile-action-sheet" onClick={() => setSheet(null)}><div className="mobile-campaign-edit__drawer" onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" />{sheet === "edit" ? <><h2>Sale Commission</h2><p className="mobile-card-copy">Commission Type Settings</p><label>Approval<select><option>Automatic approval</option><option>Manual approval</option></select></label><label className="mobile-campaign-edit__check"><input type="checkbox" /> Save transaction also zero orders (Total Cost = 0)</label><label className="mobile-campaign-edit__check"><input type="checkbox" /> Save transaction with zero commission</label><label className="mobile-campaign-edit__check"><input type="checkbox" /> Use fixed cost</label><p className="mobile-card-copy">Commissions</p><label>Currency and amount<div className="mobile-campaign-edit__amount"><select><option>$</option></select><input defaultValue="0.20" /></div></label><label className="mobile-campaign-edit__check"><input type="checkbox" /> Support multi tier commissions</label><div className="mobile-transaction-page__drawer-actions"><button type="button" className="mobile-outline-button" onClick={() => setSheet(null)}>Close</button><button type="button" className="mobile-primary-button" onClick={() => setSheet(null)}>Save</button></div></> : <><h2>Disable commission?</h2><p className="mobile-card-copy">Are you sure you want to disable this commission setting?</p><div className="mobile-transaction-page__drawer-actions"><button type="button" className="mobile-outline-button" onClick={() => setSheet(null)}>Cancel</button><button type="button" className="mobile-primary-button" onClick={() => setSheet(null)}>Disable</button></div></>}</div></div>}
		</div>
	);
}
