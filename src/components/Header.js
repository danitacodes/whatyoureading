import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar style={{ background: "#FFE8DF" }}>
      <Container>
        <Navbar.Brand href="/">📖 What You Reading?</Navbar.Brand>
        <Nav.Link>Signin</Nav.Link>
        <Nav.Link>Signup</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
