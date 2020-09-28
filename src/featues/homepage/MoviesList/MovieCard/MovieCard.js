import React, {Component} from "react";
import styles from './MovieCard.module.css';
import { withRouter } from "react-router-dom";
import Stars from "../../../../components/Stars/Stars.js";
import axios from "../../../../axios/baseURL";


class MovieCard extends Component{
	constructor(props) {
		super(props);

		this.actorsStore = null
	}

	changeLikes(id, like){
		let moviesList = [...this.props.moviesList];
		let likes = this.props.movie.likes;
		like? likes++ : likes--;
		this.props.movie.likes = likes;
		this.props.changeLikes(moviesList);
	};

	chooseMovie(){
		let chosenMovie = null;
		this.props.moviesList.forEach(movie => {
			if(movie.id === this.props.movie.id){
				chosenMovie = movie;
			}
		});
		this.loadActors(chosenMovie.actorsIds);
		this.props.chooseMovie(chosenMovie);
		this.props.chooseMovieForm(chosenMovie);
	}

	async loadActors(actorsIds){
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

	render(){
		return (
			<div className={styles.movieCard}>
				<img className={styles.movieCardImg} src={this.props.movie.posterUrl} alt = {'poster'} height={'150'}/>
				<p className={styles.movieCardTitle}
				   onClick = {() => {
					   this.chooseMovie();
					   this.props.history.push('/movies/' + this.props.movie.id);
				   }}
				>
					{this.props.movie.title}
				</p>
				<Stars movie = {this.props.movie}
				       moviesList = {this.props.moviesList}
				       changeStars = {this.props.changeStars}
				/>
				<div className={styles.movieCardLikesLine}>
					<div className={styles.like}
					     onClick={() => this.changeLikes(this.props.movie.id, true)}
					/>
					<div className={styles.dislike}
					     onClick={() => this.changeLikes(this.props.movie.id, false)}
					/>
					<p>Likes: {this.props.movie.likes}</p>
				</div>
			</div>
		)
	}
}

export default withRouter(MovieCard);