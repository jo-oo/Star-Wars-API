import { useEffect, useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSearchParams } from 'react-router-dom'
import StarWarsAPI from '../services/StarWarsAPI'


const SearchStarWars = () => {
	const [searchInput, setSearchInput] = useState('')
	const [loading, setLoading] = useState(true)
	const searchInputRef = useRef()

	const handleSubmit = async e => {
	 	e.preventDefault()

		if (!searchInput.length) {
			return
		}

		// Get characters from api
		const data = await StarWarsAPI.search(searchInput)
		
		console.log(data)
		console.log(searchInput)
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
						ref={searchInputRef}
						required
						type="text"
						value={searchInput}
					/>
				</Form.Group>

				<div className="d-flex justify-content-between">
					<Button variant="success" type="submit" disabled={!searchInput.length}>Search</Button>
				</div>
			</Form>

						{/* loading spinner */}
			{loading && (<div className="mt-4">
			<Spinner animation="border" role="status">
 				<span className="visually-hidden">Loading...</span>
			</Spinner></div>)}

			{true && (
				<div className="search-result mt-4">
					<p>Showing HITS search results for QUERY...</p>

					<ListGroup>
						{[{}].map(hit => (
							<ListGroup.Item
								action
								href={''}
								key={''}
							>
								<h3>TITLE</h3>
								<p className="text-muted small mb-0">Posted at CREATED_AT by AUTHOR</p>
							</ListGroup.Item>
						))}
					</ListGroup>

					<div className="d-flex justify-content-between align-items-center mt-4">
						<div className="prev">
							<Button
								variant="primary"
							>Previous Page</Button>
						</div>
						<div className="page">PAGE</div>
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
