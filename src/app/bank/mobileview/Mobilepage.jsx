"use client";
import React, { useState } from "react";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const initialAccounts = [{ currency: "USD", bank: "Test Bank", type: "Savings", name: "Testname", number: "1234567" }, { currency: "EUR", bank: "Global Bank", type: "Current", name: "Testname", number: "7654321" }];

export default function Mobilepage() {
    const [accounts, setAccounts] = useState(initialAccounts);
    const [showAdd, setShowAdd] = useState(false);
    const [activeAccount, setActiveAccount] = useState(null);
    const [drawerType, setDrawerType] = useState(null);
    const [formValues, setFormValues] = useState({});

    const openUpdateDrawer = (account) => {
        setActiveAccount(account);
        setDrawerType("update");
        setFormValues({
            currency: account.currency,
            type: account.type,
            name: account.name,
            number: account.number,
            bank: account.bank,
        });
    };

    const closeDrawer = () => {
        setDrawerType(null);
        setActiveAccount(null);
        setFormValues({});
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormValues((current) => ({ ...current, [name]: value }));
    };

    const saveUpdatedAccount = () => {
        if (!activeAccount) return;

        setAccounts((current) => current.map((account) => account.number === activeAccount.number ? { ...account, ...formValues } : account));
        closeDrawer();
    };

    const confirmDelete = () => {
        if (!activeAccount) return;

        setAccounts((current) => current.filter((account) => account.number !== activeAccount.number));
        closeDrawer();
    };

    return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage bank-mobile-page">
        <Userheader />
        <main className="bank-mobile-page__main">
            <div className="mobile-page-heading bank-mobile-page__heading"><div><span>Wallet settings</span>
                <h1>Bank details</h1>
                <p>Manage accounts used for deposits and withdrawals.</p>
            </div>
                <button type="button" className="mobile-icon-button" aria-label="Add bank account" onClick={() => setShowAdd(true)}>+</button>
            </div>
            <section className="bank-mobile-page__list">{accounts.map((account) => <article key={`${account.currency}-${account.number}`}>
                <div className="bank-mobile-page__top">
                    <div className="bank-currency">{account.currency}</div>
                    <div><strong>{account.bank}</strong><span>{account.type} account</span></div>
                    <button type="button" aria-label={`More actions for ${account.bank}`}>...</button>
                </div><dl>
                    <div><dt>Account name</dt><dd>{account.name}</dd></div>
                    <div><dt>Account number</dt><dd>•••• {account.number.slice(-4)}</dd></div></dl>
                <div className="bank-mobile-page__actions"><button type="button" className="mobile-outline-button" onClick={() => openUpdateDrawer(account)}>Update</button><button type="button" className="mobile-outline-button is-danger" onClick={() => { setActiveAccount(account); setDrawerType("delete"); }}>Delete</button></div></article>)}</section></main><MobileBottomNav />{showAdd && <div className="mobile-action-sheet" onClick={() => setShowAdd(false)}><div onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" /><h2>Add bank account</h2><label>Bank name<input placeholder="Enter bank name" /></label><label>Account number<input inputMode="numeric" placeholder="Enter account number" /></label><button type="button" className="mobile-primary-button" onClick={() => setShowAdd(false)}>Save account</button></div></div>}{drawerType && activeAccount && <div className="mobile-action-sheet" onClick={closeDrawer}><div onClick={(event) => event.stopPropagation()}><span className="mobile-action-sheet__handle" />{drawerType === "update" ? <><h2>Update bank details</h2><label>Currency<select name="currency" value={formValues.currency || ""} onChange={handleFormChange}><option value="USD">USD</option><option value="EUR">EUR</option></select></label><label>Account type<input name="type" value={formValues.type || ""} onChange={handleFormChange} /></label><label>Bank name<input name="bank" value={formValues.bank || ""} onChange={handleFormChange} /></label><label>Account name<input name="name" value={formValues.name || ""} onChange={handleFormChange} /></label><label>Account number<input name="number" value={formValues.number || ""} onChange={handleFormChange} /></label><button type="button" className="mobile-primary-button" onClick={saveUpdatedAccount}>Save changes</button></> : <><h2>Delete bank detail</h2><p>Are you sure you want to remove this bank account?</p><div className="bank-mobile-page__actions"><button type="button" className="mobile-outline-button" onClick={closeDrawer}>Cancel</button><button type="button" className="mobile-outline-button is-danger" onClick={confirmDelete}>Confirm</button></div></>}</div></div>}</div>;
}
