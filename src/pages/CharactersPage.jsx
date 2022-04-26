
//import from React:
import { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
//import components, pages & services:
import StarWarsAPI from '../services/StarWarsAPI'
import { Card, ListGroup, Row, Col } from 'react-bootstrap'

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
		console.log(data.results);
	}

	// Get characters from api when component is first mounted
	useEffect(() => {
		getCharacters()
	}, [])


	//Here is what we ouput on our page
	return (
		<> {/*ersätter vår tidigare container med ett Fragment här */}
			
			<h1>Characters</h1>
		

			{characters && characters.results.map((characters) => ( //mappar över characters-array. finns det charactaers så skriver den ut följande
				<Card className="card">
					<Card.Header>{characters.name}</Card.Header> {/*outprints characters name */}

				</Card>
			))}
	
		</> 
	)
}

export default CharactersPage

