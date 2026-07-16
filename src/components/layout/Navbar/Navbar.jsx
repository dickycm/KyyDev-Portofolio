import "./Navbar.scss";
import Container from "../../common/Container";
import Button from "../../common/Button";

function Navbar() {
  return (
    <header className="navbar">
      <Container>
        <div className="navbar__wrapper">

          <div className="navbar__logo">
            Kyy Dev
          </div>

          <nav className="navbar__menu">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <Button>
            Hire Me
          </Button>

        </div>
      </Container>
    </header>
  );
}

export default Navbar;