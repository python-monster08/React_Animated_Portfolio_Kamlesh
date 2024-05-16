// import React from 'react'
// import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
// import { CiLinkedin } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { IoCall } from "react-icons/io5";

// function Contact() {
//   return (
//     <>
//       <div className="container contact my-5" id='contact'>
//         <h1>CONTACT ME</h1>
//         <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
//           <a href='https://www.instagram.com/' target='_blank' className="items">
//             <FaInstagram className="icons" />
//           </a>
//           <a href='https://www.facebook.com/' target='_blank' className="items">
//             <CiFacebook className="icons" />
//           </a>
//           <a href='https://in.linkedin.com/in/kamlesh-lovewanshi' target='_blank' className="items">
//             <CiLinkedin className="icons" />
//           </a>
//           <a href='https://twitter.com/' target='_blank' className="items">
//             <FaXTwitter className="icons" />
//           </a>
//           <a href='https://github.com/python-monster08' target='_blank' className="items">
//             <FaGithub className="icons" />
//           </a>
//           <a href='mailto:kamleshlovewanshi2000@gmail.com' target='_blank' className="items">
//             <SiGmail className="icons" />
//           </a>
//           <a href='tel:+918823857525' className="items">
//             <IoCall className="icons" />
//           </a>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Contact


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

function Contact() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    // Fetch the contact data from the backend
    axios.get('http://127.0.0.1:8000/api/social-media/')
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
