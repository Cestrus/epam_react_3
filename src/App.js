import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Homepage from './featues/homepage';
import ActorInfo from './featues/actorInfo';
import MovieInfo from './featues/movieInfo';
import EditMovie from './featues/editMovie';
import Login from './featues/login';
import Registration from './featues/registration';

import { checkLogPass, setLogPass, logOutHandler, deleteMovie, findMovie, editMovie,
  sortByRating, sortByLikes,  searchMovie, changeStars, changeLikes, findActors, onChooseActor} from './store/actions/appActions'


class App extends Component {

    render(){
        return (
            <>
                <Header logOutHandler = {this.props.logOutHandler}
                        userLogin = {this.props.userLogin}
                        isLogin = {this.props.isLogin}/>
                <Switch>
                    <Route path={'/'} exact render = {() => (
                        <Login 
                            checkLogPass = {this.props.checkLogPass}
                            isLogin = {this.props.isLogin}
                        />)}
                    />
                    <Route path={'/registration'} exact render = {() => (
                        <Registration
                            setLogPass = {this.props.setLogPass}
                            isLogin = {this.props.isLogin}
                        />)}
                    />           
                    <Route path={'/movies'} exact render = {() => (
                        <Homepage
                            moviesList = {this.props.moviesList}
                            chosenMovie = {this.props.chosenMovie} 
                            sortByRating = {this.props.sortByRating}
                            sortByLikes = {this.props.sortByLikes}
                            searchMovie = {this.props.searchMovie}
                            changeStars = {this.props.changeStars}
                            changeLikes = {this.props.changeLikes}
                            findMovie = {this.props.findMovie}
                            findActors = {this.props.findActors}
                        />)}              
                    />
                    <Route path={'/movies/:id'} exact render={() => (
                        <MovieInfo 
                            chosenMovie = {this.props.chosenMovie}
                            deleteMovie = {this.props.deleteMovie}
                            actorsDB = {this.props.actorsDB}
                            onChooseActor = {this.props.onChooseActor}
                            changeStars = {this.props.changeStars}
                            actorsStore = {this.props.actorsStore}
                            editMovie = {this.props.editMovie}
                        />
                    )} />
                    <Route path={'/edit/'} exact render={() =>(
                        <EditMovie
                            chosenMovie = {this.props.chosenMovie}
                            editMovie = {this.props.editMovie}
                        />
                    )}/>
                    <Route path={'/actor/:name'} exact render={() => (
                        <ActorInfo chosenActor = {this.props.chosenActor}/>
                    )}/>

                    <Redirect to = {'/'}/>
                </Switch>
          </>
        );
    }
  
}

function mapStateToProps(state){
  return{
    moviesDB: state.appReducer.moviesDB,
    actorsDB: state.appReducer.actorsDB,    
    moviesList: state.appReducer.moviesList,
    isLogin: state.appReducer.isLogin,
    userLogin: state.appReducer.userLogin,
    chosenMovie: state.appReducer.chosenMovie,
    actorsStore: state.appReducer.actorsStore,
    chosenActor: state.appReducer.chosenActor,
  }
}

function mapDispatchToProps(dispatch){
  return{
    checkLogPass: (login, pass) => dispatch(checkLogPass(login, pass)),
    setLogPass: (login, pass) => dispatch(setLogPass(login, pass)),
    logOutHandler: () => dispatch(logOutHandler()),
    deleteMovie: (movieID) => dispatch(deleteMovie(movieID)),
    sortByRating: () => dispatch(sortByRating()),
    sortByLikes: () => dispatch(sortByLikes()),
    searchMovie: (styleName) => dispatch(searchMovie(styleName)),
    changeStars: (idStar, idMovies) => dispatch(changeStars(idStar, idMovies)),
    changeLikes: (idMovies, isLike) => dispatch(changeLikes(idMovies, isLike)),
    findMovie: (movieId) => dispatch(findMovie(movieId)),
    findActors: () => dispatch(findActors()),
    onChooseActor: (actor) => dispatch(onChooseActor(actor)),
    editMovie: (movie) => dispatch(editMovie(movie)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
