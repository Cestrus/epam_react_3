import React, {Component} from "react";
import styles from './MovieCard.module.css';
import { withRouter } from "react-router-dom";
import Stars from "../../../../components/Stars/Stars.js";


class MovieCard extends Component{
	constructor(props) {
		super(props);
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
		this.props.chooseMovie(chosenMovie);
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