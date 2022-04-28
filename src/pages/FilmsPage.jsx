import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
//import { useSearchParams } from 'react-router-dom' //används till Params för att kunna trycka fram o tillbaka på sidan
import StarWarsAPI from '../services/StarWarsAPI'
//import ListGroup from 'react-bootstrap/listgroup'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { getIdFromUrl } from "../helpers/index" //hämtar id:et från kakartärerna
import Spinner from 'react-bootstrap/Spinner'
//import { useSearchParams } from 'react-router-dom' //för att kunna lagra en förfrågan i en URLSearchParams.


//vår app
const FilmsPage = () => {
  const [films, setFilms] = useState("") //sätter listan till tom från början
  const [page, setPage] = useState(1) //sätter sidnumret till 1
  const [loading, setLoading] = useState(false) //så vi ska hinna vänta in API:et
  	
	const getFilms = async () => {

		// set loading to true
		setLoading(true)

		// Get films from api
		console.log("Set page is this: ", page);
		const data = await StarWarsAPI.getFilmsPage(page) //gets films only from page 1 as start and then the value of page
		
		// update films state
		setFilms(data)
		setLoading(false) 
		console.log(data);
	}

	// Get films from api when component is first mounted.
	useEffect(() => {
		getFilms(page)
	}, [page])


	//Here is what we ouput on our page
  	return (
    	<>
			<h1>Films</h1>

			<Row xs={1} md={3} className="g-4">

			{loading &&
			<h2>
			Loading ...
			</h2>
			}

			{loading}

			{films && films.results.map((films) => ( //mappar över films-array. finns det filmer så skriver den ut följande
				<Col key={films.episode_id}>
					<Card className="card">
						<Card.Header as="h5">{films.title}</Card.Header>
						<Card.Body>
							<Card.Text> <b>Episodes:</b> {films.episode_id} </Card.Text>
							<Card.Text><b>Released:</b>  {films.release_date} </Card.Text>
							<Card.Text>{films.characters.length} Characters </Card.Text>
							<Card.Body>
								<Button variant="outline-warning" as={Link} to={`/films/${getIdFromUrl(films.url)}`}>More info</Button> {/* hämtar ut filmens url för att använda helper.funktionen på för att spliytta ut id:et. Pga att episodens id/nr är ejk samma som id på url:en*/}
							</Card.Body> 
						</Card.Body>
					</Card>
				</Col>
				))}
			</Row>

			<div className="d-flex justify-content-between align-items-center mt-4">
				<Button className="previous"
					variant="outline-warning"
					disabled={!films.previous || loading} //disabled so it can´t be clicked when characters don´t have a previous value (null) OR when the page is still loading (to avoid discrepency/unsync of displayed page and number of page)
					onClick={() => setPage(page - 1)}
					>
					Previous Page
				</Button>

				{/* loading spinner */}
				{loading && (<div className="mt-4">
				<Spinner animation="border" role="status" variant="light">
					<span className="visually-hidden">Loading...</span>
				</Spinner></div>)}


				<div class="text-white">{page} / {Math.ceil(films.count/10)} </div> {/* sets page number to be value of page out of number of pages in the API for characters */ }
				<Button className="next" 
					variant="outline-warning"
					disabled={!films.next || loading } //disabled so it can´t be clicked when characters don´t have a next value (null) or when page is still loading
					onClick={() => setPage(page + 1)} 
					>
					Next Page
				</Button>
			</div>
    	</>
  	);
}


export default FilmsPage