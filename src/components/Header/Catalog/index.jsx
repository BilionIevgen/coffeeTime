import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setIsVisibleCatalog } from "../../../redux/actions/catalog";

const Categories = () => {
  const dispatch = useDispatch();
  // activating popup
  const onCatalogListClick = () => {
    dispatch(setIsVisibleCatalog(true));
  };
  const ref = useRef();

  return (
    <>
      <div ref={ref} className="catalog-list">
        <span className="material-icons">dns</span>
        <h3 onClick={onCatalogListClick}>Каталог товаров</h3>
      </div>
    </>
  );
};

export default Categories;
