import {actorsDB} from "../../utils/actorsDB.js";
import {moviesDB} from "../../utils/moviesDB.js";

import { 
        CHECK_LOG_PASS,
        SET_LOG_PASS,
        LOG_OUT,
        FIND_MOVIE,
        DELETE_MOVIE,
        SORT_BY_RATING, 
		SORT_BY_LIKES, 
		SEARCH_MOVIE, 
		CHANGE_STARS, 
		CHANGE_LIKES,
        FIND_ACTORS,
		CHOOSE_ACTOR,
		EDIT_MOVIE,
        } from '../actions/actionTypes.js';

export const initialState = {
	moviesDB,
	actorsDB,
	moviesList: [...moviesDB],
    chosenMovie: null,
    userLogin: null,
    isLogin: null,
	actorsStore: [],
	chosenActor: null,
}


export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case CHECK_LOG_PASS:
            return{
                ...state, 
                isLogin: action.isLogin,
                userLogin: action.userLogin,
            }
        case SET_LOG_PASS:
            return{
                ...state, 
                isLogin: action.isLogin,
                userLogin: action.userLogin,

            }
        case LOG_OUT:
            return{
                ...state, 
                isLogin: action.isLogin,
                userLogin: action.userLogin,
            }
        case DELETE_MOVIE:
            return{
                ...state,
                moviesDB: action.moviesDB,
                moviesList: action.moviesList,
            }    
        case FIND_MOVIE:
            return{
                ...state,
                chosenMovie: action.chosenMovie, 

            }
        case SORT_BY_RATING:
			return {
				...state,
				moviesList: action.moviesList,
			}
		case SORT_BY_LIKES:
			return {
				...state,
				moviesList: action.moviesList,
			}
		case SEARCH_MOVIE:
			return {
				...state,
				moviesList: action.moviesList,
			}
		case CHANGE_STARS:
			return {
				...state,
				moviesList: action.moviesList,
                chosenMovie: action.chosenMovie,
			}
		case CHANGE_LIKES:
			return {
				...state,
				moviesList: action.moviesList,
			}
        case FIND_ACTORS:
            return {
                ...state,
                actorsStore: action.actorsStore,
            }
        case CHOOSE_ACTOR:
            return {
                ...state,
                chosenActor: action.chosenActor,
            }
        case EDIT_MOVIE:
            return {
                ...state,
	            moviesList: action.moviesList,
	            chosenMovie: action.chosenMovie,
            }

        default: return state;
    }

}

