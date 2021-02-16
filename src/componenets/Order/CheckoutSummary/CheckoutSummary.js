import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Buttons/Button';
import Classes from './CheckoutSummary.css'
const CheckoutSummary = (props) => {
    return (
        <div className={Classes}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger"
                clicked>CANCEL</Button>
            <Button btnType="Success"
                clicked>Successs</Button>
        </div>
    )
}

export default CheckoutSummary
