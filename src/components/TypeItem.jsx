import React from "react";
import FavouriteButton from "./FavouriteButton";

const TypeItem = ({
  onRemoveFromFavouriteClick,
  onAddToFavouriteClick,
  favourite,
  item,
  onAddToCartButtonClick,
  img,
  isAdmin,
  activeCartButton,
  isAddingtoCart,
}) => {
  return (
    <div className="coffee__type-item " key={item.id}>
      <FavouriteButton
        onAddToFavouriteClick={onAddToFavouriteClick}
        item={item}
        array={favourite}
        onRemoveFromFavouriteClick={onRemoveFromFavouriteClick}
      />
      <img src={img} alt="" />
      <span className="coffee__type-name">{item.name}</span>
      <div className="coffee__type-purches">
        {activeCartButton.includes(item.id) ? (
          <button className="button" disabled={true}>
            adding
          </button>
        ) : (
          <button
            className="button"
            disabled={!isAdmin}
            onClick={() => {
              onAddToCartButtonClick(item);
            }}
          >
            to cart
          </button>
        )}
        <span>{item.price} UAH</span>
      </div>
    </div>
  );
};

export default TypeItem;
