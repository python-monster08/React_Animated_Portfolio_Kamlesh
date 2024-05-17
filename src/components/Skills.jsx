import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch the skills data from the backend
    axios.get(`${API_BASE_URL}skills/`)
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the skills data!', error);
      });
  }, []);

  return (
    <>
      <div className="container skills my-5" id='skills'>
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => (
            <div className="item" key={data.id} data-aos="flip-left" data-aos-duration="1000">
              <img src={data.imageSrc} alt={data.title} />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
