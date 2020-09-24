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

import { checkUser, setUser, logOutHandler, loadingMovies, deleteMovie, chooseMovie, editMovie,
  sortByRating, sortByLikes,  searchMovie, changeStars, changeLikes, findActors, chooseActor} from './store/actions/appActions'


class App extends Component {

    render(){
        return (
            <>
                <Header logOutHandler = {this.props.logOutHandler}
                        userName = {this.props.userName}
                        isLogin = {this.props.isLogin}/>
                <Switch>
                    <Route path={'/'} exact render = {() => (
                        <Login
                            checkUser = {this.props.checkUser}
                            isLogin = {this.props.isLogin}
                        />)}
                    />
                    <Route path={'/registration'} exact render = {() => (
                        <Registration
                            setUser = {this.props.setUser}
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
                            chooseMovie = {this.props.chooseMovie}
                            loadingMovies = {this.props.loadingMovies}
                            isLoading = {this.props.isLoading}
                        />)}              
                    />
                    <Route path={'/movies/:id'} exact render={() => (
                        <MovieInfo 
                            chosenMovie = {this.props.chosenMovie}
                            deleteMovie = {this.props.deleteMovie}
                            moviesList = {this.props.moviesList}
                            chooseActor = {this.props.chooseActor}
                            changeStars = {this.props.changeStars}
                            actorsStore = {this.props.actorsStore}
                            editMovie = {this.props.editMovie}
                            findActors = {this.props.findActors}
                        />
                    )} />
                    <Route path={'/edit/'} exact render={() =>(
                        <EditMovie
                            chosenMovie = {this.props.chosenMovie}
                            editMovie = {this.props.editMovie}
                            moviesList = {this.props.moviesList}
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
    isLogin: state.appReducer.isLogin,
    userName: state.appReducer.userName,
    moviesList: state.appReducer.moviesList,
    chosenMovie: state.appReducer.chosenMovie,
    actorsStore: state.appReducer.actorsStore,
    chosenActor: state.appReducer.chosenActor,
    isLoading: state.appReducer.isLoading,
  }
}

function mapDispatchToProps(dispatch){
  return{
    checkUser: (login, pass) => dispatch(checkUser(login, pass)),
    setUser: (login, pass) => dispatch(setUser(login, pass)),
    logOutHandler: () => dispatch(logOutHandler()),
    loadingMovies: (moviesList, loading) => dispatch(loadingMovies(moviesList, loading)),
    deleteMovie: (movieID) => dispatch(deleteMovie(movieID)),
    sortByRating: (moviesList) => dispatch(sortByRating(moviesList)),
    sortByLikes: (moviesList) => dispatch(sortByLikes(moviesList)),
    searchMovie: (styleName) => dispatch(searchMovie(styleName)),
    changeStars: (idStar, idMovies) => dispatch(changeStars(idStar, idMovies)),
    changeLikes: (idMovies, isLike) => dispatch(changeLikes(idMovies, isLike)),
    chooseMovie: (movieId) => dispatch(chooseMovie(movieId)),
    findActors: (actorsStore) => dispatch(findActors(actorsStore)),
    chooseActor: (actor) => dispatch(chooseActor(actor)),
    editMovie: (chosenMovie, moviesList) => dispatch(editMovie(chosenMovie, moviesList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
