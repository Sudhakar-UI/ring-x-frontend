"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../../public/assets/css/mobileview.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import "./globals.css";
import { Image } from "react-bootstrap";

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/favicon.png"
          type="image/png"
          sizes="32x32"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="userpanelpage">
        <main>
          {loading ? (
            <div className="pageloaderbox">
              <Image
                src="/assets/images/loader.gif"
                alt="Loading..."
                fluid
              />
            </div>
          ) : (
            <>
              {children}

              <ProgressBar
                height="2px"
                color="#237BAB"
                options={{ showSpinner: false }}
                shallowRouting
              />
            </>
          )}
        </main>
      </body>
    </html>
  );
}