import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";


const Account = () => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row text-center">
                <SideNav/>
                <div className="col-sm-12 col-md-8 col-lg-8 accountSection">
                    <h5 className="m-3">Account</h5>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Account;