import React from "react";
import styles from './index.module.css';
import { withRouter } from 'react-router-dom';
import Stars from '../../components/Stars/Stars.js';
import Actor from '../../components/Actor/Actor.js'


const MovieInfo = props => {
	let movie = props.chosenMovie;
	return (
		<div className={styles['container--movieInfo']}>
			<img className={styles.movieImg}
			     alt={'poster'}
				 src={movie.posterUrl}
				 height={'200'}
			/>
			<div className={styles.controlBtn}>
				<button 
					className = {styles.btnEdit}
					onClick = {() => {
						props.history.push('/edit/');
					}}
				>
					Edit
				</button>
				<button 
					className = {styles.btnDelete}
					onClick = {() => {
						props.deleteMovie(movie.id);
						props.history.push('/movies/');
					}}
				>
					Delete
				</button>
			</div>
			<p className={styles.movieTitle}>{movie.title}</p>
			<div className={styles.movieLikesStars}>
				<div className={styles.movieLikes}>Likes: {movie.likes}</div>
				<Stars stars = {movie.stars}
				       changeStars = {props.changeStars}
				       idMovies = {movie.id}
				/>
			</div>
			<p className={styles.movieDirector}>Director: {movie.director}</p>
			<div className={styles.movieActors}>Actors: {props.actorsStore.map(actor =>
				<Actor key={actor.id} 
				       actor={actor}
                       onChooseActor={props.onChooseActor}
				/>)}
			</div> 
			<p className={styles.movieGenres}>Genres: {movie.genres}</p>
			<p className={styles.movieDescription}>{movie.description}</p>
		</div>
	)
}


export default withRouter(MovieInfo);