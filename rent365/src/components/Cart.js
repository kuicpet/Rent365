import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <div className="row text-center">
            <Heading/>
            <div className="col-sm-12 cartSection">
                <h3 className="mt-2">Cart</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart shopCart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <p className="p-5">Your Cart is Empty</p>
                <p>Already have an account?
                    <Link to="/account/signin" className="mx-1 login">Login</Link>
                    to see the items in your Cart
                </p>
                <Link to="/" className="shop">Start Shopping</Link>
            </div>
        </div>
    );
};

export default Cart;