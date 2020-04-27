import axios from 'axios'
import { GET_ALL_BEERS_PENDING, GET_ALL_BEERS_SUCCESS, GET_ALL_BEERS_FAILED, GET_RANDOM_BEER_PENDING, GET_RANDOM_BEER_SUCCESS, GET_RANDOM_BEER_FAILED } from './constants' 

//process.env.REACT_APP_BREWERYDB_API_KEY is returning undefined
//process.env is coming back as an empty object -> need to figure out why so the API key can be gitignored
//let breweryDBKey = process.env.REACT_APP_BREWERYDB_API_KEY

const breweryDBKey = "*********"
const breweryDB_URL = `https://sandbox-api.brewerydb.com/v2/`

export const getBeers = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_BEERS_PENDING
        })
        axios.get(`${breweryDB_URL}/beers?key=${breweryDBKey}`)
            .then(res => {
                let beers = res.data
                dispatch({
                    type: GET_ALL_BEERS_SUCCESS,
                    payload: beers
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_ALL_BEERS_FAILED,
                    payload: error
                })
            })
    }
}

// export const getRandomBeer = () => {
//     return dispatch => {
//         dispatch({
//             type: GET_RANDOM_BEER_PENDING
//         })
//         axios.get(`${breweryDB_URL}/beer/random?key=${breweryDBKey}`, 
//             { params: {hasLabels: "Y", withBreweries: "Y"}}
//             )
//             .then(res => {
//                 let randomBeer = res.data.data
//                 dispatch({
//                     type: GET_RANDOM_BEER_SUCCESS,
//                     payload: randomBeer
//                 }) 
//             })
//             .catch(error => {
//                 dispatch({
//                     type: GET_RANDOM_BEER_FAILED,
//                     payload: error
//                 })
//             })
//     }
// }

