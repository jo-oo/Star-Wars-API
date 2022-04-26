import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'
import { Card, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { getIdFromUrl } from "../helpers/index" //hämtar id:et från kakartärerna


const CharacterPage = () => {
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
                            <Card.Title>Attributes</Card.Title>
                            <Card.Text>Gender {character.gender} </Card.Text>
							<Card.Text>Birth year {character.birth_year} </Card.Text>
                            <Card.Text>Height {character.height} </Card.Text>
                            <Card.Text>Mass {character.mass} kg </Card.Text>
                            <Card.Text>Hair colour {character.hair_color} </Card.Text>
                            <Card.Text>Skin colour {character.skin_color} </Card.Text>
                            <Card.Text>Eye colour {character.eye_color} </Card.Text>
           				</Card.Body>

                        <Card.Body>
                            <Card.Title>Links</Card.Title>
                            <Card.Text>Films</Card.Text>
                        </Card.Body>

                        {films.map((films) => ( 
                            <Col>
                                <Card className="card">
                                    <Card.Header>Film {`${getIdFromUrl(films)}`}</Card.Header>
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

export default CharacterPage