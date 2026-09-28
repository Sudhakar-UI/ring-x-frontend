"use client";
import { useState } from "react";
import Link from "next/link";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

export default function MobilePage() {
  const [showPassword, setShowPassword] = useState(false);
  return <div className="pagecontent gridpagecontent innerpagegrid mobile-auth-page mobile-reset-page dashboardpage"><Userheader /><main className="mobile-auth-page__main">
    <div className="mobile-route__eyebrow">Account recovery</div><h1>Reset password</h1><p>Set a new password to get back into your account.</p><form className="mobile-form-card"><label>Email address<input type="email" /></label><label>Email OTP code<input inputMode="numeric" /></label><label>Password<div className="mobile-input-with-action"><input type={showPassword ? "text" : "password"} /><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></div></label><label>Confirm password<input type="password" /></label><button className="mobile-primary-button" type="submit">Reset password</button></form><p className="mobile-auth-footer">Already have an account? <Link href="/signin">Sign in</Link></p></main><MobileBottomNav /></div>;
}
