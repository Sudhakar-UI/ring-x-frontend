"use client";
import { useEffect, useState } from "react";
import MobileView from "./mobileview/Mobilepage";
import DesktopView from "./desktopview/Desktoppage";
export default function Page() { const [isMobile, setIsMobile] = useState(null); useEffect(() => { const resize = () => setIsMobile(window.innerWidth <= 767); resize(); window.addEventListener("resize", resize); return () => window.removeEventListener("resize", resize); }, []); if (isMobile === null) return null; return isMobile ? <MobileView /> : <DesktopView />; }
