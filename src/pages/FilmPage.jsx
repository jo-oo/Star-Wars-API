import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { getIdFromUrl } from "../helpers/index" //hämtar id:et från kakartärerna
import { useNavigate } from "react-router-dom" //for navigation back and forth



const FilmPage = () => {
	const navigate = useNavigate() //sets the navigation into a variable
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
		<h1>Film info</h1>

    	<Row xs={1} md={3} className="g-4">

      	{film && ( 
        	<Col key={film.episode_id}>
          		<Card className="card">
           			<Card.Header as="h5">{film.title}</Card.Header>
          				<Card.Body>
                            <Card.Title><b>Attributes:</b></Card.Title>
            				<Card.Text><b>Episode:</b> {film.episode_id} </Card.Text>
            				<Card.Text><b>Director:</b> {film.director} </Card.Text>
                            <Card.Text><b>Producer:</b> {film.producer} </Card.Text>
                            <Card.Text><b>Release date:</b> {film.release_date} </Card.Text>
           				</Card.Body>

                        <Card.Body>
                            <Card.Title>Links</Card.Title>
                            <Card.Text>Characters</Card.Text>
                        </Card.Body>

                        {characters.map((characters) => ( 
                            <Col>
							    <Card className="card">
                                    <Link key={getIdFromUrl(characters)}
										to={`/characters/${getIdFromUrl(characters)}`}> 
                                        <Card.Header>Character {`${getIdFromUrl(characters)}`}</Card.Header>
                                    </Link>
                                </Card>
                            </Col>
        	            ))}		   
            		</Card>
        	</Col>
        	)}
        </Row>
		<Button variant="secondary" onClick={() => navigate(-1)}>« Back</Button>
    </>
  );
}

export default FilmPage