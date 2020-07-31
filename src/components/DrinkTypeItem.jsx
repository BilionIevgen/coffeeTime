import React from "react";
import FavouriteButton from "./FavouriteButton";
import PropTypes from "prop-types";

const TypeItem = ({
  onRemoveFromFavouriteClick,
  onAddToFavouriteClick,
  favourite,
  item,
  onAddToCartButtonClick,
  img,
  isAdmin,
  activeCartButton,
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

TypeItem.protoType = {
  onRemoveFromFavouriteClick: PropTypes.func.isRequired,
  onAddToFavouriteClick: PropTypes.func.isRequired,
  favourite: PropTypes.arrayOf(PropTypes.object).isRequired,
  item: PropTypes.object.isRequired,
  onAddToCartButtonClick: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  activeCartButton: PropTypes.object.isRequired,
};
