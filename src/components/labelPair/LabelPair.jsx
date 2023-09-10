import React from 'react';
import style from './LabelPair.module.css';

const LabelPair = ({label, value}) => {
    return (
        <div className={style.container} >
            <span className={style.label}>
                {label}                
            </span>
            <span>
                :
            </span>
            <span className={style.value}>
                {value}
            </span>
        </div>
    );
};

export default LabelPair;