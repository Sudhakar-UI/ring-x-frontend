"use client";

import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { usePathname } from "next/navigation";
import "./MobileBottomNav.css";

const navItems = [
  { href: "/dashboard", label: "Home", icon: "sm-dashboard.svg" },
  { href: "/wallet", label: "Wallet", icon: "sm-wallet.svg" },
  { href: "/", label: "Predict", icon: "sm-prediction.svg", fab: true },
  { href: "/investors", label: "RWA", icon: "sm-rwa.svg" },
];

const MobileBottomNav = () => {
  const pathname = usePathname();

  const openMore = () => {
    window.dispatchEvent(new CustomEvent("open-mobile-menu"));
  };

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {navItems.map((item) => {
        const isActive = pathname === item.href && !item.fab;

        return (
          <Link
            href={item.href}
            className={`mobile-bottom-nav__item${isActive ? " is-active" : ""}${item.fab ? " mobile-bottom-nav__item--fab" : ""}`}
            aria-current={isActive ? "page" : undefined}
            key={item.label}
          >
            <span className="mobile-bottom-nav__icon">
              <Image
                src={`assets/images/${item.icon}`}
                alt=""
                width={20}
                height={20}
              />
            </span>
            <span className="mobile-bottom-nav__label">{item.label}</span>
          </Link>
        );
      })}

      <button
        type="button"
        className="mobile-bottom-nav__item mobile-bottom-nav__item--more"
        aria-haspopup="dialog"
        onClick={openMore}
      >
        <span className="mobile-bottom-nav__icon">
          <Image src="assets/images/moreicon.svg" alt="" width={18} height={18} />
        </span>
        <span className="mobile-bottom-nav__label">More</span>
      </button>
    </nav>
  );
};

export default MobileBottomNav;
