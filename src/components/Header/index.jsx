import React from "react";

import { Link } from "react-router-dom";
import { LoginButton, HeaderCart, Catalog, Logo } from "../";

const Header = React.memo(() => {
  return (
    <>
      <div className=" col-8 col-sm-8">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <Logo />
          </div>

          <div className=" col-md-6 col-sm-6  ">
            <Catalog />
          </div>
        </div>
      </div>

      <div className="col-4 col-sm-4 col-md-3 ">
        <div className="header-buttons">
          <LoginButton />
          <div className="header__icons">
            <HeaderCart />
            <Link to="/favourite">
              <span className="material-icons header-favourite">
                favorite_border
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});
export default Header;
