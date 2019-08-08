import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";

export default(
    <Switch>
        <Route path="/home"/>
        <Route path="/services/"/>
        <Route path="/quotes/"/>
        <Route path="/quotes/form"/>
        <Route path="/contact-us"/>
        <Route path="/terms-and-conditions"/>
        <Route path="/privacy-policy"/>
    </Switch>
);