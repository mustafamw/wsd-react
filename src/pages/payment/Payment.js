import React, { Component } from "react";
import './Payment.scss';
import payments from '../../assets/img/resource/payment.png';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { Config } from '../../config/config';
import NumberFormat from 'react-number-format';
import checked from '../../assets/img/icons/checked.png';

class Payment extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            total: Config.DEFAULTPAYMENT,
            details: {},
            hide: false
        }
        this.makePayment = this.makePayment.bind(this);
    }

    makePayment(event) {
        event.preventDefault();
        this.setState({
            total: Config.DEFAULTPAYMENT,
            hide: false
        });
    }

    render() {

        const details = this.state.details;

        const currencyFormat = (num) => {
            return '£' + parseFloat(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
        
        return (
            <article className="payment">
                <section className="white">
                    <div className="container">
                        { !this.state.hide ?
                            <div>
                                <div className="payments-container">
                                    <img src={payments} className="payments" alt="payments"/>
                                </div>
                                <div className="display-flex">
                                    <div className="col-xl-4 col-md-4 col-sm-4 col-xs-4 col-6">
                                        <h3 className="grid-title">Step 1</h3>
                                        <p>
                                            Get an <b>instant</b> quote <Link to="/quotes">click here</Link>
                                        </p>
                                    </div>
                                    <div className="col-xl-4 col-md-4 col-sm-4 col-xs-4 col-6">
                                        <h3 className="grid-title">Step 2</h3>
                                        <p>
                                            Contact us via Email or Phone to confirm the price, give us the collection and delivery details and pay by credit or debit card
                                        </p>
                                    </div>
                                    <div className="col-xl-4 col-md-4 col-sm-4 col-xs-4 col-6">
                                        <h3 className="grid-title">Step 3</h3>
                                        <p>
                                            We'll arrange a courier to collect and delivery according to your requirements
                                        </p>
                                    </div>
                                </div>
                                <div className="clear-both"></div>
                                <div className="col-12">
                                    <div className="text-align-center paypal-container">
                                        <NumberFormat
                                            isAllowed={(values) => {
                                                const {floatValue} = values;
                                                return !floatValue || (floatValue > 0 &&  floatValue <= 1000000);
                                            }}
                                            decimalScale="2"
                                            value={this.state.total} 
                                            thousandSeparator={true} 
                                            prefix={'£'} 
                                            placeholder="Please enter the payment amount e.g. £1"
                                            onValueChange={(values) => {
                                                const {formattedValue, value} = values;                                    
                                                this.setState({total: value});
                                            }}
                                        />
                                        { this.state.total > 0 ? 
                                            <PayPalButton
                                                options={{
                                                    clientId: Config.PAYPALCLIENTID,
                                                    currency: "GBP"
                                                }}
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        purchase_units: [{
                                                            description: "WSD Courier & Cargo Payment",
                                                            amount: {
                                                                currency_code: "GBP",
                                                                value: this.state.total
                                                            }
                                                        }],
                                                        application_context: {
                                                            shipping_preference: "NO_SHIPPING"
                                                        }
                                                    });
                                                }}
                                                onApprove={(data, actions) => {
                                                    return actions.order.capture().then((details) => {
                                                        this.setState({
                                                            details,
                                                            hide: true
                                                        });
                                                    });
                                                }}
                                            /> : null
                                        }
                                    </div>
                                    <div className="clear-both"></div>
                                </div>
                            </div> :
                            <div>
                                <div className="confirmation">
                                    <img src={checked} alt="success" />
                                    <h3>Payment Confirmation</h3>
                                    <p>Thank you, your payment <b>{currencyFormat(details.purchase_units[0].amount.value)}</b> has been successful.</p>
                                    <p><a href="" onClick={this.makePayment}>Click here</a> to make another payment.</p>
                                </div>
                                <div className="clear-both"></div>
                            </div>
                        }
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="col-xl-12 text-align-center">
                            <h1>Payment</h1>
                            <p>Booked in 3 minutes Collected within 60 minutes Delivered direct... ASAP</p>
                            <p>We can collect from anywhere on the UK mainland within 60 minutes of booking and deliver direct to anywhere in the UK, Ireland or Europe.</p>
                            <p>Get instant quote for same day or next day delivery between any two addresses on the UK mainland (please call for a price for multiple collection or delivery points). If you’re happy with the price just give us a call to confirm it, supply us with a few details and we’ll be on our way to collect.</p>
                            <p>Credit terms available for regular customers.</p>
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </section>
                <section>
                    <div className="container quotes info">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 margin-center">
                            <h3 className="text-align-center">Contact us for further information.</h3>
                            <Link to="/contact-us" className="blue button">Please contact one of our team</Link>
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}

export default Payment;
