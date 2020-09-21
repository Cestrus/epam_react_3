import React, { Component } from "react";
import styles from './index.module.css';
import Input from '../../components/Input/Input.js';
import { withRouter } from 'react-router-dom';


class Registration extends Component{
    constructor(props){
        super(props)
        this.props = props;
    }

    submitHandler(ev, props){
        ev.preventDefault();
        const login = document.getElementsByName('inp-login-enter')[0].value;
        const pass = document.getElementsByName('inp-password-enter')[0].value; 
        props.setLogPass(login, pass);
    }

    render(){
        return (
            <div className={styles['container--login']}>
                <h4>Registration</h4>
                <form className = {styles['form--login']}>
                    <Input 
                        type = {'text'}
                        label = {'Input login'}
                        placeholder = {'Login'}
                        name = {'inp-login-enter'}
                    />
                    <Input 
                        type = {'text'}
                        label = {'Input password'}
                        placeholder = {'Password'}
                        name = {'inp-password-enter'}
                    />
                    <button 
                        onClick = {async (ev) => {
                            await this.submitHandler(ev, this.props);
                            if (this.props.isLogin) this.props.history.push('/movies/');                            
                    }}>
                        Send data
                    </button>                        
                </form>
            </div>        
        )
    }    
}

export default withRouter(Registration);