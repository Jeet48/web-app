import React from "react";
import { year } from "./vars";

function Footer() {
  return (
    <div className="footer">
    <a href="/">
    Privacy Policy
    </a>
      |@{year} Highradius Corporation.All rights Reserved
    </div>
  );
}

export default Footer;
