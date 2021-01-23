import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";

export default(
    <Switch>
        <Route path="/"/>
        <Route path="/booking/"/>
        <Route path="/booking/form"/>
        <Route path="/services/"/>
        <Route path="/location/"/>
        <Route path="/contact-us"/>
        <Route path="/terms-and-conditions"/>
        <Route path="/privacy-policy"/>
        <Route path="/payment/"/>
    </Switch>
);