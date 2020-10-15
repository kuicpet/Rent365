import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../App";
import Product from "./Product";

class Router extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={ App }/>
                    <Route path="/product/:uri" component={ Product } />
                </Switch>
            </Router>
        );
    };
}

export default Router;
