import React from "react";
import { useDispatch } from "react-redux";
import { setIsVisibleCatalog } from "../../../redux/actions/catalog";

const Categories = () => {
  const dispatch = useDispatch();
  // showing popup
  const onCatalogListClick = () => {
    dispatch(setIsVisibleCatalog(true));
  };

  return (
    <>
      <div className="catalog-list">
        <span className="material-icons">dns</span>
        <h3 onClick={onCatalogListClick}>Каталог товаров</h3>
      </div>
    </>
  );
};

export default Categories;
