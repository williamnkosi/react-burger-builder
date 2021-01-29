import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Buttons/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log("[OrderedSummary] did update")
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (<li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        })
        return (
            <Aux>
                <h3>Your Oder</h3>
                <p>A delicious burger with the follwoing ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: {this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }

}

export default OrderSummary
