import { 
        CHECK_USER,
        SET_USER,
        LOG_OUT,
        DELETE_MOVIE,
        SORT_BY_RATING, 
        SORT_BY_LIKES, 
        SEARCH_MOVIE, 
        CHANGE_STARS, 
        CHANGE_LIKES,
        CHOOSE_MOVIE,
        FIND_ACTORS,
        CHOOSE_ACTOR,
        EDIT_MOVIE,
        LOAD_MOVIES,

} from './actionTypes.js';


export function checkUser(isLogin, userName){
    return {
        type: CHECK_USER,
        isLogin,
        userName,
    }
}

export function setUser(isLogin, userName){
    return {
        type: SET_USER,
        isLogin,
        userName,
    }
}

export function logOutHandler(){
    return {
        type: LOG_OUT,
        isLogin: null,
        userName: null,
    }
}

export function loadingMovies(moviesList, loading){
    return {
        type: LOAD_MOVIES,
        moviesList,
        loading
    }
}

export function deleteMovie(moviesList){
    return{
        type: DELETE_MOVIE,
        moviesList,
    }
}

export function sortByRating(moviesList){
    return {
        type: SORT_BY_RATING,
        moviesList,
    };
}

export function sortByLikes(moviesList){
    return {
        type: SORT_BY_LIKES,
        moviesList,
    };

}

export function searchMovie(moviesList){
    return {
        type: SEARCH_MOVIE,
        moviesList
    };

}

export function changeStars(moviesList){
    return {
        type: CHANGE_STARS,
        moviesList,
    }    
}

export function changeLikes (moviesList){
    return {
        type: CHANGE_LIKES,
        moviesList,
    }
}

export function chooseMovie(chosenMovie){
    return {
        type: CHOOSE_MOVIE,
        chosenMovie
    }
}

export function findActors(actorsStore){
    return{
        type: FIND_ACTORS,
        actorsStore,
    }
}

export function chooseActor(actor) {
    return {
        type: CHOOSE_ACTOR,
        chosenActor: actor,
    }
}

export function editMovie(chosenMovie, moviesList){
    console.log(moviesList)
    return{
        type: EDIT_MOVIE,
        moviesList,
        chosenMovie,
    }
}