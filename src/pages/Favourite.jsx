import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavourite } from "../redux/actions/favourite";
import { addToCart, isAddingToCart } from "../redux/actions/cart";

const Favourite = React.memo(() => {
  const { catalog } = useSelector((state) => ({
    catalog: state.favourite.catalog,
  }));

  let favouriteCatalog =
    JSON.parse(window.localStorage.getItem("favourite")) === null
      ? catalog
      : JSON.parse(window.localStorage.getItem("favourite"));

  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();

  const onAddToCartButtonClick = (item) => {
    let localArr =
      window.localStorage.getItem("cart") == null
        ? [item]
        : [
            ...JSON.parse(window.localStorage.getItem("cart")),
            { ...item, uniqId: Math.random() * 100 },
          ];

    window.localStorage.setItem("cart", JSON.stringify(localArr));
    dispatch(isAddingToCart(true));
    setTimeout(() => {
      dispatch(addToCart({ ...item, uniqId: Math.random() * 100 }));
      dispatch(isAddingToCart(false));
    }, 1000);
  };

  return (
    <>
      <ul className="favourite__list">
        {favouriteCatalog.map((item) => (
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
                let localArr = JSON.parse(
                  window.localStorage.getItem("favourite")
                ).filter((it) => {
                  return it.id !== item.id;
                });

                window.localStorage.setItem(
                  "favourite",
                  JSON.stringify(localArr)
                );
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
