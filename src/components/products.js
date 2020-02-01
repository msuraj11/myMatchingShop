import React, { Component } from "react";
import { connect } from "react-redux";
import { jsonData } from "../actions/loadAction";

class Products extends Component {
  componentDidMount() {
    this.props.jsonData();
  }
  render() {
    console.log(this.props);
    return (
      <div className="productsbg">
        <div className="row ">
          {this.props.productData.repo_data.map((list, i) => {
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
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, nextProps) => {
  return {
    productData: state.productData
  };
};

const mapDispatchToProps = {
  jsonData: jsonData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
