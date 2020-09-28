import React, {Component} from "react";
import styles from './Filter.module.css';
import axios from "../../../axios/baseURL.js";



class Filter extends Component{
	constructor(props) {
		super(props);

		this.searchList = [];
	}

	async componentDidMount() {
		try {
			if(!this.props.moviesList){
				const response = await axios.get(`/movies`);
				this.searchList = response.data;
			}
		} catch (e) {
			console.log('ERROR: ', e);
		}
	}

	sortByLikes(){
		let moviesList = [...this.props.moviesList];
		moviesList.sort((a, b) => {
			if (a.likes > b.likes) return -1;
			if (a.likes === b.likes) return 0;
			if (a.likes < b.likes) return 1;
		});
		this.props.sortByLikes(moviesList);
	}

	sortByRating(){
		let moviesList = this.props.moviesList.slice();
		moviesList.sort((a,b) => {
			if (a.stars > b.stars) return -1;
			if (a.stars === b.stars) return 0;
			if (a.stars < b.stars) return 1;
		});
		this.props.sortByRating(moviesList);
	}

	searchMovie(styleName){
		let moviesList = null;
		let str = document.getElementsByClassName(styleName)[0].value;
		if(!str){
			moviesList = [...this.searchList];
		} else {
			moviesList = [...this.searchList].filter(movie => {
				if(movie.title.toUpperCase().indexOf(str.toUpperCase()) !== -1){
					return movie;
				}
			});
		}
		this.props.searchMovie(moviesList);
	}

	render(){
		return (
			<div className={styles['container--filter']}>
				<h5 className={styles['title--filter']}>{this.props.translation["homepage-sort-title"]}</h5>
				<div>
					<button className={styles.btn + ' ' + styles['btn__sort']}
					        onClick={() => this.sortByLikes()}
					>
						{this.props.translation["homepage-btnSortByLike"]}
					</button>
					<button className={styles.btn + ' ' + styles['btn__sort']}
					        onClick={() => this.sortByRating()}
					>
						{this.props.translation["homepage-btnSortByRating"]}
					</button>
				</div>
				<div className={styles.search}>
					< button className={styles.btn + ' ' + styles['btn__search']}
					         onClick={() => this.searchMovie(styles['inp__search'])}
					/>
					<input className={styles.inp + ' ' + styles['inp__search']}
					       placeholder={this.props.translation['homepage-inpSearch']}
					/>
				</div>
			</div>
		);
	}
}


export default Filter;