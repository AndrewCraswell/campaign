import React, { useState } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "gatsby";
import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import NavItem from "components/NavItem";
import "./Navbar.scss";
const links = [
  { title: "Stay Connected", link: "/stay-connected", external: false },
  { title: "Volunteer", link: "/volunteer", external: false },
  { title: "Blogs", link: "/blogs", external: false },
  { title: "Facebook", link: "https://www.facebook.com/williambillharriformayor", external: true },
  { title: "Make a Donation", link: "/make-a-donation", external: false },
];

const frontmatter = {
  brand: "William Harris",
  title: "For Mayor of Fuquay-Varina",
  menuText: "Menu",
};
const MyNavbar = () => {
  const [open, setOpen] = useState(false);
  const { brand, menuText, title } = frontmatter;
  const [navCollapsed, setNavCollapsed] = useState(true);

  const handleNavCollapse = () => setNavCollapsed(!navCollapsed);

  return (
    <div className="header-style-01">
      <nav
        className="navbar navbar-area navbar-expand-lg nav-style-02"
      >
        <div className="container nav-container political-02">
          <div className="responsive-mobile-menu">
            <div className="row d-flex " >
            <div className="col p-0 g-0" style={{maxWidth:"50px"}}>
             


 
                <img src="../img/logo-wh.jpg" alt=""  width="50px"/>
                </div>
            
            <div className="col flex-grow" >
              
              <h3 style={{textTransform:"uppercase"}}
              >William Harris</h3>
               <span className="d-flex justify-content-center">for Mayor of Fuquay-Varina</span>
               </div>
            </div>
            
            <button
              onClick={handleNavCollapse}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#bizcoxx_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            // className="collapse navbar-collapse"
            className={`${navCollapsed ? "collapse" : ""} navbar-collapse`}
            id="bizcoxx_main_menu"
          >
            <ul className="navbar-nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>

              <li>
                <a href="/stay-connected">Stay Connected</a>
              </li>
              <li>
                <a href="/volunteer">Volunteer</a>
              </li>

              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li className="btn-wrapper">

              <div  className="boxed-btn reverse-color"
              style={{padding: "0px 40px",color:"#fff"}}
              >
              <a href="/make-a-donation"
               style={{color:"#fff"}}
              >
                Make a Donation
              </a>
            </div>
            </li>

            </ul>
          </div>
          {/* <div className="nav-right-content">
            <div className="btn-wrapper">
              <a href="/make-a-donation" className="boxed-btn reverse-color">
                Make a Donation
              </a>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
  // return (
  //   <Navbar
  //     classNameName={clsx("navbar-root", { "navbar-shrink": shrink })}
  //     expand="lg"
  //     fixed="top"
  //     expanded={expanded}
  //   >
  //     <Container>
  //       <Link to={"/"}>
  //         <Navbar.Brand classNameName="cursor-pointer" onClick={handleBrandClick}>
  //           {brand}
  //           <br />
  //           {title}
  //         </Navbar.Brand>
  //       </Link>
  //       <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
  //         {menuText}
  //       </Navbar.Toggle>
  //       <Navbar.Collapse>
  //         <Nav classNameName="text-uppercase ml-auto">
  //           {links.map((anchor) =>
  //             anchor.external ? (
  //               <div classNameName="nav-item" >
  //               <a href={anchor.link}
  //               classNameName="nav-link cursor-pointer"
  //               target="_blank">
  //                 {anchor.title}
  //               </a>
  //               </div>
  //             ) : (
  //               <NavItem onClick={closeMenu}>
  //                 <Link to={anchor.link}>{anchor.title}</Link>
  //               </NavItem>
  //             ),
  //           )}
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
};

MyNavbar.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.string),
  extraItems: PropTypes.any,
};

MyNavbar.defaultProps = {
  anchors: [],
  extraItems: null,
};

export default MyNavbar;
