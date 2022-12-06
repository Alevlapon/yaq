import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/blackArrow.svg";

function RunClothes() {
  return (
    <div>
      <li className="dropdown-header">
        <NavLink
          activeStyle={{ textDecoration: "underline" }}
          to="/products/run"
          className="dropdown-title weighted"
        >
          Бег
        </NavLink>
      </li>
    </div>
  );
}

export default RunClothes;
