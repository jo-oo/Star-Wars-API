/**
 * Star Wars API service
 *
 * <'https://swapi.dev/api'>
 */

//GET REQUESTS//


 import axios from 'axios'

 //axios.defaults.baseURL = 'https://swapi.dev/api'
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
    const response = await axios.get(`${BaseURL}/films/${id}`)
    return response.data
}

//get characters from API
const getCharacters = async () => {
		const response = await axios.get(`${BaseURL}/people`)

		return response.data
}

//get new page of characters from API. The page number we send in is a variable
const getCharactersPage = async (page) => {
    const response = await axios.get(`${BaseURL}/people/?page=${page}`)

    return response.data
}

//get new page of films from API. The page number we send in is a variable
const getFilmsPage = async (page) => {
    const response = await axios.get(`${BaseURL}/films/?page=${page}`)

    return response.data
}

//Get single character
const getCharacter = async (id) => {
    const response = await axios.get(`${BaseURL}/people/${id}`)
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
	getCharacters,
    getCharacter,
    getCharactersPage,
    getFilmsPage
	//search,
}