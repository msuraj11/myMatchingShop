import React from "react";
import { Link } from "react-router-dom";
import images from "../mediaFiles/images.jpg";

export const NavigationBar = () => {
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

            <li className="nav-item">
              <Link className="text-white nav-link mt-2 mr-3" to="/cart">
                <b> Wish List </b>
              </Link>
            </li>
          </ul>
          <input
            className="form-control col-sm-7 mt-1"
            type="text"
            placeholder="Search"
          />
          <ul className="nav nav-pills" align="right">
            <li className="nav-item">
              <Link className="text-white nav-link ml-2" to="/login">
                <b> Log in </b>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="text-white nav-link" to="/signup">
                <b> Sign up </b>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="text-white nav-link" to="/addtolist">
                <b> My Cart </b>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
