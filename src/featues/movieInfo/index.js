import React, {Component} from "react";
import styles from './index.module.css';
import { withRouter } from 'react-router-dom';
import Stars from '../../components/Stars/Stars.js';
import Actor from '../../components/Actor/Actor.js'
import axios from "../../axios/baseURL.js";


class MovieInfo extends Component {
	constructor(props) {
		super(props);

		this.actorsStore = null;
	}

	async componentDidMount(){
		const actorsIds = this.props.chosenMovie.actorsIds;
		this.actorsStore = [];

		for(let i=0; i<actorsIds.length; i++){
			try{
				const response = await axios.get(`/actors/${actorsIds[i]}`);
				this.actorsStore.push(response.data);
			} catch (e) {
				console.log('ERROR', e);
			}
		}
		this.props.findActors(this.actorsStore);
	}

	deleteMovie(){
		const moviesList = this.props.moviesList.filter( movie => {
			if(movie.id !== this.props.chosenMovie.id) return movie;
		});
		this.props.deleteMovie(moviesList);
	}

	render() {
		return (
			<div className={styles['container--movieInfo']}>
				<img className={styles.movieImg}
				     alt={'poster'}
				     src={this.props.chosenMovie.posterUrl}
				     height={'200'}
				/>
				<div className={styles.controlBtn}>
					<button
						className = {styles.btnEdit}
						onClick = {() => {
							this.props.history.push('/edit/');
						}}
					>
						Edit
					</button>
					<button
						className = {styles.btnDelete}
						onClick = {() => {
							this.deleteMovie(this.props.chosenMovie.id);
							this.props.history.push('/movies/');
						}}
					>
						Delete
					</button>
				</div>
				<p className={styles.movieTitle}>{this.props.chosenMovie.title}</p>
				<div className={styles.movieLikesStars}>
					<div className={styles.movieLikes}>Likes: {this.props.chosenMovie.likes}</div>
					<Stars movie = {this.props.chosenMovie}
					       moviesList = {this.props.moviesList}
					       changeStars = {this.props.changeStars}
					/>
				</div>
				<p className={styles.movieDirector}>Director: {this.props.chosenMovie.director}</p>
				<div className={styles.movieActors}>Actors: {this.props.actorsStore.map(actor =>
					<Actor key={actor.id}
					       actor={actor}
					       chooseActor={this.props.chooseActor}
					/>)}
				</div>
				<p className={styles.movieGenres}>Genres: {this.props.chosenMovie.genres}</p>
				<p className={styles.movieDescription}>{this.props.chosenMovie.description}</p>
			</div>
		)
	}
}


export default withRouter(MovieInfo);