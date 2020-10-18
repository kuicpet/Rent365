import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://cors-anywhere.herokuapp.com/http://api-rent365.herokuapp.com/shop/api/items-list")
        .then(result => setData(result.data));
    },[]);
    
    return (
      <div className="products mb-5">
          {data.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4 product">
              <Link>
                  <img
                    src={item.item_pic}
                    alt={item.title}
                    className="prdt_img img-fluid"
                  />
              </Link>
              <h5 className="prdt_name">{item.title}</h5>
              <p className="prdt_price">${item.price}</p>
              <button className="add_cart">Add to Cart</button>
            </div>
          ))}
      </div>
    );
}

export default Products;