import { 
        CHECK_LOG_PASS,
        SET_LOG_PASS,
        LOG_OUT,
        DELETE_MOVIE,
        SORT_BY_RATING, 
        SORT_BY_LIKES, 
        SEARCH_MOVIE, 
        CHANGE_STARS, 
        CHANGE_LIKES,
        FIND_MOVIE,
        FIND_ACTORS,
        CHOOSE_ACTOR,
        EDIT_MOVIE,
} from './actionTypes.js';



export function checkLogPass(login, pass){
    return (dispatch) => {
        let userLogin;
        let isLogin = !!(localStorage.getItem(login) && localStorage.getItem(login) === pass);
        if(isLogin) userLogin = login;   

        dispatch({
            type: CHECK_LOG_PASS,
            isLogin,
            userLogin,
        });
    }
}

export function setLogPass(login, pass){
    return (dispatch) => {
        localStorage.setItem(login, pass);
        let isLogin = true;
        let userLogin = login;

        dispatch({
            type: SET_LOG_PASS,
            isLogin,
            userLogin,
        });
    }
}

export function logOutHandler(){
    return(dispatch) => {
        let isLogin = null;
        let userLogin = null;

        dispatch({
            type: LOG_OUT,
            isLogin,
            userLogin,
        })
    }
}

export function deleteMovie(movieID){
    return(dispatch, getState) => {
        const state = getState().appReducer;
        let moviesDB = state.moviesDB.filter( movie => {
            if(movie.id !== movieID) return movie;
        })
        console.log('moviesDB :', moviesDB);

        dispatch({
            type: DELETE_MOVIE,
            moviesDB,
            moviesList: [...moviesDB],
        })
    }
}

export function sortByRating(){
    return (dispatch, getState) => {
        const state = getState().appReducer;
        let moviesList = state.moviesDB.slice();
        moviesList.sort((a,b) => {
            if (a.stars > b.stars) return -1;
            if (a.stars === b.stars) return 0;
            if (a.stars < b.stars) return 1;
        });

        dispatch({
            type: SORT_BY_RATING,
            moviesList,
        });
    }
}

export function sortByLikes(){
    return (dispatch, getState) => {
        const state = getState().appReducer;
        let moviesList = [...state.moviesDB];
        moviesList.sort((a,b) => {
            if (a.likes > b.likes) return -1;
            if (a.likes === b.likes) return 0;
            if (a.likes < b.likes) return 1;
        });

        dispatch({
            type: SORT_BY_LIKES,
            moviesList
        });
    }
}

export function searchMovie(styleName){
    return (dispatch, getState) => {
        const state = getState().appReducer;
        let moviesList ;
        let str = document.getElementsByClassName(styleName)[0].value;
        if(!str){
            moviesList = [...state.moviesDB];
        } else {
            moviesList = state.moviesDB.filter(movie => {
                if(movie.title.toUpperCase().indexOf(str.toUpperCase()) !== -1){
                    return movie;
                }
            });            
        }
        
        dispatch({
            type: SEARCH_MOVIE,
            moviesList
        });
    }    
}

export function changeStars(idStar, idMovies){
    return (dispatch, getState) => {
        const state = getState().appReducer;
        let quantityStars = parseInt(idStar);
        let moviesList = state.moviesList;
        let chosenMovie = state.chosenMovie;
        moviesList.forEach(movie => {
            if(movie.id === idMovies){
                movie.stars = quantityStars;
            }
        });
        if(chosenMovie && chosenMovie.id === idMovies){
            chosenMovie.stars = quantityStars;
        }
        dispatch({
            type: CHANGE_STARS,
            moviesList: [...moviesList],
            chosenMovie,
        });
    }    
}

export function changeLikes (idMovies, isLike){
    return (dispatch, getState) => {
        const state = getState().appReducer;
        state.moviesList.forEach(movie => {
            if(movie.id === idMovies){
                if(isLike){
                    movie.likes++;
                } else {
                    movie.likes--;
                }
            }
        });
        dispatch({
            type: CHANGE_LIKES,
            moviesList: [...state.moviesList],
        })
    }
}

export function findMovie(idMovies){
    return (dispatch, getState) => {
        const state = getState().appReducer;
        let chosenMovie = null;
        state.moviesList.forEach(movie => {
            if(movie.id === idMovies){
                chosenMovie = movie;
            }
        });

        dispatch({
            type: FIND_MOVIE,
            chosenMovie
        });
    }
}

export function findActors(){
    return(dispatch, getState) => {
        const state = getState().appReducer;
        let actorsStore = [];
        state.chosenMovie.actorsIds.forEach(id => {
            state.actorsDB.forEach(actor => {
                if(actor.id === id){
                    actorsStore.push(actor);
                }
            });
        });

        dispatch({
            type: FIND_ACTORS,
            actorsStore,
        })
    }
}

export function onChooseActor(actor) {
    return (dispatch) => {
        let chosenActor = actor;

        dispatch({
            type: CHOOSE_ACTOR,
            chosenActor,
        })
    }
}

export function editMovie(movie){
    return(dispatch, getState) => {
        const state = getState().appReducer;
        const moviesList = state.moviesList;
        const chosenMovie = state.chosenMovie;

        chosenMovie.title = document.getElementsByName('inp-title-edit')[0].value;
        chosenMovie.posterUrl = document.getElementsByName('inp-posterUrl-edit')[0].value;
        chosenMovie.director = document.getElementsByName('inp-director-edit')[0].value;
        chosenMovie.genres = document.getElementsByName('inp-genres-edit')[0].value;
        chosenMovie.description = document.getElementsByName('description-edit')[0].value;

        let indx;
        moviesList.forEach((movie, index) => {
            if(movie.id === chosenMovie.id){
                indx = index;
            }
        });
        moviesList.splice(indx, 1, chosenMovie);
        dispatch({
            type: EDIT_MOVIE,
            moviesList: [...moviesList],
            chosenMovie,
        })
    }
}