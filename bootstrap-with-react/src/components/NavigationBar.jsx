import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg="primary" expand="md"> 
            <Navbar.Brand href="/" className="text-danger">Marvel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" activeclassname="active" className="mx-2 px-3 py-2 rounded" style={{ backgroundColor: 'white' }}>
                    Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/browse-characters" activeclassname="active" className="mx-2 px-3 py-2 rounded" style={{ backgroundColor: 'white' }}>
                    Browse Characters
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/character-details" activeclassname="active" className="mx-2 px-3 py-2 rounded" style={{ backgroundColor: 'white' }}>
                    Character Details
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/comics" activeclassname="active" className="mx-2 px-3 py-2 rounded" style={{ backgroundColor: 'white' }}>
                    Comics
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        // <NavLink to='/character-details/1017100' className='nav-link' activeclassname='active'>Character Details</NavLink>
    );
}

export default NavigationBar;