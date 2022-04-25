import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import ListGroup from 'react-bootstrap/listgroup'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


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
    	<Row xs={1} md={3} className="g-4">

      	<h1>Films</h1>

      	{films && films.results.map((films) => ( //mappar över films-array. finns det charactaers så skriver den ut följande
        	<Col>
          		<Card className="card">
           			<Card.Header as="h5">{films.title}</Card.Header>
          				<Card.Body>
            				<Card.Text>Episode {films.episode_id} </Card.Text>
            				<Card.Text>Released {films.release_date} </Card.Text>
              				<Button variant="primary" as={Link} to={`/films/${films.episode_id}`}>More</Button>
           				</Card.Body>
            		</Card>
        	</Col>
        	))}
        </Row>
    </>
  );
}


export default FilmsPage