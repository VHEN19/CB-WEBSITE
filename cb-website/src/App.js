import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ServicesOverview from "./Pages/Services/servicesOverview";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import ProjectsList from "./Pages/Projects/ProjectList";
import Footer from "./Pages/Footer/Footer";
import Privacy from "./components/privacy";


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
        <Route path="/projectlist" element={<ProjectsList />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/services" element={<ServicesOverview />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
