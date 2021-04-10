import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  isAddingToCart,
  addActiveCartButton,
  removeActiveCartButton,
} from "../redux/actions/cart";
import img from "../assets/img/alllist.jpg";
import {
  addToFavourite,
  removeFromFavourite,
} from "../redux/actions/favourite";
import DrinkTypeItem from "./DrinkTypeItem";
import PropTypes from "prop-types";

const SortMenu = ({ items, activeCartButton, isAddingtoCart }) => {
  const dispatch = useDispatch();
  const [initialDrinkItems, setInitialDrinkItems] = useState(items);
  const [inputValue, setInputValue] = useState("");
  const favouriteArray = useSelector((state) => state.favourite.catalog);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  // sorting by input value
  const onInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());

    let newArr = items.filter((item) => {
      let itemName = item.name.toLowerCase();
      return itemName.startsWith(e.target.value.toLowerCase());
    });
    setInitialDrinkItems(newArr);
  };

  // sorting by price
  const sortByPrice = () => {
    let newArr = items.sort((a, b) => a.price - b.price);
    setInitialDrinkItems(newArr);
  };

  // sorting by name
  const sortByName = () => {
    let newArr = items.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase()
        ? -1
        : a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : 0
    );
    setInitialDrinkItems(newArr);
  };

  // adding to favourite list
  const onAddToFavouriteClick = (item) => {
    dispatch(addToFavourite(item));
    let localArr =
      window.localStorage.getItem("favourite") == null
        ? [item]
        : [...JSON.parse(window.localStorage.getItem("favourite")), item];

    window.localStorage.setItem("favourite", JSON.stringify(localArr));
  };

  // removing from favourite list
  const onRemoveFromFavouriteClick = (item) => {
    dispatch(removeFromFavourite(item));
    let localArr = JSON.parse(window.localStorage.getItem("favourite")).filter(
      (it) => {
        return it.id !== item.id;
      }
    );

    window.localStorage.setItem("favourite", JSON.stringify(localArr));
  };

  // adding to cart
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
    dispatch(addActiveCartButton(item.id));
    setTimeout(() => {
      dispatch(addToCart({ ...item, uniqId: Math.random() * 100 }));
      dispatch(removeActiveCartButton(item.id));
      dispatch(isAddingToCart(false));
    }, 1000);
  };

  return (
    <>
      <div className="search_pannel">
        <input value={inputValue} onChange={onInputChange} type="text"></input>
        <span className="material-icons">pageview</span>
      </div>

      {/* // sorting by price */}
      <button className="button " onClick={sortByPrice}>
        PriseSort
      </button>

      {/* sorting by name */}
      <button className="button " onClick={sortByName}>
        NameSort
      </button>

      <div className="coffee__type-items">
        {initialDrinkItems.map((item) => (
          <DrinkTypeItem
            activeCartButton={activeCartButton}
            isAddingtoCart={isAddingtoCart}
            isAdmin={isAdmin}
            key={item.id}
            onAddToCartButtonClick={onAddToCartButtonClick}
            favourite={favouriteArray}
            item={item}
            img={img}
            onRemoveFromFavouriteClick={onRemoveFromFavouriteClick}
            onAddToFavouriteClick={onAddToFavouriteClick}
          />
        ))}
      </div>
    </>
  );
};
export default SortMenu;

SortMenu.protoType = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeCartButton: PropTypes.object.isRequired,
  isAddingtoCart: PropTypes.bool.isRequired,
};
