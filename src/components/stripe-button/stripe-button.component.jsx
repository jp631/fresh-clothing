import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HWljTF4OkvtmxevQ74TZexIyEyvmO41GIH3Oig29ZVIRnh2kVh9Ea6jINIYRaY5ZwdcCetUprtWPVPPwftbmHeX00rIeWtZe4'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
        label='Pay Now' 
        name='Fresh Clothing'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;