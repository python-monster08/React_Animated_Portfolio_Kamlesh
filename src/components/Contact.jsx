import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { API_BASE_URL } from '../config';

function Contact() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    // Fetch the contact data from the backend
    axios.get(`${API_BASE_URL}social-media/`)
      .then(response => {
        setContactInfo(response.data[0]); // Assuming there's only one set of contact info
      })
      .catch(error => {
        console.error('There was an error fetching the contact data!', error);
      });
  }, []);

  return (
    <>
      <div className="container contact my-5" id='contact'>
        <h1>CONTACT ME</h1>
        {contactInfo && (
          <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
            <a href={contactInfo.instagram_link} target='_blank' className="items" rel="noopener noreferrer">
              <FaInstagram className="icons" />
            </a>
            <a href={contactInfo.facebook_link} target='_blank' className="items" rel="noopener noreferrer">
              <CiFacebook className="icons" />
            </a>
            <a href={contactInfo.linkedin_link} target='_blank' className="items" rel="noopener noreferrer">
              <CiLinkedin className="icons" />
            </a>
            <a href={contactInfo.twitter_link} target='_blank' className="items" rel="noopener noreferrer">
              <FaXTwitter className="icons" />
            </a>
            <a href={contactInfo.github_link} target='_blank' className="items" rel="noopener noreferrer">
              <FaGithub className="icons" />
            </a>
            <a href={`mailto:${contactInfo.mail}`} target='_blank' className="items" rel="noopener noreferrer">
              <SiGmail className="icons" />
            </a>
            <a href={`tel:${contactInfo.contact_no}`} className="items">
              <IoCall className="icons" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
