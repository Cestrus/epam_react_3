import React from "react";
import styles from './MovieCard.module.css';
import { withRouter } from "react-router-dom";
import Stars from "../../../../components/Stars/Stars.js";


const MovieCard = props =>{
	return (
		<div className={styles.movieCard}>
			<img className={styles.movieCardImg} src={props.movie.posterUrl} alt = {'poster'} height={'150'}/>
				<p className={styles.movieCardTitle}
			        onClick = {() => {
				        props.findMovie(props.movie.id);
				        props.findActors();
				        props.history.push('/movies/' + props.movie.id);
			        }}
				>
					{props.movie.title}
				</p>
			<Stars stars = {props.movie.stars}
			       idMovies = {props.movie.id}
			       changeStars = {props.changeStars}
			/>
			<div className={styles.movieCardLikesLine}>
				<div className={styles.like}
				     onClick={() => props.changeLikes(props.movie.id, true)}
				/>
				<div className={styles.dislike}
				     onClick={() => props.changeLikes(props.movie.id, false)}
				/>
				<p>Likes: {props.movie.likes}</p>
			</div>
		</div>
	)
}

export default withRouter(MovieCard);