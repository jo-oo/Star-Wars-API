import Container from 'react-bootstrap/Container'//importerar container som omsluter Navbaren
import Navbar from 'react-bootstrap/Navbar' //importerar Navbar från React Bootstraqp så vi kan använda den här
import Nav from 'react-bootstrap/Nav'//importerar
import { Link, NavLink } from 'react-router-dom' //NavLink gör att länken får en klass som heter Active så nöär du är inne på en roiute så får den klassen aktiv. = blir ljusblå riunt. Lägger den inte runt första aidan för den ska inte vara upplyst det är inte fint
import Button from 'react-bootstrap/Button'

//tar in data & page in i komponenten
const Pagination = ( { data, loading, page, setPage, Spinner } ) => {
	return ( 
        <> {/*using a Fragment as a container*/}
            <div className="d-flex justify-content-between align-items-center mt-4">
				<Button className="previous"
					variant="outline-warning"
					//style={{ backgroundColor: "#00B1E1" }}
					disabled={!data.previous || loading} //disabled so it can´t be clicked when characters don´t have a previous value (null) OR when the page is still loading (to avoid discrepency/unsync of displayed page and number of page)
					onClick={() => setPage(page - 1)}
					>
					Previous Page
				</Button>

				{/* loading spinner */}
				{loading && (<div className="mt-4">
				<Spinner animation="border" role="status" variant="light">
 					<span className="visually-hidden">Loading...</span>
				</Spinner></div>)}

				<div class="text-white">{page} / {Math.ceil(data.count/10)} </div> {/* sets page number to be value of page out of number of pages in the API for characters */ }
				
				<Button className="next"
					variant="outline-warning"
					disabled={!data.next || loading } //disabled so it can´t be clicked when characters don´t have a next value (null) or when page is still loading
					onClick={() => setPage(page + 1)} 
					>
					Next Page
				</Button>
			</div>

        </> 
	)
}

export default Pagination
