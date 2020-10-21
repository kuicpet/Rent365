import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactLoading from "react-loading";

import App from "../App";
import Product from "./Product";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Cart from "./Cart";
import Account from "./Account";
import Order from "./Order";
import SavedItems from "./Saved-Items";

const isLoggedIn = () => {
    return localStorage.getItem("user") !== null;
};
/** const SecureRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
          {...rest}
          render={(props) => isLoggedIn === true ? (
              <Component { ...props } />
          ): (
              <Redirect to="/account/signin" />
          )}
        />
    );
};**/

class Router extends Component {
    render() {
        return (
            <Suspense fallback={ <div className="loader m-5">
                <ReactLoading
                  type={"spin"}
                  color={"#FF3300"}
                  className="spinner"
                  height={ 25 }
                  width={ 25 } />
            </div> }>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={ App } exact/>
                        <Route path="/account/signup" component={ SignUp } />
                        <Route path="/account/signin" component={ SignIn } />
                        <Route path="/product/:uri" component={ Product } />
                        <Route path="/cart" component={ Cart } />
                        <Route path="/customer/account" component={ Account } />
                        <Route path="/customer/order" component={ Order } />
                        <Route path="/customer/saved-items" component={ SavedItems } />
                    </Switch>
                </BrowserRouter> 
            </Suspense>
        );
    };
}

export default Router;
