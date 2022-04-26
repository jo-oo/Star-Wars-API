import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom' //importerar komponenterna routes(som omsliuter alla våra route, som en förälderkomponent till alla våra route-komponenter) samt route
//importerar våra komponenter/andra sidor
import Navigation from './components/Navigation'
//import CharacterListitem from './components/CharacterListitem'
import HomePage from './pages/HomePage'
//import SearchStarWars from './pages/SearchStarWars'
import NotFound from './pages/NotFound'
//import CharactersPage from './pages/CharactersPage'
//import CharacterPage from './pages/CharacterPage'
import FilmsPage from './pages/FilmsPage'
import FilmPage from './pages/FilmPage'
//other
import 'bootstrap/dist/css/bootstrap.css'  //importerar vår nya bootstrap-fil från node-mondules som vi fick eftert att ha installerat Bootstrap 
import './App.css'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			{/*Här går den igenom och kollar vilken route som matchar bäst*/}
			<Container className="py-3">
				<Routes> {/* Omsluter route med routes, lägger en path med det ewlement som ska renderas när sökvägen är / */}
					<Route path="/" element={<HomePage />} /> 
				{/*	<Route path="/search" element={<SearchStarWars />} />  lägger en path med det ewlement som ska renderas när sökvägen är /search */}
				{/*	<Route path="/characters" element={<CharactersPage />} /> {/* lägger en path med det ewlement som ska renderas när sökvägen är /characters */} 
				{/*	<Route path="/characters/:id" element={<CharacterPage />} /> *vill komma åt mer info när vi trycker på en person. Så vi skriver element ={} så vi renderar CharactersPage vars uppgift ska vara att hämta en enskild person*/}
					<Route path="/films" element={<FilmsPage />} />
					<Route path="/films/:id" element={<FilmPage />} /> 
					<Route path="*" element={<NotFound />} /> {/* ska matcha om inget annat matchar */}
				</Routes>
			</Container>{/*containern är nu en komponent*/}
		</div>
	)
}

export default App
