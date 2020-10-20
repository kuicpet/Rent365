import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Order = () => {
    return (
        <div className="row  text-center">
            <Header />
            <div className="col-sm-12 orderSection">
                <h3>Orders</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Order;