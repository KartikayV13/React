import React from "react";
import "../Styles/Navbar.css";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: <FaListUl />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <IoSettingsSharp />,
    },
  ];

  const closeSidebar = () => {
    setShowSideBar(false);
  };

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          {" "}
          San<span>ji's-Re</span>cipe
        </a>

        <div className="nav-link">
          {links.map((link) => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className={showSideBar ? "sidebar-btn  active" : "sidebar-btn "}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <Sidebar links={links} close={closeSidebar} />}
    </>
  );
};

export default Navbar;
