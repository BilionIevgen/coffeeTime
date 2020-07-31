import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourite } from "../redux/actions/favourite";
import { addToCart } from "../redux/actions/cart";

const Favourite = React.memo(() => {
  const { catalog } = useSelector((state) => ({
    catalog: state.favourite.catalog,
  }));
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();

  const onAddToCartButtonClick = (item) => {
    dispatch(addToCart({ ...item, uniqId: Math.random() * 100 }));
  };

  return (
    <>
      <ul className="favourite__list">
        {catalog.map((item) => (
          <li className="favourite__list-li" key={item.id}>
            <span className="favourite__list-name">{item.name}</span>
            <span className="favourite__list-price">{item.price} UAH</span>
            <button
              className="button"
              disabled={!isAdmin}
              onClick={() => {
                onAddToCartButtonClick(item);
              }}
            >
              add to cart
            </button>
            <span
              onClick={() => {
                dispatch(removeFromFavourite(item));
              }}
              className="favourite__list-close"
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
});

export default Favourite;
