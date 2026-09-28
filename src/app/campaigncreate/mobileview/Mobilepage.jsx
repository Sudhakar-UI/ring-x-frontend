"use client";

import { useState } from "react";
import Link from "next/link";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const linkingMethods = [
	["Default (Tracking Settings)", 4],
	["Anchor Links", 4],
	["New style links (URL Parameters)", 2],
	["Mod Rewrite links", 2],
	["Direct link style (no URL Parameters)", 2],
	["Redirect links", 1],
];

function StarRating({ rating }) {
	return <span className="mobile-campaign-create__rating" aria-label={`${rating} out of 5 stars`}>{"*".repeat(rating)}<span>{"*".repeat(5 - rating)}</span></span>;
}

export default function Mobilepage() {
	const [status, setStatus] = useState("active");

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-campaign-page mobile-campaign-page--create mobile-campaign-create-page">
			<Userheader />
			<main className="mobile-campaign-page__main">
				<div className="mobile-page-heading">
					<span>Affiliate pro</span>
					<h1>Create Campaign</h1>
					<p>Enter campaign information and branding details.</p>
				</div>
				<Link href="/campaignsoverview" className="mobile-campaign-create__back">&lt; Back to campaigns</Link>

				<form className="mobile-campaign-create__form">
					<section className="mobile-campaign-create__section">
						<div className="mobile-campaign-create__section-head">
							<span>!</span>
							<div><h2>Campaign Details</h2><p>Enter campaign information and branding details</p></div>
						</div>
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
							{[["active", "Active", "Visible to affiliates"], ["paused", "Paused", "Visible to affiliates"], ["stopped", "Stopped", "Invisible to affiliates"]].map(([value, label, description]) => (
								<label key={value} className={`mobile-campaign-create__status mobile-campaign-create__status--${value}`}>
									<input type="radio" name="campaignStatus" checked={status === value} onChange={() => setStatus(value)} />
									<strong>{label}</strong><small>{description}</small>
								</label>
							))}
						</div>
					</section>

					<section className="mobile-campaign-create__section">
						<div className="mobile-campaign-create__section-head"><span>o</span><div><h2>Cookies</h2><p>Configure cookie settings for this campaign.</p></div></div>
						<label>Limit cookie lifetime to (days)<input placeholder="Enter cookie lifetime" /></label>
						<small className="mobile-campaign-create__helper">The lifetime applies to this campaign only. Affiliates receive commission for sales within this period after a visitor clicks the affiliate link.</small>
						<fieldset><legend>Overwrite previous cookies</legend><div className="mobile-campaign-create__radios"><label><input type="radio" name="overwrite" /> Yes</label><label><input type="radio" name="overwrite" /> No</label><label><input type="radio" name="overwrite" defaultChecked /> Default (No)</label></div></fieldset>
						<small className="mobile-campaign-create__helper">The latest click will be considered when computing commissions.</small>
						<fieldset><legend>Delete cookie after lead/sale</legend><div className="mobile-campaign-create__radios"><label><input type="radio" name="deletecookie" /> Yes</label><label><input type="radio" name="deletecookie" /> No</label><label><input type="radio" name="deletecookie" defaultChecked /> Default (No)</label></div></fieldset>
					</section>

					<section className="mobile-campaign-create__section">
						<div className="mobile-campaign-create__section-head"><span>&gt;</span><div><h2>Affiliate Linking Method</h2><p>Choose how affiliates will be linked.</p></div></div>
						<div className="mobile-campaign-create__link-list">
							{linkingMethods.map(([label, rating]) => <label key={label}><input type="radio" name="linkstyle" /> <span>{label}</span><StarRating rating={rating} /><small>https://www.text.com/FGDSGSAH46646</small></label>)}
						</div>
						<label>Campaign URL<input placeholder="Enter campaign URL" /></label>
						<small className="mobile-campaign-create__helper">Used instead of the main site URL for redirect and Mod Rewrite links.</small>
						<label>Additional URL Parameters for campaign?<input placeholder="Enter URL parameters" /></label>
						<small className="mobile-campaign-create__helper">Example: param1=value1 &amp; param2=value2</small>
					</section>

					<section className="mobile-campaign-create__section">
						<div className="mobile-campaign-create__section-head"><span>#</span><div><h2>Product ID Matching</h2><p>Configure product based campaign matching.</p></div></div>
						<label>Product IDs<input placeholder="Enter product IDs separated by comma" /></label>
						<small className="mobile-campaign-create__helper">Specify all product IDs that belong to this campaign. Product IDs should be comma separated.</small>
						<label className="mobile-campaign-create__checkbox"><input type="checkbox" /> Extended search mode</label>
						<small className="mobile-campaign-create__helper">Enable advanced product searching and campaign matching support.</small>
						<button type="submit" className="mobile-primary-button">Create Campaign</button>
					</section>
				</form>
			</main>
			<MobileBottomNav />
		</div>
	);
}
