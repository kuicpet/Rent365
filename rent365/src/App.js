import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Search from "./components/Search";



class App extends Component{
 
  render() {
    return (
      <div className="container-fluid text-center">
        <Header/>
        <Search />
        <Products/>
        <Footer/>
      </div>
    );
  };
}

export default App;
