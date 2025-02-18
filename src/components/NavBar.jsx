import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { useCart } from "../context/CartContext";  // Importamos el contexto del carrito

function NavBar() {
    const { cart } = useCart();  // Usamos el contexto para obtener el carrito

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);  // Calcula la cantidad total de productos en el carrito

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Store NBA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/category/camisetas">Camisetas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/category/shorts">Shorts</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/category/gorras">Gorras</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink to="/checkout"> {/* Enlace al carrito/checkout */}
                            <CartWidget totalItems={totalItems} />  {/* Pasamos la cantidad de productos al CartWidget */}
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
