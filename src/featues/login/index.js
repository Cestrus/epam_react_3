import React, { Component } from "react";
import styles from './index.module.css';
import { Link, withRouter } from 'react-router-dom';
import Input from '../../components/Input/Input.js';
import axios from '../../axios/baseURL.js';


class Login extends Component {
    constructor(props){
        super(props)
        this.props = props;
        this.users = [];
    }

    submitHandler(ev){
        ev.preventDefault();
        const login = document.getElementsByName('inp-login-enter')[0].value;
        const password = document.getElementsByName('inp-password-enter')[0].value;
        this.checkLogPass(login, password);
    }

    checkLogPass(login, password) {
        let isLogin = false;
        let userName = null;
        this.users.forEach(user => {
            if(user.name === login && user.password === password){
                isLogin = true;
                userName = user.name;
            }
        });
        this.props.checkUser(isLogin, userName);
    }

    async componentDidMount(){
        try {
            const response = await axios.get(`/users`);
            this.users = response.data;
            if(this.props.isLogin) this.props.history.push('/movies/');
        } catch (e) {
            console.log('ERROR: ', e);
        }
    }

    render(){
        const classes = [styles.notFoundUser];
        if(this.props.isLogin === false){
            classes.push(styles.unhide)
        }
        return (
            <div className={styles['container--login']}>
                <h4>{this.props.translation['login-title']}</h4>
                <form className = {styles['form--login']}>
                    <Input 
                        type = {'text'}
                        placeholder = {this.props.translation['login-inpPlaceholder-login']}
                        name = {'inp-login-enter'}
                    />
                    <Input 
                        type = {'text'}
                        placeholder = {this.props.translation['login-inpPlaceholder-pass']}
                        name = {'inp-password-enter'}
                    />
                    <button 
                        onClick = {async (ev) => {
                            await this.submitHandler(ev);
                    }}>
                        {this.props.translation['login-btn']}
                    </button>                        
                </form>
                <span className = {classes.join(' ')}>{this.props.translation['login-userless']}</span>
                <p>{this.props.translation['login-questionToReg']}<Link to={'/registration'}>{this.props.translation['login-toReg']}</Link></p>
            </div>        
        )
    }       
}


export default withRouter(Login);
