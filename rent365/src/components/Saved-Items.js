import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const SavedItems = () => {
    return (
        <div className="row text-center">
            <Header/>
            <div className="col-sm-12 savedItemSection">
                <h3>Saved Items</h3>
            </div>
            <Footer/>
        </div>
    );
};

export default SavedItems;