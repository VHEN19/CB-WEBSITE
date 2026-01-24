import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
