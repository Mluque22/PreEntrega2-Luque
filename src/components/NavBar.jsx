// NavBar.jsx
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Store NBA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/category/camisetas">Camisetas</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/shorts">Shorts</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/category/gorras">Gorras</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar; 
