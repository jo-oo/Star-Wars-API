import { useEffect, useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

const SearchStarWars = () => {
	const [searchInput, setSearchInput] = useState('')
	const [loading, setLoading] = useState(true)

	const handleSubmit = async e => {
		e.preventDefault()
	}

	return (
		<>
			<h1>✨ 🌟  ✨  🌟 ✨ 🌟  ✨ Star Quality Search 🌟 ✨ 🌟  ✨  🌟 ✨ 🌟  ✨  🌟 </h1>

			<h2>✨ 🌟  ✨  🌟 ✨ 🌟  ✨ Search throughout a whole Galaxy.   and beyond... 🌟 ✨ 🌟  ✨  🌟 ✨ 🌟  ✨  🌟 </h2>

			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3 col-4" controlId="newTitle">
					<Form.Label>Search Query</Form.Label>
					<Form.Control
						onChange={e => setSearchInput(e.target.value)}
						placeholder="Enter search"
						required
						type="text"
						value={searchInput}
					/>
				</Form.Group>

				<div className="d-flex justify-content-between">
					<Button variant="success" type="submit">Search</Button>
				</div>
			</Form>

			{/* loading spinner */}
			{loading && (<div className="mt-4">
			<Spinner animation="border" role="status">
 				<span className="visually-hidden">Loading...</span>
			</Spinner></div>)}

			{(
				<div className="search-result mt-4">

					<div className="d-flex justify-content-between align-items-center mt-4">
						<div className="previous">
							<Button
								variant="primary"
							>Previous Page</Button>
						</div>
						<div className="page">PAGE Number</div>
						<div className="next">
							<Button
								variant="primary"
							>Next Page</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default SearchStarWars
