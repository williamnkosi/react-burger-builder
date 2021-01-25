import React from 'react'
import Classes from './BuildControl.css';

const BuildControl = () => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.lable}</div>
            <button className={Classes.Less}>Less</button>
            <button className={Classes.More}>More</button>
        </div>
    )
}

export default BuildControl
