// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
// import { CiLinkedin } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { IoCall } from "react-icons/io5";
// import { API_BASE_URL } from '../config';

// function Contact() {
//   const [contactInfo, setContactInfo] = useState(null);
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     // Fetch the contact data from the backend
//     axios.get(`${API_BASE_URL}social-media/`)
//       .then(response => {
//         setContactInfo(response.data[0]); // Assuming there's only one set of contact info
//       })
//       .catch(error => {
//         console.error('There was an error fetching the contact data!', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle form submission, e.g., sending an email
//     axios.post(`${API_BASE_URL}contact/`, { email, message })
//       .then(response => {
//         setFormSubmitted(true);
//         setEmail('');
//         setMessage('');
//       })
//       .catch(error => {
//         console.error('There was an error sending the message!', error);
//         setErrorMessage('There was an error sending the message.');
//       });
//   };

//   return (
//     <>
//       <div className="container contact  my-5" id='contact'>
//         <h1>CONTACT ME</h1>
//         {contactInfo && (
//           <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
//             <a href={contactInfo.instagram_link} target='_blank' className="items" rel="noopener noreferrer">
//               <FaInstagram className="icons" />
//             </a>
//             <a href={contactInfo.facebook_link} target='_blank' className="items" rel="noopener noreferrer">
//               <CiFacebook className="icons" />
//             </a>
//             <a href={contactInfo.linkedin_link} target='_blank' className="items" rel="noopener noreferrer">
//               <CiLinkedin className="icons" />
//             </a>
//             <a href={contactInfo.twitter_link} target='_blank' className="items" rel="noopener noreferrer">
//               <FaXTwitter className="icons" />
//             </a>
//             <a href={contactInfo.github_link} target='_blank' className="items" rel="noopener noreferrer">
//               <FaGithub className="icons" />
//             </a>
//             <a href={`mailto:${contactInfo.mail}`} target='_blank' className="items" rel="noopener noreferrer">
//               <SiGmail className="icons" />
//             </a>
//             <a href={`tel:${contactInfo.contact_no}`} className="items">
//               <IoCall className="icons" />
//             </a>
//           </div>
//         )}
//       </div>
//       <div className="row justify-content-center">
//           <div className="col-lg-6">
//             <form onSubmit={handleSubmit} className="contact-form">
//               <div className="form-group mb-3">
//                 <label htmlFor="email" className="form-label">Email address</label>
//                 <input 
//                   type="email" 
//                   className="form-control" 
//                   id="email" 
//                   placeholder="Enter your email" 
//                   value={email} 
//                   onChange={(e) => setEmail(e.target.value)} 
//                   required 
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <label htmlFor="message" className="form-label">Message</label>
//                 <textarea 
//                   className="form-control" 
//                   id="message" 
//                   rows="5" 
//                   placeholder="Enter your message" 
//                   value={message} 
//                   onChange={(e) => setMessage(e.target.value)} 
//                   required 
//                 ></textarea>
//               </div>
//               {formSubmitted && <div className="alert alert-success" role="alert">Message sent successfully!</div>}
//               {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
//               <div className="text-center">
//                 <button type="submit" className="btn btn-primary">Send Message</button>
//               </div>
//             </form>
//           </div>
//         </div>
//     </>
//   );
// }

// export default Contact;



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
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending an email
    axios.post(`${API_BASE_URL}contact/`, { email, message })
      .then(response => {
        setFormSubmitted(true);
        setEmail('');
        setMessage('');
        setTimeout(() => setFormSubmitted(false), 5000); // Hide success message after 5 seconds
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
        setErrorMessage('There was an error sending the message.');
        setTimeout(() => setErrorMessage(''), 5000); // Hide error message after 5 seconds
      });
  };

  return (
    <>
      <div className="container contact my-5" id='contact'>
        <h1 className="text-center mb-4">Contact Me</h1>
        {contactInfo && (
          <div className="d-flex justify-content-center mb-4" data-aos="zoom-in-up" data-aos-duration="1000">
            <a href={contactInfo.instagram_link} target='_blank' className="items mx-2" rel="noopener noreferrer">
              <FaInstagram className="icons" />
            </a>
            <a href={contactInfo.facebook_link} target='_blank' className="items mx-2" rel="noopener noreferrer">
              <CiFacebook className="icons" />
            </a>
            <a href={contactInfo.linkedin_link} target='_blank' className="items mx-2" rel="noopener noreferrer">
              <CiLinkedin className="icons" />
            </a>
            <a href={contactInfo.twitter_link} target='_blank' className="items mx-2" rel="noopener noreferrer">
              <FaXTwitter className="icons" />
            </a>
            <a href={contactInfo.github_link} target='_blank' className="items mx-2" rel="noopener noreferrer">
              <FaGithub className="icons" />
            </a>
            <a href={`mailto:${contactInfo.mail}`} target='_blank' className="items mx-2" rel="noopener noreferrer">
              <SiGmail className="icons" />
            </a>
            <a href={`tel:${contactInfo.contact_no}`} className="items mx-2">
              <IoCall className="icons" />
            </a>
          </div>
        )}

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5" 
                  placeholder="Enter your message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required 
                ></textarea>
              </div>
              {formSubmitted && <div className="alert alert-success" role="alert">Message sent successfully!</div>}
              {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
