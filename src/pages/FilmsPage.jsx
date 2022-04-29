import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { getIdFromUrl } from "../helpers/index" 
import StarWarsAPI from '../services/StarWarsAPI'
import Pagination from '../components/Pagination'


const FilmsPage = () => {
  const [films, setFilms] = useState("") //sets lists initial state to empty string
  const [page, setPage] = useState(1)  //sets page number to 1
  const [loading, setLoading] = useState(false) //to be able to wait for data loading from api
  	

	// Get films page from api when component is first mounted.
	useEffect(() => {
		const getFilms = async () => {

			// set loading to true
			setLoading(true)
	
			// Get films from api
			console.log("Set page is this: ", page);
			const data = await StarWarsAPI.getFilmsPage(page) //gets films only from page 1 as start and then the value of page
			
			// update films state
			setFilms(data)
			setLoading(false)
		}
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
				
			<Pagination 
				data={films}
				loading={loading}
				page={page}
				setPage={setPage}
				Spinner={Spinner}
			>
			</Pagination>	
			
    	</>
  	);
}


export default FilmsPage