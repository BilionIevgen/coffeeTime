import React from "react";
import logo from "../../../assets/img/drink.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
      Coffee Time
    </Link>
  );
}
