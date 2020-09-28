import React, { Component } from "react";
import styles from './index.module.css';
import Input from '../../components/Input/Input.js';
import { withRouter } from 'react-router-dom';
import axios from '../../axios/baseURL.js';


class Registration extends Component{
    constructor(props){
        super(props)
        this.props = props;
    }

    submitHandler(ev){
        ev.preventDefault();
        const login = document.getElementsByName('inp-login-enter')[0].value;
        const password = document.getElementsByName('inp-password-enter')[0].value;
        const user = {name:login, password};
        try{
            axios.post('/users', user);
        } catch (e){
            console.log('ERROR', e);
        }
        this.props.setUser(true, login);
    }

    render(){
        return (
            <div className={styles['container--login']}>
                <h4>{this.props.translation["registration-title"]}</h4>
                <form className = {styles['form--login']}>
                    <Input 
                        type = {'text'}
                        label = {this.props.translation["registration-inpLable-login"]}
                        placeholder = {this.props.translation["registration-inpPlaceholder-login"]}
                        name = {'inp-login-enter'}
                    />
                    <Input 
                        type = {'text'}
                        label = {this.props.translation["registration-inpLable-pass"]}
                        placeholder = {this.props.translation["registration-inpPlaceholder-pass"]}
                        name = {'inp-password-enter'}
                    />
                    <button 
                        onClick = {async (ev) => {
                            await this.submitHandler(ev, this.props);
                            if (this.props.isLogin) this.props.history.push('/movies/');                            
                    }}>
                        {this.props.translation["registration-btn"]}
                    </button>                        
                </form>
            </div>        
        )
    }    
}

export default withRouter(Registration);