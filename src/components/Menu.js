import React from "react";
import { Link } from "react-router-dom";

export const Menu = props => {
  return (
    <div id="fixed-nav-bar">
      <div className="align-baseline">
        <nav class="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item dropdown mr-3 ml-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Mens <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/Clothing">Clothing</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Electronics <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                TVs & Appliances <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Women <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Baby & Kids <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Home & Furniture <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Sports, Books & More <span class="caret" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mr-3 ml-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-click="dropdown"
              >
                Offers <span class="caret" />
              </button>
              <ul class="dropdown-menu">
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
