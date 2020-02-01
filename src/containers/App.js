import React, { Component } from "react";
import "../styles/App.css";
import { NavigationBar } from "../components/NavigationBar";
import { Menu } from "../components/Menu";
import Products from "../components/products";
import { Footer } from "../components/footer";
import { CarouselBlock } from "../components/CarouselBlock";
import { BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="productsbg">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Menu />
            <CarouselBlock />
            <Products />
            <Footer />
            <Switch>
              {/* 
            <Route path="/mycart" component={MyCart} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />*/}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
