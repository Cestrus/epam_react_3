import {
        CHECK_USER,
        SET_USER,
        LOG_OUT,
		CHOOSE_MOVIE,
        DELETE_MOVIE,
        SORT_BY_RATING, 
		SORT_BY_LIKES, 
		SEARCH_MOVIE, 
		CHANGE_STARS, 
		CHANGE_LIKES,
        FIND_ACTORS,
		CHOOSE_ACTOR,
		EDIT_MOVIE,
		LOAD_MOVIES,

        } from '../actions/actionTypes.js';

export const initialState = {
	moviesList: null,
    chosenMovie: null,
    userName: null,
    isLogin: null,
	actorsStore: [],
	chosenActor: null,
	isLoading: true,
}


export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case CHECK_USER:
            return{
                ...state, 
                isLogin: action.isLogin,
                userName: action.userName,
            }
        case SET_USER:
            return{
                ...state, 
                isLogin: action.isLogin,
                userName: action.userName,

            }
        case LOG_OUT:
            return{
                ...state, 
                isLogin: action.isLogin,
                userName: action.userName,
            }
        case LOAD_MOVIES:
            return{
                ...state,
                moviesList: [...action.moviesList],
	            isLoading: action.isLoading,
            }
        case DELETE_MOVIE:
            return{
                ...state,
                moviesList: action.moviesList,
            }
        case CHOOSE_MOVIE:
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

