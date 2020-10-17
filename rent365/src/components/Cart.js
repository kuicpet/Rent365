import React from "react";
import Header from "./Header";
import Heading from "./Heading";
import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <div className="row text-center">
            <Heading/>
            <div className="col-sm-12 cart">
                <h3>Cart</h3>
                <p>Already have an account?
                    <Link to="/account/signin" className="mx-1">Login</Link>
                    to see the items in your Cart
                </p>
                <Link>Start Shopping</Link>
            </div>
        </div>
    );
};

export default Cart;