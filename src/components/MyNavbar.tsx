import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Link className="nav-link" to="/">
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </Link>

        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
