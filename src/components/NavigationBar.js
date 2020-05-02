import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import images from "../mediaFiles/images.jpg";
import {filteredDataAction} from '../actions/loadAction';

const NavigationBar = (props) => {

  const handleChange = event => {
    let userInput = event.target.value;
    const allItems = props.allProducts;

    const filteredItems = allItems.filter(item => {
      return item.name.toLowerCase().search(userInput.toLowerCase()) !== -1;
    });
    props.filteredData(filteredItems, userInput);
  };

  return (
    <div className="fixed-top">
      <div className="align-baseline">
        <nav
          className="navbar navbar-expand-sm bg-primary navbar-dark"
          id="fixed-nav"
        >
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <Link className="text-white nav-link" to="/productlist">
                <b>
                  <img src={images} alt="logo" width="40px" />
                </b>
              </Link>
            </li>
          </ul>
          <input
            className="form-control col-sm-7 ml-5"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
          <ul className="nav nav-pills ml-5">
            <li className="nav-item">
              <Link className="text-white nav-link ml-2" to="/login">
                <b> Log in </b>
              </Link>
            </li>

            <li className="nav-item ml-5">
              <Link className="text-white nav-link" to="/cart">
                <b> My Cart </b>
              </Link>
            </li>

            <li className="nav-item ml-5">
              <Link className="text-white nav-link" to="/wish-list">
                <svg className="bi bi-heart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clipRule="evenodd"/>
              </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allProducts : state.productData.repo_data
  };
};

const mapDispatchToProps = {
  filteredData : filteredDataAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);