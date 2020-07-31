import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsVisibleCatalog } from "../redux/actions/catalog";

export default function CatalogPopup() {
  const dispatch = useDispatch();
  const onCatalogListClick = () => {
    dispatch(setIsVisibleCatalog(false));
  };

  const { isVisibleCatalog } = useSelector((state) => state.catalog);
  return (
    <div className="row">
      <div onClick={onCatalogListClick} className="categories_popup">
        {isVisibleCatalog && (
          <>
            {/* openning DrinkType tea/coffee */}
            <Link to="/coffee">Coffee</Link>
            <Link to="/tea">Tea</Link>
            <span
              onClick={onCatalogListClick}
              className="material-icons clide-up"
            >
              vertical_align_top
            </span>
          </>
        )}
      </div>
    </div>
  );
}
