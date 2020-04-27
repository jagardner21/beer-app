import { GET_ALL_BEERS_PENDING, GET_RANDOM_BEER_PENDING, GET_ALL_BEERS_FAILED, GET_RANDOM_BEER_FAILED, GET_ALL_BEERS_SUCCESS, GET_RANDOM_BEER_SUCCESS } from './constants'

let initialState = {
    all: [],
    randomBeer: {},
    err: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_BEERS_PENDING: 
        case GET_RANDOM_BEER_PENDING:
            return state;
        
        case GET_ALL_BEERS_FAILED: 
        case GET_RANDOM_BEER_FAILED: 
            let error = action.payload;
            return {
                ...state, 
                err: error
            }

        case GET_ALL_BEERS_SUCCESS: 
            let beers = action.payload
            return {
                ...state,
                all: beers
            }

        case GET_RANDOM_BEER_SUCCESS: 
            let randomBeer = action.payload;
            return {
                ...state, 
                randomBeer: randomBeer
            }

        default: return state
    }
}