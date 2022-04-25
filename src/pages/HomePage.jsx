//detta är vår HEM-ROUTE

import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const HomePage = () => {
	return (
		<>
			<h2>✨ 🌟  ✨  🌟  ✨ 🌟  ✨ 🌟 ✨ 🌟  ✨ 🌟 ✨ 🌟  ✨ 🌟 ✨ 🌟  ✨ 🌟 ✨</h2>

			<h1> ⭐ Welcome to a galaxy very close close away! ⭐ </h1>

			<h2>✨ 🌟  ✨  🌟  ✨ 🌟  ✨ 🌟 ✨ 🌟  ✨ 🌟 ✨ 🌟  ✨ 🌟 ✨ 🌟  ✨ 🌟 ✨</h2>

			<Button variant="primary" as={Link} to="/search">Use the Search, you must</Button>

			{/* skapa en länk */}
			{/*  <p>This link does not exist: <Link to="/not-found">Click here</Link></p>  */}
		
		</>
	)
}

export default HomePage
