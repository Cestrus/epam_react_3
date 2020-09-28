import {
	CHOOSE_MOVIE_FORM,


} from './actionTypes.js';


export function chooseMovieForm(chosenMovie){
	return {
		type: CHOOSE_MOVIE_FORM,
		chosenMovie,
	}
}