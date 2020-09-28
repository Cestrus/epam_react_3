import {
	CHOOSE_MOVIE_FORM,

} from './actionTypes.js';

export const initialState = {
	chosenMovie: null,
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHOOSE_MOVIE_FORM:
			return {
				...state,
				chosenMovie: action.chosenMovie,
			}
	}
}
