import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.css";
import NavigationBar from "../components/NavigationBar";
import { Menu } from "../components/Menu";
import Products from "../components/products";
import { Footer } from "../components/footer";
import { CarouselBlock } from "../components/CarouselBlock";
import { BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  render() {
    const {inputString} = this.props;
    return (
      <div className="app-bg">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Menu />
            {inputString === '' && <CarouselBlock />}
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

const mapStateToProps = state => {
  return {
    inputString : state.productData.search_input
  }
};

export default connect(mapStateToProps, null)(App);
