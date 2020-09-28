import React from 'react';
import {languageEN} from "../intl/en";
import {languageRU} from "../intl/ru";
import {languageUA} from "../intl/ua";



const withTranslation = ( Component ) => ( props ) => {
    const translation = {};
    switch(props.language){
        case 'EN':
            Object.assign(translation, languageEN);
            break;
        case 'RU':
            Object.assign(translation, languageRU);
            break;
        case 'UA':
            Object.assign(translation, languageUA);
            break;
        default: Object.assign(translation, languageEN);
    }

    return <Component translation = {translation} {...props}/>
}

export default withTranslation;
