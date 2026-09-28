"use client"; import Link from "next/link"; import Userheader from "../../components/Userheader"; import MobileBottomNav from "../../components/MobileBottomNav";
export default function MobilePage() {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-auth-page mobile-signin-page">
            <Userheader />
            <main className="mobile-auth-page__main">
                <div className="mobile-route__eyebrow">Welcome back</div>
                <h1>Sign in</h1>
                <p>Access your wallet, trades and affiliate workspace.</p>
                <form className="mobile-form-card">
                    <label>Username
                        <input autoComplete="username" />
                    </label>
                    <label>Password
                        <input type="password" autoComplete="current-password" />
                    </label>
                    <div className="mobile-auth-options">
                        <label>
                            <input type="checkbox" /> Remember me</label>
                        <Link href="/forgot">Forgot password?</Link>
                    </div>
                    <button className="mobile-primary-button" type="submit">Sign in</button>
                </form>
                <p className="mobile-auth-footer">New to ringx? <Link href="/signup"> Create an account</Link>
                </p>
            </main>
            <MobileBottomNav />
        </div>
    );
}