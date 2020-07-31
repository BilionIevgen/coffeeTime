import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavourite,
  addToFavourite,
} from "../redux/actions/favourite";
import TypeItem from "../components/TypeItem";
import {
  addToCart,
  isAddingToCart,
  removeActiveCartButton,
  addActiveCartButton,
} from "../redux/actions/cart";
import teaimg from "../assets/img/tea.jpg";
import coffeeimg from "../assets/img/coffee-paccage.png";

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

  const history = useHistory();
  const dispatch = useDispatch();

  // sorting array by drink type
  const typeArray = type.tea
    ? teaCatalog.filter((item) => item.type === +param.type)
    : coffeeCatalog.filter((item) => item.type === +param.type);

  // button Back
  const onBackIconClick = () => {
    type.tea ? history.push("/tea") : history.push("/coffee");
  };

  const onAddToFavouriteClick = (id) => {
    dispatch(addToFavourite(id));
  };
  const onRemoveFromFavouriteClick = (id) => {
    dispatch(removeFromFavourite(id));
  };

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
      <div className="col-md-1">
        <span onClick={onBackIconClick} className="material-icons backward">
          keyboard_backspace
        </span>
      </div>

      <div className="col-md-11">
        <h3 className="coffee__type-title">{activeCatalogTitle}</h3>
        <div className="coffee__type-items">
          {typeArray.map((item) => (
            <TypeItem
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
