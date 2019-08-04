import React, { Component } from 'react';
import Main from '../../pages/main/Main';
import Service from '../../pages/service/Service';
import Quotes from '../../pages/quotes/Quotes';
import QuotesForm from '../../pages/quote-form/QuoteForm';
import ContactUs from '../../pages/contact-us/ContactUs';
import TermsAndConditions from '../../pages/terms-and-conditions/TermsAndConditions';
import PrivacyPolicy from '../../pages/privacy-policy/privacy-policy';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import NotFound from '../../pages/404/404';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.onRouteChanged(this.props.location);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged(this.props.location);
        }
    }

    onRouteChanged(location) {
        this.props.onRouteChanged(location);
    }


    render() {
        return (
            <Switch>
                <Route exact={true} path="/" render={() => (<Redirect to="/home" />)} />
                <Route path="/home" exact={true} component={Main} />
                <Route path="/services/" exact={true} component={Service} />
                <Route path="/quotes/" exact={true} component={Quotes} />
                <Route path="/quotes/form" exact={true} component={QuotesForm} />
                <Route path="/contact-us" exact={true} component={ContactUs} />
                <Route path="/terms-and-conditions" exact={true} component={TermsAndConditions} />
                <Route path="/privacy-policy" exact={true} component={PrivacyPolicy} />
                <Route component={NotFound} exact={false} name="fdgdf" path="*" />
            </Switch>
        );
    }
}

export default withRouter(Routes);
