/**
 * Star Wars API service
 *
 * <https://swapi.dev/documentation>
 */

//GET REQUESTS//


 import axios from 'axios'

 axios.defaults.baseURL = 'https://swapi.dev/api'
 const BaseURL = 'https://swapi.dev/api'
 
 /**
  * Execute a HTTP GET request to an endpoint.
  * 
  */
//Get all films
  const getFilms = async () => {
		const response = await axios.get(`${BaseURL}/films`)
		return response.data
}

//Get single film
const getFilm = async (id) => {
    const res = await axios.get(`${BaseURL}/films/${id}`)
    return res
}

//get characters from API
const getCharacters = async (page) => {
		const res = await axios.get(`/people/?page=${page}`)

		return response.data
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
    getFilm,
	getCharacters
	//search,
}