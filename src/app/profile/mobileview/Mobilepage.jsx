"use client"; 
import { useState } from "react";
 import Userheader from "../../components/Userheader";
  import MobileBottomNav from "../../components/MobileBottomNav";

   export default function MobilePage() { 
    const [showPassword, setShowPassword] = useState(false); 
    return (
<div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-profile-page">
	<Userheader />
	<main className="mobile-route__main">
    <div class="mobile-page-heading">
      <span>Account</span><h1>My profile</h1>
      </div>
	
		<section className="mobile-profile-card">
			<div className="mobile-profile-avatar">JT</div>
			<div>
				<h2>Johntestdemo</h2>
				<p>Not verified</p>
			</div>
			<button type="button" className="mobile-text-button">Verify</button>
		</section>
		<section className="mobile-form-card">
			<h2>Personal details</h2>
			<label>Username
				<input defaultValue="Johntestdemo" />
			</label>
			<label>Nick name
				<input placeholder="Add a nickname" />
			</label>
			<label>Email address
				<input type="email" placeholder="you@example.com" />
			</label>
			<label>Birth date
				<input type="date" />
			</label>
			<label>Country
				<select defaultValue="India">
					<option>India</option>
					<option>United Kingdom</option>
					<option>United States</option>
				</select>
			</label>
			<label>Address
				<textarea rows="3" placeholder="Add your address" />
			</label>
			<button className="mobile-primary-button" type="button">Save changes</button>
		</section>
		<section className="mobile-form-card">
			<h2>Change password</h2>
			<label>Current password
				<div className="mobile-input-with-action">
					<input type={showPassword ? "text" : "password"} />
					<button type="button" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
				</div>
			</label>
			<label>New password
				<input type="password" />
			</label>
			<label>Confirm password
				<input type="password" />
			</label>
			<button className="mobile-outline-button" type="button">Update password</button>
		</section>
	</main>
	<MobileBottomNav />
</div> 
    )
}