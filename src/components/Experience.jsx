import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Fetch the experience data from the backend
    axios.get(`${API_BASE_URL}experiences/`)
      .then(response => {
        setExperiences(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the experience data!', error);
      });
  }, []);

  const parseHTMLToText = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return Array.from(doc.body.childNodes).map(node => node.textContent).join('\n');
  };

  return (
    <>
      <div className="container ex" id='experience'>
        <h1>EXPERIENCE</h1>
        {
          experiences.map((data) => {
            const parsedExperiences = parseHTMLToText(data.experiences);
            return (
              <div key={data.id} className="ex-item text-center my-5" data-aos="zoom-in" data-aos-duration="1000">
                <div className="left">
                  <img src={data.imageSrc} alt={data.role} />
                </div>
                <div className="right">
                  <h1>{data.role}</h1>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {"-"} {data.endDate || "Present"} {" "}
                    </span>
                    <span style={{ color: "yellow" }}>
                      {data.location}
                    </span>
                  </h4>
                  {parsedExperiences.split('\n').map((exp, index) => (
                    <p key={index} style={{ color: "yellow" }}>{exp}</p>
                  ))}
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Experience;
