import React from "react";


const Search = () => {
    return (
        <div className="row search">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <form className="form">
                    <input
                        type="text"
                        name="product"
                        id="search"
                        placeholder="E.g Search products,services"
                        required
                    />
                    <button className="m-1 px-4 py-1 searchBtn" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Search;