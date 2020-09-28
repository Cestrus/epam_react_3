import React from "react";
import styles from './LangBtn.module.css';

const LangBtn = props => {
    return(
        <span className={styles['lang']}
              onClick = {() => props.langHandler(props.lang)}
        >
            {props.lang}
        </span>
    )
}

export default LangBtn;