import React from "react";
import styles from './index.module.css';

import Filter from "./Filter/Filter.js";
import MoviesList from "./MoviesList/MoviesList.js";


const Homepage = (props) => {
	return(
		<div className = {styles.container}>
			<Filter sortByRating = {props.sortByRating}
					sortByLikes = {props.sortByLikes}
					searchMovie = {props.searchMovie}
			/>
			<MoviesList moviesList = {props.moviesList}
						changeStars = {props.changeStars}
						changeLikes = {props.changeLikes}
						chosenMovie = {props.chosenMovie}
						findMovie = {props.findMovie}
						findActors = {props.findActors}
			/>
		</div>
	);
}

export default Homepage;