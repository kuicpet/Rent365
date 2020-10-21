import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Account = () => {
    const history = useHistory();
    const signOut = () => {
        localStorage.removeItem("user");
        return history.push("/");
    }
    return (
        <div className="row text-center">
            <Header />
            <div className="col-sm-12 col-md-3 col-lg-3 side-nav">
                <Nav className="acct-items pt-4">
                   <Link className="px-3 py-2 item" to="/customer/account">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                       <span className="mx-3">My Rent365 Account</span>
                    </Link>
                   <Link className="px-3 py-2 item" to="/customer/order">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        <span className="mx-3">Orders</span>
                   </Link>
                   <Link className="px-3 py-2 item" to="/customer/saved-items">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <span className="mx-3">Saved Items</span>
                   </Link>
                   <Link
                      onClick={() => signOut()}
                      className="px-3 py-2 item"
                      to="/">
                       Sign Out
                    </Link>
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