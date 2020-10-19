import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Counter from "./Counter";




const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      axios
        .get("https://cors-anywhere.herokuapp.com/http://api-rent365.herokuapp.com/shop/api/items-list")
        .then(result => setData(result.data));
      setLoading(false);
    },[]);
    
    return (
      <div className="products mb-5">
          {data.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4 product">
              <ReactLoading/>
              <Link>
                  <img
                    src={item.item_pic}
                    alt={item.title}
                    className="prdt_img img-fluid"
                  />
              </Link>
              <h5 className="prdt_name">{item.title}</h5>
              <p className="prdt_price">${item.price}</p>
              <Counter/>
              <button className="add_cart">Add to Cart</button>
            </div>
          ))}
      </div>
    );
}

export default Products;