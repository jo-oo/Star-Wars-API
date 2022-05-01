/**
 * Star Wars API service
 *
 * <'https://swapi.dev/api'>
*/

import axios from 'axios'

//axios.defaults.baseURL = 'https://swapi.dev/api'
const BaseURL = 'https://swapi.dev/api'


//Get new page of films from API. Only loads the single page we requested.
const getFilmsPage = async (page) => {
    const response = await axios.get(`${BaseURL}/films/?page=${page}`)
    return response.data
}

//Get single film by id
const getFilm = async (id) => {
    const response = await axios.get(`${BaseURL}/films/${id}`)
    return response.data
}

//Get new page of characters from API. Only loads the single page we requested.
const getCharactersPage = async (page) => {
    const response = await axios.get(`${BaseURL}/people/?page=${page}`)
    return response.data
}

//Get single character by id
const getCharacter = async (id) => {
    const response = await axios.get(`${BaseURL}/people/${id}`)
    return response.data
}


const exportedObject = {
    getFilm,
    getCharacter,
    getCharactersPage,
    getFilmsPage,
}
export default exportedObject