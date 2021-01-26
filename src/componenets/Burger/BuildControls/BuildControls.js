import React from 'react';
import Classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
    <div className={Classes.BuildControls}>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}></BuildControl>
        ))}
    </div>
)


export default BuildControls
