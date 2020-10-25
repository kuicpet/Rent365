import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://cors-anywhere.herokuapp.com/http://api-rent365.herokuapp.com/shop/api/items-list")
        .then(result => setData(result.data), localStorage.setItem("products", JSON.stringify(data)));
    },[data]);
    
    return (
      <div className="row products my-5">
          {data.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-2 col-lg-3 product">
              <Link to={{
                pathname: `/product/${item.id}`
              }}>
                <img
                    src={item.item_pic}
                    alt={item.title}
                    className="prdt_img img-fluid"
                  />
              </Link>
              <h5 className="prdt_name mt-3">{item.title}</h5>
              <p className="prdt_price">${item.price}</p>
              <p>{item.description}</p>
              <Link to="/cart" className="add_cart">Add to cart</Link>
            </div>
          ))}
      </div>
    );
}

export default Products;