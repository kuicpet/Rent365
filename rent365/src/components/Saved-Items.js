import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

const SavedItems = () => {
    return (
        <div className="row text-center">
            <Header/>
            <SideNav/>
            <div className="col-sm-12 col-md-8 col-lg-8 savedItemSection">
                <h3>Saved Items</h3>
            </div>
            <Footer/>
        </div>
    );
};

export default SavedItems;