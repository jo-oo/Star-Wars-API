import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
//import { useSearchParams } from 'react-router-dom' //används till Params för att kunna trycka fram o tillbaka på sidan
import StarWarsAPI from '../services/StarWarsAPI'
//import ListGroup from 'react-bootstrap/listgroup'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { getIdFromUrl } from "../helpers/index" //hämtar id:et från kakartärerna
//import { useSearchParams } from 'react-router-dom' //för att kunna lagra en förfrågan i en URLSearchParams.

//import SearchBar from '../../components/SearchBar'


//detta är en App! Kunde också skrivit det här i App.jsx
const CharactersPage = () => {
  const [characters, setCharacters] = useState("") //sätter listan till tom från början
  const [page, setPage] = useState(1) //sätter sidnumret till 1
  const [loading, setLoading] = useState(false) //så vi ska hinna vänta in API:et
  

	const getCharacters = async () => {

		// set loading to true
		setLoading(true)

		// Get characters from api
		console.log("Set page is this: ", page);
		const data = await StarWarsAPI.getCharactersPage(page) //gets characters only from page 1 as start and then the value of page
	
	
		// update characters state
		setCharacters(data)
		setLoading(false) 
		console.log(data);
	}

	// Get characters from api when component is first mounted
	useEffect(() => {
		getCharacters(page)
	}, [page])


	//Here is what we ouput on our page
	return (
		<> {/*ersätter vår tidigare container med ett Fragment här */}
			
			<Row xs={1} md={3} className="g-4">

				<h1>Characters</h1>

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
								<Card.Text>Gender {characters.gender} </Card.Text>
								<Card.Text>Born {characters.birth_year} </Card.Text>
								<Card.Text>In {characters.films.length} films </Card.Text>
								<Card.Body>
									<Button variant="primary" as={Link} to={`/characters/${getIdFromUrl(characters.url)}`}>More info about this character</Button> {/* hämtar ut filmens url för att använda helper.funktionen på för att spliytta ut id:et. Pga att episodens id/nr är ejk samma som id på url:en*/}
								</Card.Body> 
							</Card.Body>
						</Card>
					</Col>
				))}
	  		</Row>
		

			<div className="d-flex justify-content-between align-items-center mt-4">
				<Button className="previous"
					disabled={!characters.previous || loading} //disabled so it can´t be clicked when characters don´t have a previous value (null) OR when the page is still loading (to avoid discrepency/unsync of displayed page and number of page)
					onClick={() => setPage(page - 1)}
					>
					Previous Page
				</Button>
				{loading &&
        		<h2>
          		Loading ...
        		</h2>
     			 }
					<div>{page} / {Math.ceil(characters.count/10)} </div> {/* sets page number to be value of page out of number of pages in the API for characters */ }
				<Button className="next"
					disabled={!characters.next || loading } //disabled so it can´t be clicked when characters don´t have a next value (null) or when page is still loading
					onClick={() => setPage(page + 1)} 
					>
					Next Page
				</Button>
			</div>
			
		</> 
	)
}


export default CharactersPage



