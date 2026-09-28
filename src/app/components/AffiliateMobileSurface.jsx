"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faChartLine, faFilter, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import Userheader from "./Userheader";
import MobileBottomNav from "./MobileBottomNav";

export default function AffiliateMobileSurface({ title, eyebrow = "Workspace", stats = [], sectionTitle = "Recent activity", rows = [], columns = [], actions = [], backHref, filterLabel, filterFields = [], emptyLabel, className = "" }) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterValues, setFilterValues] = useState({});

    const updateFilter = (key, value) => setFilterValues((current) => ({ ...current, [key]: value }));
    const resetFilters = () => setFilterValues({});
    useEffect(() => {
        document.body.classList.add("affiliate-mobile-body");
        return () => document.body.classList.remove("affiliate-mobile-body");
    }, []);

    return (
        <div className={`pagecontent gridpagecontent innerpagegrid dashboardpage affiliate-mobile-page ${className}`}>
            <Userheader />
            <main className="affiliate-mobile-page__main">
                <div className="affiliate-mobile-page__heading">
                    <div>
                        <span className="affiliate-mobile-page__eyebrow">{eyebrow}</span>
                        <h1>{title}</h1>
                    </div>
                    {backHref && <Link href={backHref} className="affiliate-mobile-page__back" aria-label="Go back"><FontAwesomeIcon icon={faArrowLeft} /></Link>}
                </div>

                {stats.length > 0 && <section className="affiliate-mobile-page__stats" aria-label={`${title} summary`}>
                    {stats.map((stat) => <div className="affiliate-mobile-page__stat" key={stat.label}>
                        <span>{stat.label}</span><strong>{stat.value}</strong>
                        {stat.icon && <Image src={`assets/images/${stat.icon}`} alt="" />}
                    </div>)}
                </section>}

                {actions.length > 0 && <div className="affiliate-mobile-page__actions">
                    {actions.map((action) => <Link href={action.href} className="affiliate-mobile-page__action" key={action.label}><span>{action.icon || <FontAwesomeIcon icon={faChartLine} />}</span>{action.label}<FontAwesomeIcon icon={faArrowRight} /></Link>)}
                </div>}

                <div className="affiliate-mobile-page__section-title">
                    <h2>{sectionTitle}</h2>
                    {filterLabel ? <button type="button" aria-label="Open filters" onClick={() => setIsFilterOpen(true)}><FontAwesomeIcon icon={faFilter} /> {filterLabel}</button> : <span>{rows.length ? `${rows.length} records` : "Updated today"}</span>}
                </div>

                <section className="affiliate-mobile-page__list">
                    {rows.length ? rows.map((row, index) => <article className="affiliate-mobile-page__row" key={`${row.title || row.name || row.date}-${index}`}>
                        <div className="affiliate-mobile-page__row-head"><div><strong>{row.title || row.name || row.date}</strong><small>{row.subtitle || row.date || "Activity record"}</small></div>{row.status && <b className={`is-${row.status.toLowerCase()}`}>{row.status}</b>}</div>
                        <div className="affiliate-mobile-page__row-data">{columns.map((column) => <div key={column.key}><span>{column.label}</span><strong>{row[column.key] || "-"}</strong></div>)}</div>
                        {row.href && <Link href={row.href} className="affiliate-mobile-page__row-link">View details <FontAwesomeIcon icon={faArrowRight} /></Link>}
                    </article>) : <div className="affiliate-mobile-page__empty"><Image src="assets/images/nodata.svg" alt="" /><strong>{emptyLabel || "No records found"}</strong><span>New activity will appear here.</span></div>}
                </section>

                {className.includes("tracking") && <button type="button" className="affiliate-mobile-page__reset"><FontAwesomeIcon icon={faRotate} /> Reset filters</button>}
            </main>
            <MobileBottomNav />
            {isFilterOpen && <div className="affiliate-mobile-page__drawer-layer" role="presentation" onClick={() => setIsFilterOpen(false)}>
                <div className="affiliate-mobile-page__drawer" role="dialog" aria-modal="true" aria-labelledby="mobile-filter-title" onClick={(event) => event.stopPropagation()}>
                    <div className="affiliate-mobile-page__drawer-handle" />
                    <div className="affiliate-mobile-page__drawer-head">
                        <h2 id="mobile-filter-title">Filter advertisements</h2>
                        <button type="button" aria-label="Close filters" onClick={() => setIsFilterOpen(false)}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <form className="affiliate-mobile-page__filter-form" onSubmit={(event) => { event.preventDefault(); setIsFilterOpen(false); }}>
                        {filterFields.map((field) => <label key={field.key}>
                            <span>{field.label}</span>
                            <input type={field.type || "text"} placeholder={field.placeholder || ""} value={filterValues[field.key] || ""} onChange={(event) => updateFilter(field.key, event.target.value)} />
                        </label>)}
                        <div className="affiliate-mobile-page__drawer-actions">
                            <button type="button" className="is-reset" onClick={resetFilters}>Reset</button>
                            <button type="submit" className="is-apply">Search</button>
                        </div>
                    </form>
                </div>
            </div>}
        </div>
    );
}
