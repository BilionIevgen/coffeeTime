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
import TypeItem from "./TypeItem";

const SortMenu = ({ items, activeCartButton, isAddingtoCart }) => {
  const dispatch = useDispatch();
  const [initialDrinkItems, setInitialDrinkItems] = useState(items);
  const [inputValue, setInputValue] = useState("");
  const favouriteArray = useSelector((state) => state.favourite.catalog);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  // i decided to add this force rerender because when we calling setInitialDrinkItems() React dont call rerender! I know its bad practice but i dont ask for help because it is test task
  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => ++value); // update the state to force
  }
  const update = useForceUpdate();

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
    update();
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
    update();
  };

  // adding to favourite list
  const onAddToFavouriteClick = (id) => {
    dispatch(addToFavourite(id));
  };

  // removing from favourite list
  const onRemoveFromFavouriteClick = (id) => {
    dispatch(removeFromFavourite(id));
  };

  // adding to cart
  const onAddToCartButtonClick = (item) => {
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
          <TypeItem
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
