import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_oI2FhlQOLkMw3vIcq3dhLqzO00b2jsABEX';
    const secretKey = 'sk_test_lOJ5mem33SNxvR8M4DmdB2dX00a4ipJZBV';
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
    return (
        <StripeCheckout
            name="CRWN Clothing Ltd." // the pop-in header title
            description={`Your total is $${price}`} // the pop-in header subtitle
            image="https://svgshare.com/i/KaU.svg" // the pop-in header image (default none)
            ComponentClass="div"
            label="Pay Now" // text inside the Stripe button
            panelLabel="Pay Now" // prepended to the amount in the bottom pay button
            amount={priceForStripe} // cents
            currency="USD"
            stripeKey={publishableKey}
            locale="en"
            // email="info@vidhub.co"
            // Note: Enabling either address option will give the user the ability to
            // fill out both. Addresses are sent as a second parameter in the token callback.
            shippingAddress
            billingAddress
            // Note: enabling both zipCode checks and billing or shipping address will
            // cause zipCheck to be pulled from billing address (set to shipping if none provided).
            // zipCode={false}
            // alipay // accept Alipay (default false)
            // bitcoin // accept Bitcoins (default false)
            // allowRememberMe // "Remember Me" option (default true)
            token={onToken} // submit callback
            // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
            // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
            // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
            // you are using multiple stripe keys
            // reconfigureOnUpdate={false}
            // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
            // useful if you're using React-Tap-Event-Plugin
            // triggerEvent="onTouchTap"
        />
    );
}
export default StripeCheckoutButton;