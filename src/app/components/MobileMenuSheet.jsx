"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearch,
  faChevronDown,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

// Same destinations as the desktop Leftsidemenu, grouped for the mobile sheet.
const NAV_GROUPS = [
  { name: "Dashboard", href: "/dashboard", icon: "sm-dashboard.svg" },
  { name: "Wallet", href: "/wallet", icon: "sm-wallet.svg" },
  { name: "Monetize", href: "/", icon: "sm-monetize.svg" },
  { name: "Predictions", href: "/", icon: "sm-prediction.svg" },
  { name: "RWA", href: "/investors", icon: "sm-rwa.svg" },
  {
    name: "Affiliate",
    icon: "sm-affiliate.svg",
    items: [
      { name: "Campaign Manager", href: "/campaignsmanager" },
      { name: "Performance Report", href: "/campaignreport" },
      { name: "Affiliate Tracking", href: "/affiliatetracking" },
      { name: "Billing", href: "/campaignbilling" },
      { name: "Payment History", href: "/campaignpayouthistory" },
    ],
  },
  {
    name: "P2P Trade",
    icon: "sm-p2p.svg",
    items: [
      { name: "Overview", href: "/overview" },
      { name: "Buy/Sell", href: "/buysell" },
      { name: "Post Trade", href: "/posttrade" },
      { name: "Trade Message", href: "/trademessage" },
      { name: "Dispute Trade", href: "/disputetrade" },
      { name: "Ads History", href: "/adshistory" },
      { name: "Feedback", href: "/feedback" },
    ],
  },
  {
    name: "Agent",
    icon: "sm-agent.svg",
    items: [
      { name: "Cash in", href: "/cashin" },
      { name: "Cash out", href: "/cashout" },
      { name: "Payment Request", href: "/paymentrequest" },
    ],
  },
  {
    name: "History",
    icon: "sm-history.svg",
    items: [
      { name: "Deposit History", href: "/deposithistory" },
      { name: "Withdraw History", href: "/withdrawhistory" },
    ],
  },
  { name: "Transfer", href: "/transfer", icon: "sm-transfer.svg" },
  { name: "Bank", href: "/bank", icon: "sm-bank.svg" },
];

const ACCOUNT_ITEMS = [
  { name: "Profile", href: "/profile", icon: "sm-profile.svg" },
  { name: "Notifications", href: "/notifications", icon: "sm-notification.svg" },
  { name: "Support", href: "/support", icon: "support-new.svg" },
  { name: "Settings", href: "/security", icon: "sm-settings.svg" },
];

const MobileMenuSheet = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-mobile-menu", handleOpen);
    return () => window.removeEventListener("open-mobile-menu", handleOpen);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-lock", open);
    return () => document.body.classList.remove("mobile-menu-lock");
  }, [open]);

  useEffect(() => {
    // Auto-expand the group that matches the current page.
    const active = NAV_GROUPS.find(
      (g) => g.items && g.items.some((i) => i.href === pathname)
    );
    setOpenGroup(active ? active.name : null);
  }, [pathname]);

  const close = () => setOpen(false);

  const q = query.trim().toLowerCase();
  const filteredGroups = useMemo(() => {
    if (!q) return NAV_GROUPS;
    return NAV_GROUPS.filter((g) => {
      if (g.name.toLowerCase().includes(q)) return true;
      if (g.items) return g.items.some((i) => i.name.toLowerCase().includes(q));
      return false;
    });
  }, [q]);

  const filteredAccount = useMemo(() => {
    if (!q) return ACCOUNT_ITEMS;
    return ACCOUNT_ITEMS.filter((a) => a.name.toLowerCase().includes(q));
  }, [q]);

  const isEmpty = q && filteredGroups.length === 0 && filteredAccount.length === 0;

  return (
    <div className={`mobile-menu-root${open ? " is-open" : ""}`}>
      <div className="mobile-menu-scrim" onClick={close} aria-hidden="true"></div>
      <aside
        className="mobile-menu-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <div className="mobile-menu-grab" aria-hidden="true"></div>

        <div className="mobile-menu-idcard">
          <div className="mobile-menu-avatar">AK</div>
          <div className="mobile-menu-who">
            <b>Aman Khatri</b>
            <span>Verified</span>
          </div>
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={close}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <label className="mobile-menu-search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            placeholder="Search menu"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <div className="mobile-menu-body">
          <div className="mobile-menu-label">Main</div>
          {filteredGroups.map((g) => {
            const isActive = g.href
              ? pathname === g.href
              : (g.items || []).some((i) => i.href === pathname);

            if (!g.items) {
              return (
                <div className="mobile-menu-group" key={g.name}>
                  <Link
                    href={g.href}
                    className={`mobile-menu-item${isActive ? " is-active" : ""}`}
                    onClick={close}
                  >
                    <span className="mobile-menu-ico">
                      <Image src={`assets/images/${g.icon}`} alt="" width={19} height={19} />
                    </span>
                    <span className="mobile-menu-name">{g.name}</span>
                  </Link>
                </div>
              );
            }

            const expanded = q ? true : openGroup === g.name;
            const shownItems = q
              ? g.items.filter(
                  (i) =>
                    g.name.toLowerCase().includes(q) ||
                    i.name.toLowerCase().includes(q)
                )
              : g.items;

            return (
              <div
                className={`mobile-menu-group${expanded ? " is-open" : ""}`}
                key={g.name}
              >
                <button
                  type="button"
                  className={`mobile-menu-item${isActive && !expanded ? " is-active" : ""}`}
                  aria-expanded={expanded}
                  onClick={() => setOpenGroup(expanded ? null : g.name)}
                >
                  <span className="mobile-menu-ico">
                    <Image src={`assets/images/${g.icon}`} alt="" width={19} height={19} />
                  </span>
                  <span className="mobile-menu-name">{g.name}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="mobile-menu-chev" />
                </button>
                <div className="mobile-menu-sub">
                  <div>
                    <ul>
                      {shownItems.map((i) => (
                        <li key={i.href}>
                          <Link
                            href={i.href}
                            className={pathname === i.href ? "is-active" : ""}
                            onClick={close}
                          >
                            {i.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

          {isEmpty && <div className="mobile-menu-empty">No menu items match.</div>}

          {(!q || filteredAccount.length > 0) && (
            <div>
              <div className="mobile-menu-label">Account</div>
              <div className="mobile-menu-account">
                {filteredAccount.map((a) => (
                  <Link
                    href={a.href}
                    key={a.name}
                    className={`mobile-menu-tile${pathname === a.href ? " is-active" : ""}`}
                    onClick={close}
                  >
                    <Image src={`assets/images/${a.icon}`} alt="" width={19} height={19} />
                    {a.name}
                  </Link>
                ))}
              </div>
              <Link href="/" className="mobile-menu-logout" id="logoutlink" onClick={close}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Log out
              </Link>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default MobileMenuSheet;
