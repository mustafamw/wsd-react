import React, { Component } from 'react';
import Main from '../../pages/main/Main';
import Service from '../../pages/service/Service';
import Booking from '../../pages/booking/booking';
import BookingForm from '../../pages/booking-form/BookingForm';
import QuotesForm from '../../pages/quote-form/QuoteForm';
import ContactUs from '../../pages/contact-us/ContactUs';
import TermsAndConditions from '../../pages/terms-and-conditions/TermsAndConditions';
import PrivacyPolicy from '../../pages/privacy-policy/privacy-policy';
import Payment from '../../pages/payment/Payment';
import Location from '../../pages/location/Location';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import NotFound from '../../pages/404/404';
import { PathUrl } from '../../constant/path-url/PathUrl';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.onRouteChanged();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    isPathMatch(){
        let match = false;
        const path = this.props.location.pathname.replace(/\//g, '').toLocaleLowerCase();
        if(PathUrl.indexOf(path) !== -1){
            match = true;
        }else{
            match = false;
        }
        return {
            match: match,
            path: path
        };
    }

    onRouteChanged() {
        this.props.onRouteChanged(this.isPathMatch());
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact={true} component={Main}/>
                <Route path="/booking/" exact={true} component={Booking} />
                <Route path="/booking/form" exact={true} component={BookingForm} />
                <Route path="/booking/quotes/form" exact={true} component={QuotesForm} />
                <Route path="/services/" component={Service} />
                <Route path="/location" component={Location} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/terms-and-conditions" component={TermsAndConditions} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route path="/payment" component={Payment} />
                <Route component={NotFound} exact={false} path="*"/>
            </Switch>
        );
    }
}

export default withRouter(Routes);
