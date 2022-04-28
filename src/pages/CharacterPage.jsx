import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { getIdFromUrl } from "../helpers/index" //hämtar id:et från kakartärerna
import { useNavigate } from "react-router-dom" //for navigation back and forth
import ReturnButton from '../components/ReturnButton'


const CharacterPage = () => {
    const navigate = useNavigate() //sets the navigation into a variable
    const [character, setCharacter] = useState() //inget state från början
    const { id } = useParams() //en React-funktion som hämtar id
    const [ films, setFilms] = useState([]) //empty array for films

	
    // Get film by id from api
	const getCharacter = async (id) => {
		const data = await StarWarsAPI.getCharacter(id)

		// update film state
		setCharacter(data)  //update the character
		console.log(data)

        setFilms(data.films) //also update the film
	}

	// Get character by id from api when component is first mounted
	useEffect(() => {
		getCharacter(id)
	}, [id])




	//Here is what we ouput on our page
   //MAPPA INTE characters UTAN SKRIV BARA UT. MAPPA CHARACTER
	return (
    <>
    	<Row xs={1} md={3} className="g-4">

      	<h1>Character info</h1>

      	{character && ( 
        	<Col> {/*key={film.episode_id}*/}
          		<Card className="card">
           			<Card.Header as="h5">{character.name}</Card.Header>
          				<Card.Body>
                            <Card.Title><b>Attributes:</b></Card.Title>
                            <Card.Text><b>Gender:</b> {character.gender} </Card.Text>
							<Card.Text><b>Birth year:</b> {character.birth_year} </Card.Text>
                            <Card.Text><b>Height:</b> {character.height} </Card.Text>
                            <Card.Text><b>Mass:</b> {character.mass} kg </Card.Text>
                            <Card.Text><b>Hair colour:</b> {character.hair_color} </Card.Text>
                            <Card.Text><b>Skin colour:</b> {character.skin_color} </Card.Text>
                            <Card.Text><b>Eye colour:</b> {character.eye_color} </Card.Text>
           				</Card.Body>

                        <Card.Body>
                            <Card.Title>Links</Card.Title>
                            <Card.Text>Films</Card.Text>
                        </Card.Body>

                        {films.map((films) => ( 
                            <Col>
                                <Card className="card">
                                    <Link key={getIdFromUrl(films)}
										to={`/films/${getIdFromUrl(films)}`}> 
                                        <Card.Header>Film {`${getIdFromUrl(films)}`}</Card.Header>
                                    </Link>
                                </Card>
                            </Col>
        	            ))}		   
            		</Card>
        	</Col>
        	)}
        </Row>
        <ReturnButton
		navigate={navigate}
		>
		</ReturnButton>
    </>
  );
}

export default CharacterPage