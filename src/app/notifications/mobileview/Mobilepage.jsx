"use client";
import Userheader from "../../components/Userheader";
import MobileBottomNav from "../../components/MobileBottomNav";

const notices = [
    ["Today, 09:42", "Welcome to ringx", "Your account is ready to use."],
    ["Yesterday, 18:20", "Security reminder", "Keep your recovery phrase private."],
];

export default function MobilePage() {
    return <div className="pagecontent gridpagecontent innerpagegrid dashboardpage mobile-notifications-page">
        <Userheader />
        <div className="mobile-route__main">
            <div class="mobile-page-heading">
                <span>Activity center</span>
                <h1>Notifications</h1>
                <p>Stay up to date with your account and platform activity.</p>
            </div>
            <section className="mobile-notification-list">{notices.map(([date, title, text]) =>
                <article className="mobile-notification-card" key={title}>
                    <span>{date}</span>
                    <div>
                        <h2>{title}</h2><p>{text}</p>
                    </div>
                    <b aria-hidden="true">›</b>
                </article>
            )}</section>
        </div>
        <MobileBottomNav />
    </div>;
}
