import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavourite,
  addToFavourite,
} from "../redux/actions/favourite";
import DrinkTypeItem from "../components/DrinkTypeItem";
import {
  addToCart,
  isAddingToCart,
  removeActiveCartButton,
  addActiveCartButton,
} from "../redux/actions/cart";
import teaimg from "../assets/img/tea.jpg";
import coffeeimg from "../assets/img/coffee-paccage.png";
import PropTypes from "prop-types";

// openning from Route
export default function DrinkTypeItems({ type }) {
  // taking type of coffee from path
  const param = useParams();

  const {
    teaCatalog,
    coffeeCatalog,
    favourite,
    activeCatalogTitle,
    isAdmin,
    activeCartButton,
    isAddingtoCart,
  } = useSelector((state) => ({
    coffeeCatalog: state.catalog.coffee.catalog,
    teaCatalog: state.catalog.tea.catalog,
    activeCatalogTitle: state.catalog.activeCatalogTitle,
    favourite: state.favourite.catalog,
    isAdmin: state.auth.isAdmin,
    activeCartButton: state.cart.activeCartButton,
    isAddingtoCart: state.cart.isAddingtoCart,
  }));

  const catalogTitle = activeCatalogTitle
    ? activeCatalogTitle
    : window.localStorage.getItem("catalogName");

  const history = useHistory();
  const dispatch = useDispatch();

  // sorting array by drink type from params
  const typeArray = type.tea
    ? teaCatalog.filter((item) => item.type === +param.type)
    : coffeeCatalog.filter((item) => item.type === +param.type);

  // button Back
  const onBackIconClick = () => {
    type.tea ? history.push("/tea") : history.push("/coffee");
  };

  const onAddToFavouriteClick = (item) => {
    dispatch(addToFavourite(item));
    let localArr =
      window.localStorage.getItem("favourite") == null
        ? [item]
        : [...JSON.parse(window.localStorage.getItem("favourite")), item];

    window.localStorage.setItem("favourite", JSON.stringify(localArr));
  };

  const onRemoveFromFavouriteClick = (item) => {
    dispatch(removeFromFavourite(item));
    let localArr = JSON.parse(window.localStorage.getItem("favourite")).filter(
      (it) => {
        return it.id !== item.id;
      }
    );

    window.localStorage.setItem("favourite", JSON.stringify(localArr));
  };

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
      <div className="col-md-1">
        <span onClick={onBackIconClick} className="material-icons backward">
          keyboard_backspace
        </span>
      </div>

      <div className="col-md-11">
        <h3 className="coffee__type-title">{catalogTitle}</h3>
        <div className="coffee__type-items">
          {typeArray.map((item) => (
            <DrinkTypeItem
              activeCartButton={activeCartButton}
              isAddingtoCart={isAddingtoCart}
              isAdmin={isAdmin}
              onAddToCartButtonClick={onAddToCartButtonClick}
              key={item.id}
              onRemoveFromFavouriteClick={onRemoveFromFavouriteClick}
              favourite={favourite}
              item={item}
              onAddToFavouriteClick={onAddToFavouriteClick}
              img={type.tea ? teaimg : coffeeimg}
            />
          ))}
        </div>
      </div>
    </>
  );
}

DrinkTypeItems.propTypes = {
  type: PropTypes.object.isRequired,
};
