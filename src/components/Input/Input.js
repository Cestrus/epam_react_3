import React from "react";
import styles from './Input.module.css';


const Input = props =>{
    const inputType = props.type || 'text';
    const htmlFor = `${inputType} -- ${Math.random()}`;
    const inpRef = React.createRef();


    return(
        <div className={styles.Input}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type = {inputType}
                id = {htmlFor}
                name = {props.name}
                defaultValue = {props.value}
                placeholder = {props.placeholder}
                onChange = {props.onChange}
                ref = {inpRef}
            />
            <span>{props.errorMessage}</span>
        </div>
    )
}


export default Input;