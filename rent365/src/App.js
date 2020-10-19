import React, { Component } from 'react';
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Search from "./components/Search";



class App extends Component{
  state = {
    loading: true
  }
  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  render() {
    return (
      <div className="container-fluid text-center">
        <Header/>
        <Search />
        {this.state.loading ? (
          <ReactLoading
            type={"spin"}
            color={"#FF3300"}
            className="spinner"
            height={ 25 }
            width={ 25 } />
        ) : (
          <Products/>
        )}
        <Footer/>
      </div>
    );
  };
}

export default App;
