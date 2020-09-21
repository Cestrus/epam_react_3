import React, { Component } from "react";
import styles from './index.module.css';
import { Link, withRouter } from 'react-router-dom';
import Input from '../../components/Input/Input.js';


class Login extends Component {
    constructor(props){
        super(props)
        this.props = props;
    }

    submitHandler(ev, props){       
        ev.preventDefault();
        const login = document.getElementsByName('inp-login-enter')[0].value;
        const pass = document.getElementsByName('inp-password-enter')[0].value;        
        props.checkLogPass(login, pass);
    }
    
    render(){
        const classes = [styles.notFoundUser];
        if(this.props.isLogin === false){
            classes.push(styles.unhide)
        }
        return (
            <div className={styles['container--login']}>
                <h4>Please login</h4>
                <form className = {styles['form--login']}>
                    <Input 
                        type = {'text'}
                        placeholder = {'Login'}
                        name = {'inp-login-enter'}
                    />
                    <Input 
                        type = {'text'}
                        placeholder = {'Password'}
                        name = {'inp-password-enter'}
                    />
                    <button 
                        onClick = {async (ev) => {
                            await this.submitHandler(ev, this.props);
                            if(this.props.isLogin) this.props.history.push('/movies/');
                    }}>
                        Login
                    </button>                        
                </form>
                <span className = {classes.join(' ')}>Did not found user. Retry login and password.</span>
                <p>Dont have account? <Link to={'/registration'}>Go to registration</Link></p>
            </div>        
        )
    }       
}


export default withRouter(Login);
