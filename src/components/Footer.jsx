// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>&copy; {new Date().getFullYear()} Kamlesh Lovewanshi Portfolio. All Rights Reserved.</p>
            <p>Created using the <b className='text-warning'>React.js & Django Rest Framework</b></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
