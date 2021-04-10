import React from "react";
import { SortMenu } from "../components";
import { useSelector } from "react-redux";

const Main = () => {
  const { catalog, activeCartButton, isAddingtoCart } = useSelector(
    (state) => ({
      catalog: state.catalog,
      activeCartButton: state.cart.activeCartButton,
      isAddingtoCart: state.cart.isAddingtoCart,
    })
  );

  return (
    <div className="col-md-12">
      {catalog.tea.catalog && (
        <SortMenu
          activeCartButton={activeCartButton}
          isAddingtoCart={isAddingtoCart}
          items={[...catalog.tea.catalog, ...catalog.coffee.catalog]}
        />
      )}
    </div>
  );
};

export default Main;
