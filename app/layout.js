import React from "react";
import PropTypes from "prop-types";
import "./globals.css";
import { Montserrat } from "next/font/google";
// React bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// React datepicker
import "react-datepicker/dist/react-datepicker.css";

/* React Slick */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CosmicNavbar from "@/components/ui/navbar";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cosmic Ocean",
  description: "The absence of evidence is not evidence of absence.",
};

export default function RootLayout({ children = undefined }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} stars`}>
        <div className="twinkling"></div>
        <CosmicNavbar />
        <main style={{ position: "relative", paddingBottom: "5rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
