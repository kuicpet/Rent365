import React, { Component } from "react";
import Footer from "./Router";

class Product extends Component {
    state = {
        activeProduct: [],
    }
    componentDidMount = async() => {
        const title = this.props.location.state.product;
        const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/http://api-rent365.herokuapp.com/shop/api/item-detail/${title}`);
        const res = await apiCall.json();
        console.log(res.products[0]);
        this.setState({
            activeProduct: res.products[0]
        });
        console.log(this.state.activeProduct);
    }
    render() {
        const product = this.state.activeProduct;
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3>{product.title}</h3>
                </div>
                <Footer />
            </div>
        );
    };
}

export default Product;