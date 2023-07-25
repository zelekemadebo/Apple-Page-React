import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './CommonResources/css/bootstrap.css';
import './CommonResources/css/styles.css';

import Main from "./components/Main/Main";
import { Component } from "react";
import { Route, Routes } from "react-router";
import SingleAppleProduct from "./components/Pages/SingleAppleProduct";
import Iphone from "./components/Pages/Iphone";
import Mac from "./components/Pages/Mac";
import NotFound from "./components/Pages/NotFound";

class App extends Component {
  render(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main /> } />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/iphone/:productID" element={<SingleAppleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}
}

export default App;
