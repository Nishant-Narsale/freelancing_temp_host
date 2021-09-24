import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="Navabrhead">
      <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: "white" }}><div>LOGO</div></div>
      <div className="Navabarcomponents">
        <Link to="/"><section style={{ color: "white", textDecoration: "none!important" }}>Info</section></Link>
        <Link to="/home" style={{ color: "white", textDecoration: "none" }} ><section>Home</section></Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}><button className="signup">Login/Sign up</button></Link>
      </div>
    </div>
  );
}
