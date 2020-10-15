import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';


const App = () => {
  return (
    <div className="container-fluid text-center">
      <Header/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App;
