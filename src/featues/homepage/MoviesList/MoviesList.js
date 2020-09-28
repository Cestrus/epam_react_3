import React from "react";
import styles from './MoviesList.module.css';
import MovieCard from "./MovieCard/MovieCard.js";


const MoviesList = props =>{
	return (
		<div className = {styles['container--moviesList']}>
			{props.moviesList.map(movie => {
				return(
					<MovieCard key = {movie.id}
							   movie = {movie}
					           changeStars = {props.changeStars}
					           changeLikes = {props.changeLikes}
					           chooseMovie = {props.chooseMovie}
					           moviesList = {props.moviesList}
					           chosenMovie={props.chosenMovie}
					           findActors = {props.findActors}
					           chooseMovieForm = {props.chooseMovieForm}
					/>
				);
			})}
		</div>
	);
}


export default MoviesList;