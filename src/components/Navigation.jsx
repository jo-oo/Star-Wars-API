import Container from 'react-bootstrap/Container'//import container that wraps the Navbar
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom' //NavLink gives the link a class of Active = turns light when active

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">{/*stop showing Navbar from medium breakpoint. Shows dropdwon menue*/}
			<Container>
				<Navbar.Brand as={Link} to="/">Star Wars Galaxy</Navbar.Brand>{/*App title. Rendered like a link. Page then don´t need to reload every time */}	
				<Navbar.Toggle aria-controls="basic-navbar-nav" /> {/*toggle dropdowmn or not*/}
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/search">Star Search</Nav.Link>
						<Nav.Link as={NavLink} to="/characters" end>Characters</Nav.Link> {/*"end" to stop shining when not at link */}
						<Nav.Link as={NavLink} to="/films" end>Films</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
