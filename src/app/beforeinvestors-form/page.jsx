"use client";

import { useEffect, useState } from "react";
import MobileView from "./mobileview/Mobilepage";
import DesktopView from "./desktopview/Desktoppage";

export default function InvestorsFormPage() {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 767);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile === null) return null;
    return isMobile ? <MobileView /> : <DesktopView />;
}
