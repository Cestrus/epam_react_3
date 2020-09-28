import React, {Component} from "react";
import styles from './index.module.css';
import {reduxForm, Field} from "redux-form";

class EditMovie extends Component{
    constructor(props) {
        super(props);
        this.props = props;
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

        console.log('choosenMovie', this.props.chosenMovie)
    }

    render(){
        console.log('render choosenMovie', this.props.chosenMovie)
        return(
          <div className={styles['container--editForm']}>
               <form onSubmit={this.editMovie.bind(this)}>
                    <div>
                        <label>{this.props.translation["editMovie-inpLable-title"]}</label>
                        <Field
                          component= "input"
                          type={'text'}
                          name={'inp-title-edit'}
                          value={this.props.chosenMovie.title}
                        />
                    </div>
                    <div>
                        <label>{this.props.translation["editMovie-inpLable-imgURL"]}</label>
                        <Field
                          component="input"
                          type={'text'}
                          name={'inp-posterUrl-edit'}
                          value={this.props.chosenMovie.posterUrl}
                        />
                    </div>
                    <div>
                        <label>{this.props.translation["editMovie-inpLable-director"]}</label>
                        <Field
                          component="input"
                          type={'text'}
                          name={'inp-director-edit'}
                          value={this.props.chosenMovie.director}
                        />
                    </div>
                    <div>
                        <label>{this.props.translation["editMovie-inpLable-genres"]}</label>
                        <Field
                          component="input"
                          type={'text'}
                          name={'inp-genres-edit'}
                          value={this.props.chosenMovie.genres}
                        />
                    </div>
                    <div>
                        <label>{this.props.translation["editMovie-areaLable"]}</label>
                        <Field
                          component="textarea"
                          type={'textarea'}
                          name={'description-edit'}
                          value={this.props.chosenMovie.description}
                        />
                    </div>
                    <button
                      type={"submit"}
                    >
                        {this.props.translation["editMovie-btnSubmit"]}
                    </button>
                </form>
          </div>
        )
    }
}


export default reduxForm({
    form: 'editMovie-form',
})(EditMovie);

