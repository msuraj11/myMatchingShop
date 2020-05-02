import React from "react";
import { Link } from "react-router-dom";

export const Menu = props => {
  return (
    <div id="fixed-nav-bar">
      <div className="align-baseline">
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item dropdown mr-3 ml-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Mens <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Clothing">Clothing</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Electronics <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                TVs & Appliances <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Women <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Baby & Kids <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Home & Furniture <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Sports, Books & More <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Offers <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
