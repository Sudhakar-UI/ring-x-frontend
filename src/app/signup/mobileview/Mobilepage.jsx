"use client";
import Link from "next/link";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";
export default function MobilePage() {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-auth-page mobile-signup-page">
            <Userheader />
            <main className="mobile-auth-page__main">
                <div className="mobile-route__eyebrow">Join the network</div>
                <h1>Create account</h1>
                <p>Start managing your wallet and growing your affiliate reach.</p>
                <form className="mobile-form-card">
                    <label>Username
                        <input autoComplete="username" />
                    </label>
                    <label>Email address
                        <input type="email" autoComplete="email" />
                    </label>
                    <label>Password
                        <input type="password" autoComplete="new-password" />
                    </label>
                    <label>Confirm password
                        <input type="password" autoComplete="new-password" />
                    </label>
                    <label className="mobile-check-row">
                        <input type="checkbox" /> I agree to the terms and privacy policy</label>
                    <button className="mobile-primary-button" type="submit">Create account</button>
                </form>
                <p className="mobile-auth-footer">Already registered?
                    <Link href="/signin"> Sign in</Link>
                </p>
            </main>
            <MobileBottomNav />
        </div>
    );
}