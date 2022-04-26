import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import { useSearchParams } from 'react-router-dom' //används till Params för att kunna trycka fram o tillbaka på sidan
import StarWarsAPI from '../services/StarWarsAPI'
//import ListGroup from 'react-bootstrap/listgroup'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { getIdFromUrl } from "../helpers/index" //hämtar id:et från kakartärerna

//import SearchBar from '../../components/SearchBar'
//import { useSearchParams } from 'react-router-dom'


//detta är en App! Kunde också skrivit det här i App.jsx
const CharactersPage = () => {
  const [characters, setCharacters] = useState("") //sätter listan till tom från början

	
	const getCharacters = async () => {
		// Get characters from api
		const data = await StarWarsAPI.getCharacters()

		// update characters state
		setCharacters(data) 
		console.log(data);
	}

	// Get characters from api when component is first mounted
	useEffect(() => {
		getCharacters()
	}, [])
	console.log(characters)

	//Here is what we ouput on our page
	return (
		<> {/*ersätter vår tidigare container med ett Fragment här */}
			
			<Row xs={1} md={3} className="g-4">

				<h1>Characters</h1>

				
			
				{characters && characters.results.map((characters) => ( //mappar över characters-array. finns det charactaers så skriver den ut följande
					<Col> {/*key={films.episode_id}*/}
						<Card className="card">
							<Card.Header as="h5">{characters.name}</Card.Header>{/*outprints characters name */}
							<Card.Body>
								{/*<Card.Text>Gender {`${getIdFromUrl(characters.films)}`} </Card.Text>*/}
								{/*<Card.Text>Born {characters.release_date} </Card.Text>/*}
								{/*<Card.Text>In {`${getIdFromUrl(characters.films)}`} films </Card.Text>*/}
								<Card.Body>
									{/*<Button variant="primary" as={Link} to={`/films/${getIdFromUrl(films.url)}`}>More info about the film</Button> {/* hämtar ut filmens url för att använda helper.funktionen på för att spliytta ut id:et. Pga att episodens id/nr är ejk samma som id på url:en*/}
								</Card.Body> 
							</Card.Body>
						</Card>
					</Col>
				))}
	  		</Row>
		</> 
	)
}

//{films.characters.length}

export default CharactersPage



