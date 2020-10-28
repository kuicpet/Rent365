import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const Products = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState("products");

    useEffect(() => {
      axios
        .get("https://cors-anywhere.herokuapp.com/http://api-rent365.herokuapp.com/shop/api/items-list")
        .then(result => setData(result.data), localStorage.setItem("products", JSON.stringify(data)));
    },[data]);
    
    const addToCart = (product) => {
      console.log("Added to cart")
      setCart([...cart, {...product}])
    };
    const removeFromCart = (productToRemove) => {
      setCart(cart.filter((product) => product !== productToRemove));
    }

    const navigateTo = (nextPage) => {
      setPage(nextPage)
    }

    const renderProducts = () => (
      <>
      <div className="col-sm-12">
        <h3>Products</h3>
      </div>
        {data.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-2 col-lg-3 product">
              <Link to={{
                pathname: `/product/${item.id}`,
                state: { product: item.title }
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
              <button className="add_cart" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
      </>
    );
    
    const renderCart = () => (
      <>
       <div className="col-sm-12">
        <h3>Cart</h3>
       </div>
      {cart.map((item, index) => (
          <div key={index} className="col-sm-12 col-md-2 col-lg-3 product">
            <Link to={{
              pathname: `/product/${item.id}`,
              state: { product: item.title }
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
            <button className="add_cart" onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
    </>
    )
    return (
      <div className="container-fluid">
      <div className="row  products my-4">
        <div className="col-sm-12 mb-3">
          <button onClick={() => navigateTo(PAGE_CART)} className="add_cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="px-2">Go to Cart {cart.length}</span>
          </button>
          <button onClick={() => navigateTo(PAGE_PRODUCTS)} className="add_cart mx-2">View Products</button>
        </div>
          {page === PAGE_PRODUCTS && renderProducts()}
          {page === PAGE_CART && renderCart()}
      </div>
      </div>
    );
}

export default Products;