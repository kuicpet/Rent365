import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Account = () => {
    return (
        <div className="row text-center">
            <Header />
            <div className="col-sm-12 accountSection">
                <h3>Account</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Account;