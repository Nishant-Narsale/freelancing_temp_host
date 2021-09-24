import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <div className="footercontentbox">
      <div className="footercontext">
        <div className="footinfobox">
          <h4 style={{ marginBottom: "1.5vw" }}>For Talent</h4>
          <p>
            How to Hire
            <br />
            Talent Marketplace
            <br />
            Project Catalog
            <br />
            Talent Scout
            <br />
            Enterprise
            <br /> Payroll Services
            <br /> Direct Contracts <br />
            Hire Worldwide <br />
            Hire in the USA
          </p>
        </div>
        <div className="footinfobox">
          <div className="footinfo">
            <h4 style={{ marginBottom: "1.5vw" }}>For Clients</h4>
            <p>
              How to How to Find Work
              <br />
              Direct Contracts
              <br />
              Find Freelance Jobs Worldwide
              <br />
              Find Freelance Jobs in the USA
            </p>
          </div>
        </div>
        <div className="footinfobox">
          <h4 style={{ marginBottom: "1.5vw" }}>Resources</h4>
          <p>
            Help &amp; Support
            <br />
            Success Stories
            <br />
            Upwork Reviews
            <br />
            Resources
            <br />
            Blog
            <br />
            Community
          </p>
        </div>
        <div className="footinfobox">
          <h4 style={{ marginBottom: "1.5vw" }}>Company</h4>
          <p>
            About Us
            <br />
            Leadership
            <br />
            Investor Relations
            <br />
            Careers
            <br />
            Upwork Foundation
            <br /> Press
            <br /> Contact Us <br />
            Trust, Safety &amp; Security
            <br />
            UK Modern Slavery Statement
          </p>
        </div>
      </div>
      <section class="linemaro"></section>
      <div className="networkingsites">
        <p style={{ padding: "1vw", color: "white",marginLeft:"5vw" }}>Follow us</p>
        <FacebookOutlinedIcon style={{ color: "white", marginTop: "0.8vw" }} />
        <LinkedInIcon style={{ color: "white", marginTop: "0.8vw" }} />
        <TwitterIcon style={{ color: "white", marginTop: "0.8vw" }} />
        <GitHubIcon style={{ color: "white", marginTop: "0.8vw" }} />
      </div>
      <section class="linemaro"></section>
      <p style={{color:"white",margin:"1.5vw",marginLeft:"7vw"}}>All rigth reserver copyright &copy; 2021 mangudon</p>
    </div>
  );
}
