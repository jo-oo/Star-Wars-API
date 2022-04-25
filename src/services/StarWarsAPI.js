/**
 * Star Wars API service
 *
 * <https://swapi.dev/documentation>
 */

//GET REQUESTS//


 import axios from 'axios'

 axios.defaults.baseURL = 'https://swapi.dev/api'
 
 /**
  * Execute a HTTP GET request to an endpoint.
  * 
  */

  const getFilms = async () => {
	try {
		const response = await axios.get('/films')

		return response.data

	} catch (err) {
		throw err.message
	}
}

//get characters from API
const getCharacters = async (page) => {
	try {
		const res = await axios.get(`/people/?page=${page}`)

		return response.data

	} catch (err) {
		throw err.message
	}
}

 


 /**
  * Search Star Wars API
  *
  * @param {string} query Search query to search for
  * @param {number} page Page of search results to get
  * @returns Promise
  */
 /*
 export const search = async (query, page) => {
     return get(`/search?query=${query}&tags=story&page=${page}`)
 }
 */

 export default {
	getFilms,
	getCharacters,
	//search,
}