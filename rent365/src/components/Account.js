import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Account = () => {
    return (
        <div className="row text-center">
            <Header />
            <div className="col-sm-12 col-md-3 col-lg-3 side-nav">
                <h3>Side Nav</h3>
                <Nav className="nav-items">
                   <Link to="/customer/account">My Rent365 Account</Link>
                   <Link to="/customer/order">Orders</Link>
                   <Link to="/customer/saved-items">Saved Items</Link>
                   <Link>Sign Out</Link>
                </Nav>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 accountSection">
                <h3>Account</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Account;