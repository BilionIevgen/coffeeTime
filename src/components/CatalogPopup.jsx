import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsVisibleCatalog } from "../redux/actions/catalog";

export default function CatalogPopup() {
  const dispatch = useDispatch();
  const { isVisibleCatalog } = useSelector((state) => state.catalog);

  // hiding popup
  const onCatalogListClick = () => {
    dispatch(setIsVisibleCatalog(false));
  };

  return (
    <div className="row">
      <div onClick={onCatalogListClick} className="categories_popup">
        {isVisibleCatalog && (
          <>
            {/* openning DrinkType component tea/coffee */}
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
