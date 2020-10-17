import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import Product from "./Product";
import SignUp from "./auth/SignUp";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ App }/>
                    <Route path="/account/signup" component={ SignUp } />
                    <Route path="/product/:uri" component={ Product } />
                </Switch>
            </BrowserRouter>
        );
    };
}

export default Router;
