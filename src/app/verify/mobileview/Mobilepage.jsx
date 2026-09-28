"use client";
import Link from "next/link";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function MobilePage() {
	return (
		<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-auth-page mobile-verify-page">
			<Userheader />
			<main className="mobile-auth-page__main">
				<div className="mobile-route__eyebrow">Account security</div>
				<h1>Verify your account</h1>
				<p>Enter the 6-digit code sent to your email to finish signing in.</p>

				<form className="mobile-form-card">
					<label>Email address
						<input type="email" value="john@mailinator.com" readOnly autoComplete="email" />
					</label>
					<label>Verification code
						<input
							autoComplete="one-time-code"
							inputMode="numeric"
							maxLength={6}
							name="code"
							pattern="[0-9]{6}"
							placeholder="Enter 6-digit code"
							type="text"
						/>
					</label>
					<button className="mobile-primary-button" type="submit">Verify account</button>
				</form>

				<p className="mobile-auth-footer">Didn&apos;t receive the email? <Link href="/verify">Resend code</Link></p>
				<Link className="mobile-verify-page__back" href="/signin">Back to sign in</Link>
			</main>
			<MobileBottomNav />
		</div>
	);
}
