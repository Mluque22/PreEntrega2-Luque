import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Store NBA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Shorts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gorras</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav style={{textDecoration:'none'}}> <CartWidget/></Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;