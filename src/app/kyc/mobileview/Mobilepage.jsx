"use client";

import { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function Mobilepage() {
	const [frontDocument, setFrontDocument] = useState("");
	const [backDocument, setBackDocument] = useState("");
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-kyc-page">
			<Userheader />
			<main className="mobile-kyc-page__main">
				<div className="mobile-page-heading">
					<span>Account verification</span>
					<h1>KYC Verification</h1>
					<p>Complete your identity details and upload the required documents.</p>
				</div>

				<form className="mobile-kyc-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
					<KycSection title="Personal Informations">
						<div className="mobile-kyc-form__grid">
							<Field label="First Name" />
							<Field label="Last Name" />
							<Field label="Date of Birth" type="date" defaultValue="2026-09-25" />
							<Field label="City" />
						</div>
						<Field label="Address" type="textarea" />
					</KycSection>

					<KycSection title="ID Proof Details">
						<div className="mobile-kyc-form__grid">
							<Field label="ID Document Type" type="select" options={["India", "Passport", "Driving Licence"]} />
							<Field label="ID Document Number" />
							<Field label="Proof Of Address" />
							<Field label="Expiry Date" type="date" defaultValue="2026-09-25" />
						</div>
					</KycSection>

					<KycSection title="ID Proof Informations">
						<div className="mobile-kyc-upload-grid">
							<UploadField label="ID Front Document" value={frontDocument} onChange={setFrontDocument} />
							<UploadField label="ID Back Document" value={backDocument} onChange={setBackDocument} />
						</div>
					</KycSection>

					<button type="submit" className="mobile-primary-button mobile-kyc-form__submit">Submit</button>
				</form>
			</main>
			<MobileBottomNav />

			{submitted && <div className="mobile-action-sheet" onClick={() => setSubmitted(false)}><div onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" /><h2>KYC submitted</h2><p>Your verification details have been sent for review.</p><button type="button" className="mobile-primary-button" onClick={() => setSubmitted(false)}>Done</button></div></div>}
		</div>
	);
}

function KycSection({ title, children }) {
	return <section className="mobile-kyc-form__section"><h2>{title}</h2>{children}</section>;
}

function Field({ label, type = "text", options, defaultValue }) {
	return <label className="mobile-kyc-form__field"><span>{label}</span>{type === "textarea" ? <textarea rows="4" /> : type === "select" ? <select defaultValue={options[0]}>{options.map((option) => <option key={option}>{option}</option>)}</select> : <input type={type} defaultValue={defaultValue} />}</label>;
}

function UploadField({ label, value, onChange }) {
	return <label className="mobile-kyc-upload"><span>{label} <b>*</b></span><span className="mobile-kyc-upload__box"><span className="mobile-kyc-upload__icon">+</span><span className="mobile-kyc-upload__name">{value || "Choose document"}</span><span className="mobile-kyc-upload__button">Upload here..</span><input type="file" accept="image/jpeg,image/png" onChange={(event) => onChange(event.target.files?.[0]?.name || "")} /></span><small>(Upload jpg, jpeg, png, MAX: 12MB)</small></label>;
}
