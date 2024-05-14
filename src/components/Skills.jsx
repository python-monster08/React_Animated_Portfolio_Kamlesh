import React from 'react'
import skills from './data/skills.json';

function Skills() {
  return (
    <>
      <div className="container skills my-5" id='skills'>
        <h1>SKILLS</h1>
        <div className="items">
        {skills.map((data)=>(
            <>
                <div className="item"  key={data.id} data-aos="flip-left" data-aos-duration="1000">
                  <img src={`/assets/${data.imgSrc}`} alt="" srcset="" />
                  <h3>{data.title}</h3>
                </div>
            </>
          ))}
          </div>
      </div>
    </>
  )
}

export default Skills

