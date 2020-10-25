import React, { Component } from "react";
import Footer from "./Router";

class Product extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3>Product Component</h3>
                </div>
                <Footer />
            </div>
        );
    };
}

export default Product;