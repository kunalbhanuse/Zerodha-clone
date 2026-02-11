import React from "react";
import { NavLink } from "react-router-dom";
function Menu1() {
  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? activeMenuClass : menuClass)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/orders"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? activeMenuClass : menuClass)}
        >
          Orders
        </NavLink>
        <NavLink
          to="/holdings"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? activeMenuClass : menuClass)}
        >
          Holdings
        </NavLink>
        <NavLink
          to="/positions"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? activeMenuClass : menuClass)}
        >
          Positions
        </NavLink>
        <NavLink
          to="/funds"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? activeMenuClass : menuClass)}
        >
          Funds
        </NavLink>
        <NavLink
          to="/apps"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? activeMenuClass : menuClass)}
        >
          Apps
        </NavLink>

        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}

export default Menu1;
