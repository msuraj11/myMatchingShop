import React from "react";

export const Footer = props => {
  return (
    <div>
      <div className="row bg-dark pt-3 pb-3">
        <div className="col text-white">
          About us
          <br />
          Documentation
          <br />
          Support / Contact Us
          <br />
          Registry Status
          <br />
          Report Issues
          <br />
          Security
          <br />
          {/*<ul>
            <li>About us</li>
            <li>Documentation</li>
            <li>Support / Contact Us</li>
            <li>Registry Status</li>
            <li>Report Issues</li>
            <li>Security</li>
          </ul>*/}
        </div>
        <div className="col text-white">
          facebook <br />
          twitter <br />
          Community Site
          <br />
          instragram
        </div>
        <div className="col text-white">
          Help <br />
          Privacy Policy <br /> Content Disclaimer
          <br />
        </div>
      </div>
      <div className="bg-dark">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_2dd397.svg"
          alt="logo"
        />
      </div>
      <div className="row bg-secondary text-white pt-3 pb-3">
        <div className="col">
          Countries: Australia | Brazil | Canada | China | France | Germany |
          Italy | Japan | Mexico | Netherlands | Spain | United Kingdom | United
          States
        </div>
      </div>
      <div className="bg-dark text-danger pt-3 pb-3">
        Copyright © 2008 Flipkart Inc. All rights reserved.
      </div>
    </div>
  );
};
