import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from '../config';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the project data from the backend
    axios.get(`${API_BASE_URL}projects/`)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the project data!', error);
      });
  }, []);

  // Utility function to remove HTML tags
  const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <>
      <div className="container projects my-5" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((data) => (
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
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt={data.title}
                    style={{ 
                      width: "250px",
                      height: "200px",
                      border: '2px solid yellow',
                      borderRadius: '10px'
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{stripHtmlTags(data.description)}</p>
                  <a href={data.link} className="btn btn-primary mx-3" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                    Code
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

export default Projects;
