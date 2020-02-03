import React, { Component } from "react";
import { connect } from "react-redux";
import { jsonData } from "../actions/loadAction";
import load from "../mediaFiles/loader.gif";

class Products extends Component {
  componentDidMount() {
    this.props.getJsonData("https://nodesense.github.io/api/products.json");
  }

  render() {
    return (
      <div>
        <div className="row ">
          {this.props.loader ? (
            <div align="center">
              <img src={load} alt="Loading.." />
            </div>
          ) : (
            this.props.filteredData &&
            this.props.filteredData.map((list, i) => {
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
                          alt="mobile"
                        />
                      </div>
                      <div className="col-md-12 text-dark ">
                        <b className="text-dark"> {list.name}</b>
                        <br />

                        <b className="text-dark"> Rs. {list.price} </b>
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
            })
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    productData: state.productData.repo_data,
    loader: state.productData.loader,
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
