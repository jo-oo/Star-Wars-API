import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom' //imports the components routes (that wraps all our route, like a parent component to all our route components and route
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage'
import FilmsPage from './pages/FilmsPage'
import FilmPage from './pages/FilmPage'
import 'bootstrap/dist/css/bootstrap.css'  //imports bootstrap-file from node-mondules that was created after installing Bootstrap 
import './App.css'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			{/*goes through and looks for which route that matches best*/}
			<Container className="py-3">
				<Routes> {/* Wraps route with routes, adds a path with the element that should be rendered when the path is / */}
					<Route path="/" element={<HomePage />} /> 
					<Route path="/characters" element={<CharactersPage />} /> {/*the element that should be rendered when the path is /characters */} 
					<Route path="/characters/:id" element={<CharacterPage />} />  
					<Route path="/films" element={<FilmsPage />} />
					<Route path="/films/:id" element={<FilmPage />} /> 
					<Route path="*" element={<NotFound />} /> {/*should match if no other route matches */}
				</Routes>
			</Container>
		</div>
	)
}

export default App
