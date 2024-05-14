import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

function Contact() {
  return (
    <>
      <div className="container contact my-5" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href='https://www.instagram.com/' target='_blank' className="items">
            <FaInstagram className="icons" />
          </a>
          <a href='https://www.facebook.com/' target='_blank' className="items">
            <CiFacebook className="icons" />
          </a>
          <a href='https://in.linkedin.com/in/kamlesh-lovewanshi' target='_blank' className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href='https://twitter.com/' target='_blank' className="items">
            <FaXTwitter className="icons" />
          </a>
          <a href='https://github.com/python-monster08' target='_blank' className="items">
            <FaGithub className="icons" />
          </a>
          <a href='mailto:kamleshlovewanshi2000@gmail.com' target='_blank' className="items">
            <SiGmail className="icons" />
          </a>
          <a href='tel:+918823857525' className="items">
            <IoCall className="icons" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
