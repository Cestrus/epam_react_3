import React from "react";
import styles from './Filter.module.css';
import PropTypes from 'prop-types';


const Filter = props => {
	return (
		<div className={styles['container--filter']}>
			<h5 className={styles['title--filter']}>Sort movies</h5>
			<div>
				<button className={styles.btn + ' ' + styles['btn__sort']}
						onClick={() => props.sortByLikes()}
				>
					by likes
				</button>
				<button className={styles.btn + ' ' + styles['btn__sort']}
						onClick={() => props.sortByRating()}
				>
					by rating
				</button>
			</div>
			<div className={styles.search}>
				< button className={styles.btn + ' ' + styles['btn__search']}
						onClick={() => props.searchMovie(styles['inp__search'])}
				/>
				<input className={styles.inp + ' ' + styles['inp__search']}
				       placeholder={'Search by name'}
				/>
			</div>

		</div>
	);
}

Filter.propTypes = {
	sortByLikes: PropTypes.func,
	sortByRating: PropTypes.func,
	searchMovie: PropTypes.func,
}

export default Filter;