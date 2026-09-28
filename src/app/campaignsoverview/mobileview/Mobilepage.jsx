"use client";

import Link from "next/link";
import { Image } from "react-bootstrap";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const statistics = [
	["Commissions", "$2,244", "commissionscount.svg"],
	["Total Sales", "$2,244", "total-sales.svg"],
	["Pending", "$2,244", "pending.svg"],
	["Un Paid", "$2,244", "unpaid.svg"],
];

function StatisticsSection({ title }) {
	return (
		<section className="mobile-campaign-overview__section">
			<h2>{title}</h2>
			<div className="mobile-campaign-overview__stats">
				{statistics.map(([label, value, icon]) => (
					<div key={label}>
						<Image src={`assets/images/${icon}`} width={28} height={28} alt="" />
						<span>{label}</span>
						<strong>{value}</strong>
					</div>
				))}
			</div>
		</section>
	);
}

export default function Mobilepage() {
	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-campaign-page mobile-campaign-page--overview mobile-campaign-overview-page">
			<Userheader />
			<main className="mobile-campaign-page__main">
				<div className="mobile-page-heading"><span>Affiliate pro</span><h1>Campaign Overview</h1><p>Track campaign commissions and sales at a glance.</p></div>
				<Link href="/advertiserdashboard" className="mobile-campaign-create__back">&lt; Back</Link>
				<div className="mobile-campaign-overview__card">
					<StatisticsSection title="Commission Statistics (All Time)" />
					<hr />
					<StatisticsSection title="Commission Statistics (For this Month)" />
					<Link href="/campaigncreate" className="mobile-primary-button mobile-campaign-page__full-link">Create New Campaign</Link>
				</div>
			</main>
			<MobileBottomNav />
		</div>
	);
}
