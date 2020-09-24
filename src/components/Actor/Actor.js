import React from "react";
import {withRouter} from "react-router-dom";
import styles from './Actor.module.css';

const Actor = props =>{
    return(
        <span className={styles.actor}
                onClick = {() => {
                    props.chooseActor(props.actor);
                    props.history.push('/actor/' + props.actor.name);
                }}
        >
            {props.actor.name}
        </span>
    )
}


export default withRouter(Actor);