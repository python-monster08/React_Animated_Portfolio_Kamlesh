import React, { useEffect, useRef } from 'react'
import  pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'



function Home() {
  const typedRef = useRef(null)
  useEffect(() => {

    const options = {
    strings: ["Welcome to My Profile", "My name is Kamlesh Lovewanshi","I'm Python Developer", "Fullstact Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    }
    const typed = new Typed(typedRef.current, options)
    return() =>{
      typed.destroy()
    }
  }, [])
  return (
    <>
      <div className="container home" id='home'>
        <div className=" left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>
            
          </h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-2">Download Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
