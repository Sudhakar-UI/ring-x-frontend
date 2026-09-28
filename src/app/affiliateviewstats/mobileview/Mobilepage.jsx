"use client";
import React from "react";
import AffiliateMobileSurface from "../../components/AffiliateMobileSurface";
export default function Mobilepage() { return <AffiliateMobileSurface title="View Stats" eyebrow="Affiliate performance" sectionTitle="Click report" columns={[{ label: "Campaign", key: "campaign" }, { label: "Type", key: "type" }, { label: "Visitor", key: "visitor" }]} rows={[{ title: "instagram", date: "Today · 10:42 AM", campaign: "GlowUp", type: "Sale", visitor: "5.4%" }, { title: "instagram", date: "Yesterday · 4:10 PM", campaign: "GlowUp", type: "Sale", visitor: "5.4%" }, { title: "instagram", date: "Yesterday · 1:28 PM", campaign: "GlowUp", type: "Lead", visitor: "5.4%" }]} className="viewstats-mobile" />; }
