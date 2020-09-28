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
import withTranslation from './hocs/withTranslation';
import PrivateRoute from "./hocs/privateRoute";//


import { checkUser, setUser, logOutHandler, loadingMovies, deleteMovie, chooseMovie, editMovie,
  sortByRating, sortByLikes,  searchMovie, changeStars, changeLikes, findActors, chooseActor, langHandler} from './store/actions/appActions'

import { chooseMovieForm } from './store/actions/formActions'


class App extends Component {

    render(){
        const TranslateLogin = withTranslation(Login);
        const TranslateRegistration = withTranslation(Registration);
        const TranslateEditMovie = withTranslation(EditMovie);
        const TranslateMovieInfo = withTranslation(MovieInfo);

        return (
            <>
                <Header logOutHandler = {this.props.logOutHandler}
                        userName = {this.props.userName}
                        isLogin = {this.props.isLogin}
                        langHandler = {this.props.langHandler}/>
                <Switch>
                    <Route path={'/login'} exact render = {() => (
                        <TranslateLogin
                            checkUser = {this.props.checkUser}
                            isLogin = {this.props.isLogin}
                            language = {this.props.language}
                        />)}
                    />
                    <Route path={'/registration'} exact render = {() => (
                        <TranslateRegistration
                            setUser = {this.props.setUser}
                            isLogin = {this.props.isLogin}
                            language = {this.props.language}
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
                            findActors = {this.props.findActors}
                            chooseMovieForm = {this.props.chooseMovieForm}
                        />)}              
                    />
                    <Route path={'/movies/:id'} exact render={() => (
                        <TranslateMovieInfo
                            chosenMovie = {this.props.chosenMovie}
                            deleteMovie = {this.props.deleteMovie}
                            moviesList = {this.props.moviesList}
                            chooseActor = {this.props.chooseActor}
                            changeStars = {this.props.changeStars}
                            actorsStore = {this.props.actorsStore}
                            editMovie = {this.props.editMovie}
                            language = {this.props.language}
                        />
                    )} />
                    <Route path={'/edit/'} exact render={() =>(
                        <TranslateEditMovie
                            chosenMovie = {this.props.chosenMovie}
                            editMovie = {this.props.editMovie}
                            moviesList = {this.props.moviesList}
                            language = {this.props.language}
                            chosenMovieForm = {this.props.chosenMovieForm}
                        />
                    )}/>
                    <Route path={'/actor/:name'} exact render={() => (
                        <ActorInfo chosenActor = {this.props.chosenActor}/>
                    )}/>

                    <Redirect from = {'/'} to = {'/login'}/>
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
    language: state.appReducer.language,
    chosenMovieForm: state.formReducer.chosenMovie,
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
    langHandler: (lang) => dispatch(langHandler(lang)),
    chooseMovieForm: (movieId) => dispatch(chooseMovieForm(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
