import React from "react";
import styles from './index.module.css';



const ActorInfo = (props) => {
    return (
        <div className = {styles.container}>
            <img src = {props.chosenActor.imgUrl} alt = {'img'} width={'200'}/>
            <h4 className = {styles.actorName}>{props.chosenActor.name}</h4>
            <p className = {styles.biography}>{props.chosenActor.biography}</p>
        </div>
    ); 

}

export default ActorInfo;