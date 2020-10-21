import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

const Order = () => {
    return (
        <div className="row  text-center">
            <Header />
            <SideNav/>
            <div className="col-sm-12 col-md-8 col-lg-8 orderSection">
                <h3>Orders</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Order;