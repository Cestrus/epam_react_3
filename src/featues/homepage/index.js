import React, {Component} from "react";
import styles from './index.module.css';
import Filter from "./Filter/Filter.js";
import MoviesList from "./MoviesList/MoviesList.js";
import axios from "../../axios/baseURL.js";
import Loader from "../../components/Loader/Loader";


class Homepage extends Component{
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		try {
			if(!this.props.moviesList){
				const response = await axios.get(`/movies`);
				this.props.loadingMovies(response.data, false);
			}
		} catch (e) {
			console.log('ERROR: ', e);
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<Filter sortByRating={this.props.sortByRating}
				        sortByLikes={this.props.sortByLikes}
				        searchMovie={this.props.searchMovie}
				        moviesList={this.props.moviesList}
				/>
				{
					this.props.isLoading
					? <Loader/>
					: <MoviesList moviesList={this.props.moviesList}
				            changeStars={this.props.changeStars}
				            changeLikes={this.props.changeLikes}
				            chosenMovie={this.props.chosenMovie}
				            chooseMovie={this.props.chooseMovie}
					  />
				}
			</div>
		)
	};
}

export default Homepage;