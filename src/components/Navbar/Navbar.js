import { Container, Nav, Navbar, Image } from "react-bootstrap";
import "./Navbar.css";
import ImgUser from "../../asset/user.png";

export default function Navbar1() {
  return (
    <Navbar className="background" expand="lg">
      <Container fluid>
        <Navbar.Brand
          style={{
            color: "white",
            marginTop: "5px",
            marginLeft: "100px",
            fontSize: "30px",
          }}
          href="#"
        >
          GoodGame
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", margin: "100px", fontSize: "20px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>

          <Nav.Link href="/home">
            <Image
              src={ImgUser}
              style={{ width: 40, height: 40, marginRight: "100px" }}
              rounded
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
