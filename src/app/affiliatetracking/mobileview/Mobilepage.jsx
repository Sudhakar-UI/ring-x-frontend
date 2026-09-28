"use client";
import React from "react";
import AffiliateMobileSurface from "../../components/AffiliateMobileSurface";
export default function Mobilepage() { return <AffiliateMobileSurface title="Affiliate Tracking" eyebrow="Campaign workspace" sectionTitle="Promoter performance" filterLabel="Last 30 days" stats={[{ label: "Total promoters", value: "12", icon: "total-promotors.svg" }, { label: "Total campaigns", value: "620", icon: "total-leads.svg" }, { label: "Conversion rate", value: "4.1%", icon: "converstions-rate.svg" }]} columns={[{ label: "Campaigns", key: "campaigns" }, { label: "Amount", key: "amount" }]} rows={[]} className="tracking-mobile" />; }
