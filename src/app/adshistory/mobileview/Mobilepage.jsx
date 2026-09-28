"use client";
import React from "react";
import AffiliateMobileSurface from "../../components/AffiliateMobileSurface";
export default function Mobilepage() 
{ return <AffiliateMobileSurface title="Advertisement History" eyebrow="Promoter workspace" sectionTitle="Your advertisements" filterLabel="Filters" filterFields={[{ label: "Search Promoter", key: "promoter", placeholder: "Enter promoter name" }, { label: "From", key: "from", type: "date" }, { label: "To", key: "to", type: "date" }]} emptyLabel="No advertisement history" className="ads-history-mobile" columns={[{ label: "Type", key: "type" }, { label: "Limit", key: "limit" }, { label: "Status", key: "status" }]} rows={[]} />; 
}
