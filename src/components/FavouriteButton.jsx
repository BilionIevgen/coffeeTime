import React from "react";

export default function FavouriteButton({
  array,
  onRemoveFromFavouriteClick,
  onAddToFavouriteClick,
  item,
}) {
  return (
    <>
      {array.find((it) => it.id === item.id) ? (
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
