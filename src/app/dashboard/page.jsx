'use client';

import { useEffect, useState } from 'react';
import MobileView from './mobileview/Mobilepage';
import DesktopView from './desktopview/Desktoppage';

export default function Page() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile === null) return null;
  // return isMobile ? <MobileView /> : <DesktopView />;
  if (isMobile) {
    console.log('Rendering MobileView');
    return <MobileView />;
  } else {
    console.log('Rendering DesktopView');
    return <DesktopView />;
  }

}
