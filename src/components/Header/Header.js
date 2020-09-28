import React from "react";
import {Link, withRouter} from "react-router-dom";
import styles from './Header.module.css';
import LangBtn from '../LangBtn/LangBtn.js';


const Header = (props) => {
    const classes = [styles.logOut];
    if(props.isLogin){
        classes.push(styles.unhide);
    } else {
        classes.push(styles.hide)            
    }

    const langArr = ['EN', 'RU', 'UA'];

    return (
        <div className = {styles.header}>
            <div className={styles['langContainer']}>
                {langArr.map((el, index) => 
                    <LangBtn key = {el + index} 
                            lang = {el}
                            langHandler = {props.langHandler}
                    />)}
            </div>
            <div className={styles.title}>
            <Link to={{pathname: '/'}}><h2 >Movies site</h2></Link>
            </div>                       
            <div className={classes.join(' ')}>
                <span>{props.userName}</span>
                <button className = {styles['btn--logOut']}
                    onClick = { () => {
                        props.logOutHandler();
                        props.history.push('/');
                    }}
                >
                    logOut
                </button>
            </div>            
        </div>
    )
}

export default withRouter(Header);