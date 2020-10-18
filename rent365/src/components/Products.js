import React, { useState, useEffect } from "react";
import axios from "axios";


const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://cors-anywhere.herokuapp.com/http://api-rent365.herokuapp.com/shop/api/items-list")
            .then(result => setData(result.data));
    },[]);
    
    return (
      <div className="row products">
          {data.map((item, index) => (
              <div key={index} className="col-sm-12 col-md-3 col-lg-4">
                  <Link>
                    
                  </Link>
                  <img
                    src={item.item_pic}
                    alt={item.title}
                  />
                  <h4>{item.title}</h4>
                  <p>$ {item.price}</p>
                  <p>Description: {item.description}</p>
              </div>
          ))}
      </div>
    );
}

export default Products;