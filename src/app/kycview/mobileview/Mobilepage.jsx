"use client";

import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const details = [
	["First Name", "Johnuser"],
	["Last Name", "Johnuser"],
	["Date of Birth", "01/12/2024"],
	["Street Address", "test, India"],
	["Street Address 2", "test, India"],
	["City", "xxx"],
	["State", "xxx"],
	["Zipcode", "642642"],
	["Select Country", "India"],
	["ID document type", "Passport"],
	["ID document number", "4626426"],
	["Proof of address", "xxx"],
	["Expiry Date", "01/12/2024"],
];

export default function Mobilepage() {
	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-kycview-page">
			<Userheader />
			<main className="mobile-kycview-page__main">
				<div className="mobile-page-heading">
					<span>Account verification</span>
					<h1>KYC Verification</h1>
					<p>Review the identity information submitted for your account.</p>
				</div>

				<section className="mobile-kycview-card">
					<div className="mobile-kycview-card__head">
						<h2>Submitted details</h2>
						<span>Verified information</span>
					</div>
					<div className="mobile-kycview-card__details">
						{details.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
					</div>
					<div className="mobile-kycview-card__documents">
						<DocumentPreview label="ID Front Document" src="/assets/images/front.svg" />
						<DocumentPreview label="ID Back Document" src="/assets/images/back.svg" />
					</div>
				</section>
			</main>
			<MobileBottomNav />
		</div>
	);
}

function DocumentPreview({ label, src }) {
	return <div className="mobile-kycview-document"><span>{label}</span><img src={src} alt={label} /></div>;
}
