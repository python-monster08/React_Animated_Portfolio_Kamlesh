

// import React, { useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer"; // Import the Footer component
// import Aos from "aos";
// import "aos/dist/aos.css";
// import './App.css'; // Import your CSS file

// function App() {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   return (
//     <div className="app-container">
//       <Navbar />
//       <div className="content-container">
//         <Home />
//         <Experience />
//         <Skills />
//         <Projects />
//         <Contact />
//       </div>
//       <Footer /> {/* Add the Footer component here */}
//     </div>
//   );
// }

// export default App;



// import React, { useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Certificate from "./components/Certificate";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer"; // Import the Footer component
// import Aos from "aos";
// import "aos/dist/aos.css";
// import './App.css'; // Import your CSS file

// function App() {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   return (
//     <div className="app-container">
//       <Navbar />
//       <div className="content-container">
//         <Home />
//         <Experience />
//         <Skills />
//         <Projects />
//         <Certificate /> {/* Add the Certificate component here */}
//         <Contact />
//       </div>
//       <Footer /> {/* Add the Footer component here */}
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Import the Footer component
import Loader from "./components/Loader"; // Import the Loader component
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css'; // Import your CSS file

function App() {
  const [loading, setLoading] = useState(true); // Add global loading state

  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Set a timeout to remove the loader after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      {loading && <Loader />} {/* Conditionally render the loader */}
      <div className="content-container" style={{ display: loading ? 'none' : 'block' }}>
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
