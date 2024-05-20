import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Fetch the certificates data from the backend
    axios.get(`${API_BASE_URL}certificates/`)
      .then(response => {
        setCertificates(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the certificates data!', error);
      });
  }, []);

  return (
    <>
      <div className="container certificates my-5" id="certificates">
        <h1>CERTIFICATES</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {certificates.map((data) => (
            <div
              key={data.id}
              className="my-4 col-sm-6 col-md-4 col-lg-3 mx-5"
            >
              <div
                className="card bg-dark text-light"
                style={{ 
                  width: "18rem",
                  border: '1px solid yellow',
                  borderRadius: '10px',
                  boxShadow: '5px 5px 10px 10px rgba(101,175,10, 0.5)'
                }}
                data-aos="flip-right" 
                data-aos-duration="1000"
              >
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text">Issued by: {data.issued_by}</p>
                  <p className="card-text">Issue date: {data.issue_date}</p>
                  <a href={data.certificate_file} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;
