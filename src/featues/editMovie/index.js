import React, {Component} from "react";
import styles from './index.module.css';
import Input from '../../components/Input/Input.js';
import { withRouter } from 'react-router-dom';



class EditMovie extends Component{
    constructor(props) {
        super(props);
    }

    editMovie(){
        const moviesList = [...this.props.moviesList];
        const chosenMovie = Object.assign({},this.props.chosenMovie);

        chosenMovie.title = document.getElementsByName('inp-title-edit')[0].value;
        chosenMovie.posterUrl = document.getElementsByName('inp-posterUrl-edit')[0].value;
        chosenMovie.director = document.getElementsByName('inp-director-edit')[0].value;
        chosenMovie.genres = document.getElementsByName('inp-genres-edit')[0].value;
        chosenMovie.description = document.getElementsByName('description-edit')[0].value;

        let indx;
        moviesList.forEach((movie, index) => {
            if(movie.id === chosenMovie.id){
                indx = index;
            }
        });
        moviesList.splice(indx, 1, chosenMovie);
        this.props.editMovie(chosenMovie, moviesList);
    }

    render(){
        return(
            <div className={styles['container--editForm']}>
                <form className={styles['form--edit']}>
                    <Input
                        type={'text'}
                        label={'Title'}
                        name={'inp-title-edit'}
                        value={this.props.chosenMovie.title}
                    />
                    <Input
                        type={'text'}
                        label={'Image URL'}
                        name={'inp-posterUrl-edit'}
                        value={this.props.chosenMovie.posterUrl}
                    />
                    <Input
                        type={'text'}
                        label={'Director'}
                        name={'inp-director-edit'}
                        value={this.props.chosenMovie.director}
                    />
                    <Input
                        type={'text'}
                        label={'Genres'}
                        name={'inp-genres-edit'}
                        value={this.props.chosenMovie.genres}
                    />
                    <div>
                        <label>Description</label>
                        <textarea
                            name={'description-edit'}
                            defaultValue={this.props.chosenMovie.description}
                        />
                    </div>
                    <button
                        onClick={() => {
                            this.editMovie();
                            this.props.history.push('/movies/' + this.props.chosenMovie.id);
                        }}>
                        Send data
                    </button>
                </form>
            </div>
        )
    }
}


export default withRouter(EditMovie);