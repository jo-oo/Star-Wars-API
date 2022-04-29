import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom" //for navigation back and forth
import { Card, Row, Col, } from 'react-bootstrap'
import StarWarsAPI from '../services/StarWarsAPI'
import { getIdFromUrl } from "../helpers/index" //gets id from characters
import ReturnButton from '../components/ReturnButton'


const CharacterPage = () => {
    const navigate = useNavigate() //sets the navigation into a variable
    const [character, setCharacter] = useState() //no initial state
    const { id } = useParams() //a React-function that gets id
    const [ films, setFilms] = useState([]) //empty array for films

    // Get character by id from api
	const getCharacter = async (id) => {
		const data = await StarWarsAPI.getCharacter(id)

		// update the character state
		setCharacter(data)  

        //also update the film
        setFilms(data.films) 
	}

	// Get character by id from api when component is first mounted
	useEffect(() => {
		getCharacter(id)
	}, [id])



    //Here is what we ouput on our page
	return (
        <>
            <h1>Character info</h1>

            <Row xs={1} md={1} className="g-4">

                {character && ( 
                    <Col> 
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
                                <Card.Title>Links:</Card.Title>
                                <Card.Text><b>Films</b></Card.Text>
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