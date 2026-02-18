import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ServicesOverview from "./Pages/Services/Services";
import ServicePage from "./Pages/Services/components/ServicePage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/Projects/ProjectDetails";
import Footer from "./Pages/Footer/Footer";
import Privacy from "./components/privacy"; 
import AboutPage from "./Pages/About/AboutPage"; 


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ServicesOverview />
              <Projects />
              <About />
              <Contact />
            </>
          }
        />

        {/* Projects List Page */}
        
        <Route path="/projectDetails" element={<ProjectDetails />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/servicepage" element={<ServicePage />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;