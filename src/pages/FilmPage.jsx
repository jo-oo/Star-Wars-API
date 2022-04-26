import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
//import { getIdFromUrl } from "../helpers/index" //hämtar id:et från kakartärerna


const FilmPage = () => {
    const [film, setFilm] = useState() //inget state från början
    const { id } = useParams() //en React-funktion som hämtar id
    const [ characters, setCharacters ] = useState([]) //empty array for characters
	
    // Get film by id from api
	const getFilm = async (id) => {
		const data = await StarWarsAPI.getFilm(id)

		// update film state
		setFilm(data)  //update the film
		console.log(data)

        setCharacters(data.characters) //also update the characters
	}

	// Get film by id from api when component is first mounted
	useEffect(() => {
		getFilm(id)
	}, [id])




	//Here is what we ouput on our page
   //MAPPA INTE FGILMS UTAN SKRIV BARA UT. MAPPA CHARACTERS
	return (
    <>
    	<Row xs={1} md={3} className="g-4">

      	<h1>Films</h1>

      	{film && ( 
        	<Col key={film.episode_id}>
          		<Card className="card">
           			<Card.Header as="h5">{film.title}</Card.Header>
          				<Card.Body>
                            <Card.Title>Attributes</Card.Title>
            				<Card.Text>Episode {film.episode_id} </Card.Text>
            				<Card.Text>Director {film.director} </Card.Text>
                            <Card.Text>Producer {film.producer} </Card.Text>
                            <Card.Text>Release date {film.release_date} </Card.Text>
           				</Card.Body>

                        <Card.Body>
                            <Card.Title>Links</Card.Title>
                            <Card.Title>Characters</Card.Title>
                            <Button variant="primary" as={Link} to={`/films/${film.episode_id}`}>More</Button>
                        </Card.Body>

                        {characters.map((characters) => ( //mappar över films-array. finns det charactaers så skriver den ut följande
                            <Col>
                                <Card className="card">
                                    <Card.Header as="h5">{characters.id}</Card.Header>

                                    </Card>
                            </Col>
        	            ))}		   
            		</Card>
        	</Col>
        	)}
        </Row>
    </>
  );
}

export default FilmPage