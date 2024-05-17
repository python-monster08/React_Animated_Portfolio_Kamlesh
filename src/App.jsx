

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



import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Import the Footer component
import Aos from "aos";
import "aos/dist/aos.css";
import './App.css'; // Import your CSS file

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
