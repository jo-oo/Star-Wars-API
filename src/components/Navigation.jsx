import Container from 'react-bootstrap/Container'//importerar container som omsluter Navbaren
import Navbar from 'react-bootstrap/Navbar' //importerar Navbar från React Bootstraqp så vi kan använda den här
import Nav from 'react-bootstrap/Nav'//importerar
import { Link, NavLink } from 'react-router-dom' //NavLink gör att länken får en klass som heter Active så nöär du är inne på en roiute så får den klassen aktiv. = blir ljusblå riunt. Lägger den inte runt första aidan för den ska inte vara upplyst det är inte fint


//lägg in Bootstratp Navbar. (kan kopiera från Bootstrap.com)
const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">{/* slutar visa Navbar fr.o.m medium breakpoint. Visar dropdwon meny*/}
			<Container>
				<Navbar.Brand as={Link} to="/">Star Wars Galaxy</Navbar.Brand>{/*titeln på appen. Säger aqtt den ska renderas som en Link. Så när dy trycker på hem-knappen så kommer du till todos-listan better todos */}	
																	{/*vi vill använda länkar fgör att inte ladda om sidan varje gång */}
				<Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* togglar om den ska vara dropdowmn eller ej*/}
				<Navbar.Collapse id="basic-navbar-nav">{/**toggle styr collapsen*/}
					<Nav className="ms-auto">{/**ms start auto = auto margin vänster*/}
						<Nav.Link as={NavLink} end to="/search">Star Search</Nav.Link>
						<Nav.Link as={NavLink} to="/characters" end>Characters</Nav.Link> {/*Vi klan använda NavLink för att highlighta bara när du är inne på den länken. Slriv "end" för att sluta lysa när fu inte ä inne på länken längre */}
						<Nav.Link as={NavLink} to="/films" end>Films</Nav.Link>
						<Nav.Link as={NavLink} to="/characters/films" end>x</Nav.Link>
						<Nav.Link as={NavLink} to="/films/characters" end>x</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
