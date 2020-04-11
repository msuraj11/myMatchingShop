import React, { Component } from "react";
import { connect } from "react-redux";
import { jsonData } from "../actions/loadAction";
import load from "../mediaFiles/loader.gif";
import No_Items from "../mediaFiles/No_Items.png";

class Products extends Component {
  componentDidMount() {
    this.props.getJsonData("https://nodesense.github.io/api/products.json");
  }

  render() {
    const {loader, filteredData} = this.props;
    return (
      <div className="products">
        <div className="row">
          {loader && filteredData.length === 0 ? (
            <div className="no-result">
              <img src={load} alt="Loading.." />
            </div>
          ) : (
            filteredData.length > 0 ?
            filteredData.map((list, i) => {
              return (
                <div className="col-md-3 mt-5">
                  <div key={list.productId}>
                    <div className="row">
                      <div className="col-md-12">
                        <img
                          className=" rounded img-fluid"
                          width="170"
                          height="50"
                          src={list.image}
                          alt={list.name}
                        />
                      </div>
                      <div className="col-md-12 text-dark ">
                        <b className="text-dark"> {list.name}</b>
                        <br />

                        <b className="text-dark"> $ {list.price} </b>
                        <br />
                        <i className="text-dark">Rating:</i>
                        <b className="text-dark"> {list.rating} </b>
                        <br />
                        <br />
                      </div>
                      <div className="col-md-12">
                        <button className="btn btn-primary">Add To Cart</button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }) :
            (
              <div className="no-result"><img src={No_Items} alt="Item is not available or Network Unavailable"/></div>
            )
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    productData: state.productData.repo_data,
    loader: state.productData.loading,
    filteredData: state.productData.filtered_data
  };
};

const mapDispatchToProps = {
  getJsonData: jsonData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
