import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state ={
        ingredients: {
            salad:1,
            meat:1,
            cheese:1,
            bacon:1
        }
    }


    checkoutCancelledHandler = () => {

        this.props.history.goBack();/*  esto simplemente regresa a la ultima pagina osea al home donde cremos la hamburguesa */

    }


    checkoutContinuedHandler = () => {

        this.props.history.replace('/checkout/contact-data');/*  aqui decimos que reemplace la ruta actual con una nueva ruta  */

    }

    render (){
        return (
            <div>
                <CheckoutSummary 
                 ingredients={this.state.ingredients}
                 checkoutCancelled={this.checkoutCancelledHandler}
                 checkoutContinued={this.checkoutContinuedHandler} /* vienen del archivo CheckoutSummary */
                />
            </div>
        );
    }
    
}



export default Checkout; 