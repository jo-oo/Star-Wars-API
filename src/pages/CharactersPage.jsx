import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from "../helpers/index" //gets id from characters
import Pagination from '../components/Pagination'


const CharactersPage = () => {
	const [characters, setCharacters] = useState("") //sets lists initial state to empty string
	const [page, setPage] = useState(1) //sets page number to 1
	const [loading, setLoading] = useState(false) //to be able to wait for data loading from api
  
	const getCharacters = async () => {

		// set loading to true
		setLoading(true)

		// Get characters from api
		console.log("Set page is this: ", page);
		const data = await StarWarsAPI.getCharactersPage(page) //gets characters only from page 1 as start and then the value of page
	
		// update characters state
		setCharacters(data)
		setLoading(false) 
	}

	// Get characters page from api when component is first mounted
	useEffect(() => {
		getCharacters(page)
	}, [page])


	//Here is what we ouput on our page
	return (
		<> 

			<h1>Characters</h1>

			<Row xs={1} md={3} className="g-4">

				{loading &&
        		<h2>
          		Loading ...
        		</h2>
     			 }

				{loading}
			
				{characters && characters.results.map((characters) => ( //mappar över characters-array. finns det charactaers så skriver den ut följande
					<Col> {/*key={films.episode_id}*/}
						<Card className="card">
							<Card.Header as="h5">{characters.name}</Card.Header>{/*outprints characters name */}
							<Card.Body>
								<Card.Text class="text-dark"><b>Gender:</b> {characters.gender} </Card.Text>
								<Card.Text><b>Born:</b> {characters.birth_year} </Card.Text>
								<Card.Text><b>In:</b> {characters.films.length} films </Card.Text>
								<Card.Body>
									<Button variant="outline-warning" as={Link} to={`/characters/${getIdFromUrl(characters.url)}`}>More info</Button> {/* hämtar ut filmens url för att använda helper.funktionen på för att spliytta ut id:et. Pga att episodens id/nr är ejk samma som id på url:en*/}
								</Card.Body> 
							</Card.Body>
						</Card>
					</Col>
				))}
	  		</Row>
		
			<Pagination 
				data={characters}
				loading={loading}
				page={page}
				setPage={setPage}
				Spinner={Spinner}
			>
			</Pagination>
			
		</> 
	)
}


export default CharactersPage



