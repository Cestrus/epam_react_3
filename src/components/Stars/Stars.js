import React from "react";
import styles from './Stars.module.css';


const Stars = props => {
	let stars = props.movie.stars;
	let starsIDArr = ['1_starID', '2_starID', '3_starID', '4_starID', '5_starID'];

	const renderStar = () => {
		if(stars){
			--stars;
			return styles.star + ' ' + styles.starFull;
		} else {
			return styles.star + ' ' + styles.starEmpty;
		}
	}

	const changeStars = (id) => {
		props.movie.stars = parseInt(id);
		props.changeStars([...props.moviesList]);
	}

	return (
		<div className={styles.movieStars}>
			{starsIDArr.map(id => {
				return(
					<div key={id}
					     className={renderStar()}
					     onClick={() => changeStars(id, props.idMovies)}
					/>
				)
			})}
		</div>
	)
}

export default Stars