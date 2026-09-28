"use client";
import { useEffect, useState } from "react";
import MobileView from "./mobileview/Mobilepage";
import DesktopView from "./desktopview/Desktoppage";
export default function Page() { const [isMobile, setIsMobile] = useState(null); useEffect(() => { const update = () => setIsMobile(window.innerWidth <= 767); update(); window.addEventListener("resize", update); return () => window.removeEventListener("resize", update); }, []); if (isMobile === null) return null; return isMobile ? <MobileView /> : <DesktopView />; }
