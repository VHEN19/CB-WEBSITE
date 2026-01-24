import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <h1 className="logo">CLIBERDUCHE</h1>

        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>

          <li className="dropdown">
            <a href="#services">Services</a>
            <ul className="dropdown-menu">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">IT Solutions</a></li>
              <li><a href="#services">Consulting</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#about">About Us</a>
            <ul className="dropdown-menu">
              <li><a href="#about">Company</a></li>
              <li><a href="#about">Mission & Vision</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#contact">Contact</a>
            <ul className="dropdown-menu">
              <li><a href="#contact">Email</a></li>
              <li><a href="#contact">Location</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
