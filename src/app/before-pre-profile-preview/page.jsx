"use client";

import { useEffect, useState } from "react";
import Mobilepage from "./mobileview/Mobilepage";
import Desktoppage from "./desktopview/Desktoppage";

export default function Page() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth <= 767);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  if (isMobile === null) return null;
  return isMobile ? <Mobilepage /> : <Desktoppage />;
}
