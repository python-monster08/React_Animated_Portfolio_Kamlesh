// import React, { useEffect, useRef } from 'react'
// import  pdf from '../pdf/resume.pdf'
// import hero from './data/hero.json'
// import Typed from 'typed.js'



// function Home() {
//   const typedRef = useRef(null)
//   useEffect(() => {

//     const options = {
//     strings: ["Welcome to My Profile", "My name is Kamlesh Lovewanshi","I'm Python Developer", "Fullstact Developer"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     loop: true,
//     }
//     const typed = new Typed(typedRef.current, options)
//     return() =>{
//       typed.destroy()
//     }
//   }, [])
//   return (
//     <>
//       <div className="container home" id='home'>
//         <div className=" left" data-aos="fade-up-right" data-aos-duration="1000">
//           <h1 ref={typedRef}>
            
//           </h1>
//           <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-2">Download Resume</a>
//         </div>
//         <div className="right">
//           <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
//             <img src={`/assets/${hero.imgSrc}`} alt="hero" className="img-fluid" />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home



// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import pdf from '../pdf/resume.pdf';
// import hero from './data/hero.json';
// import Typed from 'typed.js';

// function Home() {
//   const typedRef = useRef(null);
//   const [typedStrings, setTypedStrings] = useState([]);
//   const [allStrings, setAllStrings] = useState([]);

//   useEffect(() => {
//     // Fetch the typed strings from the backend
//     axios.get('http://127.0.0.1:8000/api/title-strings/')
//       .then(response => {
//         setTypedStrings(response.data.strings);
//         setAllStrings(response.data.strings); // Store all strings for display
//       })
//       .catch(error => {
//         console.error('There was an error fetching the typed strings!', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (typedStrings.length > 0) {
//       const options = {
//         strings: typedStrings,
//         typeSpeed: 100,
//         backSpeed: 100,
//         loop: true,
//       };
//       const typed = new Typed(typedRef.current, options);
//       return () => {
//         typed.destroy();
//       };
//     }
//   }, [typedStrings]);

//   return (
//     <>
//       <div className="container home" id='home'>
//         <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
//           <h1 ref={typedRef}></h1>
//           <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-2">Download Resume</a>
//         </div>
//         <div className="right">
//           <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
//             <img src={`/assets/${hero.imgSrc}`} alt="hero" className="img-fluid" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;



// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import Typed from 'typed.js';

// function Home() {
//   const typedRef = useRef(null);
//   const [typedStrings, setTypedStrings] = useState([]);
//   const [allStrings, setAllStrings] = useState([]);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     // Fetch the typed strings from the backend
//     axios.get('http://127.0.0.1:8000/api/title-strings/')
//       .then(response => {
//         setTypedStrings(response.data.strings);
//         setAllStrings(response.data.strings); // Store all strings for display
//       })
//       .catch(error => {
//         console.error('There was an error fetching the typed strings!', error);
//       });

//     // Fetch the profile data from the backend
//     axios.get('http://127.0.0.1:8000/api/profiles/1/') // Change the id as needed
//       .then(response => {
//         setProfile(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the profile data!', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (typedStrings.length > 0) {
//       const options = {
//         strings: typedStrings,
//         typeSpeed: 100,
//         backSpeed: 100,
//         loop: true,
//       };
//       const typed = new Typed(typedRef.current, options);
//       return () => {
//         typed.destroy();
//       };
//     }
//   }, [typedStrings]);

//   return (
//     <>
//       <div className="container home" id='home'>
//         <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
//           <h1 ref={typedRef}></h1>
//           {profile && (
//             <>
//               <a href={profile.resume} download="Resume.pdf" className="btn btn-outline-warning my-2">Download Resume</a>
//             </>
//           )}
//         </div>
//         <div className="right">
//           <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
//             {profile && (
//               <img src={profile.imageSrc} alt="hero" className="img-fluid" />
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;



// Date 17-05-2016

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Typed from 'typed.js';

function Home() {
  const typedRef = useRef(null);
  const [typedStrings, setTypedStrings] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch the typed strings from the backend
    axios.get('http://127.0.0.1:8000/api/title-strings/')
      .then(response => {
        console.log('API Response for Typed Strings:', response);
        if (response.data && response.data.strings) {
          setTypedStrings(response.data.strings);
          console.log('Typed Strings:', response.data.strings);
        } else {
          console.error('Typed strings not found in the response:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the typed strings!', error);
      });

    // Fetch the profile data from the backend
    axios.get('http://127.0.0.1:8000/api/profiles/1/') // Change the id as needed
      .then(response => {
        console.log('Profile Data:', response.data);
        setProfile(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profile data!', error);
      });
  }, []);

  useEffect(() => {
    if (typedStrings.length > 0 && typedRef.current) {
      const options = {
        strings: typedStrings,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      };
      console.log('Initializing Typed.js with options:', options);
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    } else {
      console.log('Typed.js not initialized. typedRef.current:', typedRef.current, 'typedStrings:', typedStrings);
    }
  }, [typedStrings]);

  return (
    <>
      <div className="container home" id='home'>
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>Loading...</h1>
          {profile && (
            <>
              <a href={profile.resume} download="Resume.pdf" className="btn btn-outline-warning my-2">Download Resume</a>
            </>
          )}
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            {profile && (
              <img src={profile.imageSrc} alt="hero" className="img-fluid" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
