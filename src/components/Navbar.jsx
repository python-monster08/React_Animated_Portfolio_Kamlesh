import React from "react";

function Navbar() {
  return (
    <>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <a className="left " href="/">
          <span className="left text-img text-center">PORTFOLIO</span>
        </a>
        <div className="right">
          {/* <a href="/">
            <img src={`assets/hero/my_logo.png`} style={{height:'200px'}} alt="my logo" />
          </a> */}
          <a href="#home" className="nav_items">Home</a>
          <a href="#experience" className="nav_items">Experience</a>
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Projects</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
