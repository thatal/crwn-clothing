import React, { Component } from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
class CartDropdown extends Component {
    render() {
        return (
            <div className="cart-dropdown">
                <div className="cart-items"></div>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        );
    }
}

export default CartDropdown;