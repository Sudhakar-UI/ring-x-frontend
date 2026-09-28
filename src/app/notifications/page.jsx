"use client";
import { useEffect, useState } from "react";
import DesktopPage from "./desktopview/Desktoppage";
import MobilePage from "./mobileview/Mobilepage";

export default function Page() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const update = () => setMobile(window.innerWidth <= 767);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return mobile ? <MobilePage /> : <DesktopPage />;
}
