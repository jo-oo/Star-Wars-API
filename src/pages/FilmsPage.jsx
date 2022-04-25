import { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import { Card, ListGroup, Row, Col } from 'react-bootstrap'


const FilmsPage = () => {
  const [films, setFilms] = useState("") //sätter listan till tom från början

	
	const getFilms = async () => {
		// Get films from api
		const data = await StarWarsAPI.getFilms()

		// update characters state
		setFilms(data) 
		console.log(data.results);
	}

	// Get characters from api when component is first mounted
	useEffect(() => {
		getFilms()
	}, [])


	//Here is what we ouput on our page
	return (
		<> 
			<h1>Films</h1>
		
			{films && films.results.map((films) => ( //mappar över films-array. finns det charactaers så skriver den ut följande
				<Card className="card">
					<Card.Header>{films.title}</Card.Header> {/*outprints characters name */}

				</Card>
			))}
	
		</> 
	)
}

export default FilmsPage