"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck, faCloudArrowUp, faFileLines } from "@fortawesome/free-solid-svg-icons";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const steps = ["Register", "Application", "Done"];

function Field({ label, children, className = "" }) {
    return <label className={`beforeinvestors-form-mobile__field ${className}`}><span>{label}</span>{children}</label>;
}

export default function Mobilepage() {
    const [activeStep, setActiveStep] = useState(1);
    const [files, setFiles] = useState({});

    useEffect(() => {
        document.body.classList.add("innerpagebg", "affiliatepage");
        return () => document.body.classList.remove("innerpagebg", "affiliatepage");
    }, []);

    const handleFileChange = (event, key) => {
        const file = event.target.files?.[0];
        if (file) setFiles((current) => ({ ...current, [key]: file.name }));
    };

    const goNext = (event) => {
        event.preventDefault();
        setActiveStep(2);
    };

    return (
        <div className="pagecontent gridpagecontent innerpagegrid beforeinvestors-form-page beforeinvestors-form-mobile dashboardpage">
            <Userheader />
            <article className="gridparentbox">
            <div className="beforeinvestors-form-mobile__main">
                <Link href="/beforeinvestors" className="beforeinvestors-form-mobile__back"><FontAwesomeIcon icon={faArrowLeft} /> Back to projects</Link>

                <section className="beforeinvestors-form-mobile__intro">
                    <span className="beforeinvestors-form-mobile__eyebrow">RWA marketplace</span>
                    <h1>Create your investment token</h1>
                    <p>Launch your investment token on our secure RWA platform.</p>
                </section>

                <div className="beforeinvestors-form-mobile__title-row">
                    <div><span className="beforeinvestors-form-mobile__eyebrow">Application flow</span><h2>{activeStep === 2 ? "Application received" : "Submit your application"}</h2></div>
                    <span className="beforeinvestors-form-mobile__step-count">{activeStep + 1}/3</span>
                </div>

                <div className="beforeinvestors-form-mobile__steps" aria-label="Application progress">
                    {steps.map((step, index) => <div className={`beforeinvestors-form-mobile__step ${index <= activeStep ? "is-active" : ""}`} key={step}><span>{index < activeStep ? <FontAwesomeIcon icon={faCheck} /> : index + 1}</span><small>{step}</small></div>)}
                </div>

                {activeStep === 0 && (
                    <section className="beforeinvestors-form-mobile__panel beforeinvestors-form-mobile__register">
                        <FontAwesomeIcon icon={faFileLines} />
                        <h3>Ready to submit your project?</h3>
                        <p>Share your token details and supporting documents for verification.</p>
                        <button type="button" className="sitebtn" onClick={() => setActiveStep(1)}>Start application <span>→</span></button>
                    </section>
                )}

                {activeStep === 1 && (
                    <form className="beforeinvestors-form-mobile__panel" onSubmit={goNext}>
                        <div className="beforeinvestors-form-mobile__section-heading"><h3>Token details</h3><span>Step 2</span></div>
                        <div className="beforeinvestors-form-mobile__fields">
                            <Field label="Project name"><input required type="text" /></Field>
                            <Field label="Select network"><select defaultValue="Crypto influencer (Individual)"><option>Crypto influencer (Individual)</option><option>Social Media influencer</option><option>Developer / Trading Tools</option><option>Others</option></select></Field>
                            <Field label="Select type"><select defaultValue="English"><option>English</option><option>Espaniol</option></select></Field>
                            <Field label="Token price (USD)"><input type="text" inputMode="decimal" /></Field>
                            <Field label="Token name"><input type="text" /></Field>
                            <Field label="Symbol"><input type="text" /></Field>
                            <Field label="Decimal point"><input type="number" /></Field>
                            <Field label="Location"><select defaultValue="English"><option>English</option><option>Espaniol</option></select></Field>
                            <Field label="About"><textarea rows="3" /></Field>
                            <Field label="Description"><textarea rows="3" /></Field>
                            <Field label="Website"><input type="url" /></Field>
                        </div>

                        <div className="beforeinvestors-form-mobile__section-heading"><h3>Supporting documents</h3><span>Max 10 MB</span></div>
                        <div className="beforeinvestors-form-mobile__uploads">
                            {["Project document", "Ownership proof", "Identity document"].map((label, index) => <label className="beforeinvestors-form-mobile__upload" key={label}>
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                                <strong>{files[`file${index}`] || label}</strong>
                                <small>{files[`file${index}`] ? "Ready to upload" : "Tap to choose a file"}</small>
                                <input type="file" onChange={(event) => handleFileChange(event, `file${index}`)} />
                            </label>)}
                        </div>

                        <div className="beforeinvestors-form-mobile__actions"><button type="button" className="borderbtn" onClick={() => setActiveStep(0)}>Reset</button><button type="submit" className="sitebtn">Next <span>→</span></button></div>
                    </form>
                )}

                {activeStep === 2 && (
                    <section className="beforeinvestors-form-mobile__panel beforeinvestors-form-mobile__success">
                        <div className="beforeinvestors-form-mobile__success-icon"><FontAwesomeIcon icon={faCheck} /></div>
                        <h3>Your submission has been received</h3>
                        <p>Your application is under review. Results will be sent via on-site notifications within 1-2 working days.</p>
                        <Link href="/beforeinvestors" className="sitebtn">Back to projects</Link>
                    </section>
                )}
            </div>
            </article>
            <MobileBottomNav />
        </div>
    );
}
