import React from "react";
import styles from './index.module.css';
import Input from '../../components/Input/Input.js';
import { withRouter } from 'react-router-dom';



const EditMovie = props => {
    return(
        <div className={styles['container--editForm']}>
            <form className={styles['form--edit']}>
                <Input
                    type={'text'}
                    label={'Title'}
                    name={'inp-title-edit'}
                    value={props.chosenMovie.title}
                />
                <Input
                    type={'text'}
                    label={'Image URL'}
                    name={'inp-posterUrl-edit'}
                    value={props.chosenMovie.posterUrl}
                />
                <Input
                    type={'text'}
                    label={'Director'}
                    name={'inp-director-edit'}
                    value={props.chosenMovie.director}
                />
                <Input
                    type={'text'}
                    label={'Genres'}
                    name={'inp-genres-edit'}
                    value={props.chosenMovie.genres}
                />
                <div>
                    <label>Description</label>
                    <textarea
                        name={'description-edit'}
                        defaultValue={props.chosenMovie.description}
                    />
                </div>
                <button
                    onClick={() => {
                        props.editMovie(props.chosenMovie.id);
                        props.history.push('/movies/' + props.chosenMovie.id);
                    }}>
                    Send data
                </button>
            </form>
        </div>
    )}

export default withRouter(EditMovie);