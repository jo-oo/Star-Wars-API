//uppdaterar sidan så den länkar till den enskilda personen vi vill visas egna sida
import { Link } from 'react-router-dom'

const Character = ({ character }) => {
	return (
		<li className="list">
			<Link
				className="characters-title"
				to={`/characters/${character.id}`}//är en link till dess id.
			>
				{character.title}
			</Link>
		</li>
	)
}

