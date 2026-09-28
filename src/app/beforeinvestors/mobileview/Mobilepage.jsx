"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import MobileBottomNav from "../../components/MobileBottomNav";

const projects = [
    { image: "project1.png", type: "Real Estate", name: "Hillside StoneView Villa", place: "Montreal, Canada", payout: "Monthly payout", roi: "14%", min: "$100", investors: "1", target: "$10,000", funded: "1%", raised: "$100" },
    { image: "project2.png", type: "Real Estate", name: "Mild View Resort", place: "Austin, USA", payout: "Monthly payout", roi: "4%", min: "$100", investors: "2", target: "$100,000", funded: "0.4%", raised: "$400" },
    { image: "project3.png", type: "Real Estate", name: "Pastoral Landscape Marketplace", place: "India", payout: "Monthly payout", roi: "1%", min: "$100", investors: "1", target: "$10,000", funded: "0%", raised: "$0" },
    { image: "project4.png", type: "Real Estate", name: "Healing StoneView Villa", place: "Netherlands", payout: "Monthly payout", roi: "2%", min: "$100", investors: "1", target: "$100,000", funded: "1%", raised: "$1,000" },
    { image: "project5.png", type: "Fine Art", name: "Rolex", place: "Switzerland", payout: "Monthly payout", roi: "5%", min: "$800", investors: "1", target: "$400,000", funded: "0%", raised: "$0" },
    { image: "project6.png", type: "Tokenized Legal Contracts", name: "Nexcore AI", place: "Global", payout: "Monthly payout", roi: "10%", min: "$10", investors: "2", target: "$1,000", funded: "5%", raised: "$50" },
    { image: "project3.png", type: "Real Estate", name: "Tact New Project", place: "Netherlands", payout: "Monthly payout", roi: "5%", min: "$100", investors: "0", target: "$10,000", funded: "0%", raised: "$0" },
    { image: "project4.png", type: "Real Estate", name: "Test StoneViews Villas", place: "USA", payout: "Monthly payout", roi: "10%", min: "$100", investors: "1", target: "$100,000", funded: "10%", raised: "$10,000" }
];

const filters = ["All", "Real Estate", "Fine Art", "Luxury", "Metals", "Legal"];

export default function Mobilepage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [draftFilter, setDraftFilter] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        document.body.classList.add("investpagebg");
        return () => document.body.classList.remove("investpagebg");
    }, []);

    useEffect(() => {
        document.body.style.overflow = isFilterOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isFilterOpen]);

    const visibleProjects = activeFilter === "All"
        ? projects
        : projects.filter((project) => project.type.includes(activeFilter));

    return (
        <div className="pagecontent gridpagecontent innerpagegrid investorspage before-investorspage dashboardpage  before-investors-mobile">
            <Userheader />
            <article className="gridparentbox">
            <div className="before-investors-mobile__main">
                <div className="before-investors-mobile__heading">
                    <div>
                        <span className="before-investors-mobile__eyebrow">RWA marketplace</span>
                        <h1>Live Projects</h1>
                    </div>
                    <button
                        type="button"
                        className="before-investors-mobile__filter"
                        aria-label="Open project filters"
                        aria-expanded={isFilterOpen}
                        onClick={() => {
                            setDraftFilter(activeFilter);
                            setIsFilterOpen(true);
                        }}
                    >
                        <FontAwesomeIcon icon={faSliders} />
                    </button>
                </div>

                <div className="before-investors-mobile__filters" role="tablist" aria-label="Project categories">
                    {filters.map((filter) => (
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeFilter === filter}
                            className={activeFilter === filter ? "is-active" : ""}
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="before-investors-mobile__summary">
                    <h2>Open opportunities</h2>
                    <span>{visibleProjects.length} live</span>
                </div>

                <section className="before-investors-mobile__list" aria-label="Live investment projects">
                    {visibleProjects.map((project) => (
                        <article className="before-investors-mobile__card" key={project.name}>
                            <Image src={`assets/images/${project.image}`} alt="" className="before-investors-mobile__image" />
                            <div className="before-investors-mobile__cardbody">
                                <div className="before-investors-mobile__cardtop">
                                    <span className="before-investors-mobile__tag">{project.type}</span>
                                    <span className="before-investors-mobile__risk">Medium risk</span>
                                </div>
                                <h2>{project.name}</h2>
                                <p>{project.place} · 12 months · {project.payout}</p>
                                <div className="before-investors-mobile__return"><strong>{project.roi}</strong><span>ROI / year</span></div>
                                <div className="before-investors-mobile__stats">
                                    <div><strong>{project.min}</strong><span>Min invest</span></div>
                                    <div><strong>{project.investors}</strong><span>Investors</span></div>
                                    <div><strong>{project.target}</strong><span>Target</span></div>
                                </div>
                                <div className="before-investors-mobile__progress"><i style={{ width: project.funded }} /></div>
                                <div className="before-investors-mobile__funded"><span>{project.funded} funded</span><span>{project.raised} raised</span></div>
                                <Link href="/beforeinvestorsdetails" className="before-investors-mobile__cta">Invest Now <span>→</span></Link>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
</article>
            {isFilterOpen && (
                <div className="before-investors-mobile__drawer-layer" role="presentation" onClick={() => setIsFilterOpen(false)}>
                    <section
                        className="before-investors-mobile__drawer"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="investor-filter-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="before-investors-mobile__drawer-handle" />
                        <div className="before-investors-mobile__drawer-head">
                            <div>
                                <span className="before-investors-mobile__eyebrow">Browse marketplace</span>
                                <h2 id="investor-filter-title">Filter projects</h2>
                            </div>
                            <button type="button" className="before-investors-mobile__drawer-close" aria-label="Close filters" onClick={() => setIsFilterOpen(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="before-investors-mobile__drawer-options">
                            {filters.map((filter) => (
                                <button
                                    type="button"
                                    className={draftFilter === filter ? "is-selected" : ""}
                                    key={filter}
                                    onClick={() => setDraftFilter(filter)}
                                >
                                    <span>{filter}</span>
                                    {draftFilter === filter && <FontAwesomeIcon icon={faCheck} />}
                                </button>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="before-investors-mobile__drawer-apply"
                            onClick={() => {
                                setActiveFilter(draftFilter);
                                setIsFilterOpen(false);
                            }}
                        >
                            Show {draftFilter === "All" ? "all" : draftFilter} projects <span>→</span>
                        </button>
                    </section>
                </div>
            )}
            <Userfooter />
            <MobileBottomNav />
        </div>
    );
}
