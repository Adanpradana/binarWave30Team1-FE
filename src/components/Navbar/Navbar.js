import { Container, Nav, Navbar, Image } from "react-bootstrap";
import "./Navbar.css";
import ImgUser from "../../assets/user.png";
import { gotoPage } from "../../config/getRoutes";
import { routes } from "../../routes";

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
            {gotoPage(routes)}
          </Nav>

          <Nav.Link href="/auth/login">
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
