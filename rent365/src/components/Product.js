import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Router";

const Product = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios
          .get("https://cors-anywhere.herokuapp.com/http://api-rent365.herokuapp.com/shop/api/item-detail/1")
          .then(result => {
              console.log(result.data);
              setItem(result.item)
          })
    },[]);

    return (
        <div className="row product">
            <Header/>
            <div className="col-sm-12">
                <h3>Product</h3>
            </div>
            <Footer/>
        </div>
    );
}

export default Product;