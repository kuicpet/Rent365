import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import Product from "./Product";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Cart from "./Cart";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={ App } exact/>
                    <Route path="/account/signup" component={ SignUp } />
                    <Route path="/account/signin" component={ SignIn } />
                    <Route path="/product/:uri" component={ Product } />
                    <Route path="/cart" component={ Cart } />
                </Switch>
            </BrowserRouter>
        );
    };
}

export default Router;
