import React from "react";
import PropTypes from "prop-types";

export default function FavouriteButton({
  array,
  onRemoveFromFavouriteClick,
  onAddToFavouriteClick,
  item,
}) {
  // checking favourite in localStorage
  let favouriteCatalog =
    JSON.parse(window.localStorage.getItem("favourite")) === null
      ? array
      : JSON.parse(window.localStorage.getItem("favourite"));

  return (
    <>
      {favouriteCatalog.find((it) => it.id === item.id) ? (
        <span
          onClick={() => {
            onRemoveFromFavouriteClick(item);
          }}
          className="material-icons favorite"
        >
          favorite
        </span>
      ) : (
        <span
          onClick={() => {
            onAddToFavouriteClick(item);
          }}
          className="material-icons remove-favorite"
        >
          favorite_border
        </span>
      )}
    </>
  );
}

FavouriteButton.protoType = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveFromFavouriteClick: PropTypes.func.isRequired,
  onAddToFavouriteClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
