import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "gatsby";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-top" style={{ paddingTop: "12px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div className="footer-widget widget">
                <div className="about_us_widget">
                  <div class="row d-flex ">
                    <div class="col p-0 g-0" style={{ maxWidth: "50px" }}>
                      <img
                        src="../img/logo-wh.jpg"
                        alt=""
                        width="50px"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>

                    <div class="col flex-grow">
                      <h3 style={{ color: "#fff", textTransform: "uppercase" }}>William Harris</h3>
                      <span style={{ color: "#fff" }}>for Mayor of Fuquay-Varina</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div class="footer-widget widget ">
                <h4 class="widget-title" style={{ marginBottom: "5px" }}>
                  About Me
                </h4>
                <p>Vote William Harris for Fuquay-Varina</p>
                <ul class="contact_info_list">
                  <li class="single-info-item">
                  <a href="tel:+458123657">
                    +3 123 456 789
                    </a>
                    </li>
                  <li class="single-info-item">
                  <a href="mailto:info@william.com">
                    info@william.com
                    </a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
              <div className="footer-widget  widget widget_nav_menu">
                <h4 className="widget-title" style={{ marginBottom: "5px" }}>
                  Useful Links
                </h4>
                <ul>
                  <li>
                    <Link to="/stay-connected">Stay Connected</Link>
                  </li>
                  <li>
                    <Link to="/volunteer">Volunteer</Link>
                  </li>
                  <li>
                    <Link to="/make-a-donation">Make a Donation</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
              <div className="footer-widget  widget widget_nav_menu">
                <h4 className="widget-title" style={{ marginBottom: "5px" }}>
                  Social Links
                </h4>
                <ul>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/williambillharriformayor" target="_blank">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area-inner">&copy; Copyright 2021 All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
