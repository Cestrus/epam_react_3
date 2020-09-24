import React from "react";
import {Link, withRouter} from "react-router-dom";
import styles from './Header.module.css';


const Header = (props) => {
    const classes = [styles.logOut];
    if(props.isLogin){
        classes.push(styles.unhide);
    } else {
        classes.push(styles.hide)            
    }

    return (
        <div className = {styles.header}>
            <Link to={{pathname: '/'}}><h2 className = {styles.title}>Movies site</h2></Link>
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