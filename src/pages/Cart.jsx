import React from "react";
import cart from "../assets/img/empty-cart.png";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, deleteAllFromCart } from "../redux/actions/cart";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartReduxCatalog } = useSelector(({ cart }) => ({
    cartReduxCatalog: cart.catalog,
  }));

  // checking cart in localStorage
  let cartCatalog =
    JSON.parse(window.localStorage.getItem("cart")) === null
      ? cartReduxCatalog
      : JSON.parse(window.localStorage.getItem("cart"));

  // deleting all from cart
  const onClearButtonClick = () => {
    dispatch(deleteAllFromCart());
    window.localStorage.setItem("cart", JSON.stringify([]));
  };

  // math middle price
  const middle =
    cartCatalog.reduce((sum, obj) => obj.price + sum, 0) / cartCatalog.length;

  return (
    <div className="cart-list">
      {cartCatalog.length > 0 || cartCatalog.length > 0 ? (
        <>
          <ul className="cart__list">
            {cartCatalog.map((item) => (
              <li className="cart__list-li" key={item.uniqId}>
                <span className="cart__list-name">{item.name}</span>
                <span className="cart__list-price">{item.price} UAH</span>
                <span
                  onClick={() => {
                    let localArr = JSON.parse(
                      window.localStorage.getItem("cart")
                    ).filter((it) => it.uniqId !== item.uniqId);
                    window.localStorage.setItem(
                      "cart",
                      JSON.stringify(localArr)
                    );
                    dispatch(removeFromCart(item.uniqId));
                  }}
                  className="cart__list-close"
                >
                  X
                </span>
              </li>
            ))}
            <li className="cart__list-li">
              <span className="cart__list-name"> Всего к оплате :</span>
              <span className="cart__list-price">
                {cartCatalog
                  .reduce((sum, obj) => obj.price + sum, 0)
                  .toFixed(2)}{" "}
                UAH
              </span>
            </li>
            <li className="cart__list-li">
              <span className="cart__list-name"> Всего товаров :</span>
              <span className="cart__list-price">{cartCatalog.length} шт.</span>
            </li>
            <li className="cart__list-li">
              <span className="cart__list-name"> Средняя цена :</span>
              <span className="cart__list-price">{middle.toFixed(2)} шт.</span>
            </li>
          </ul>
          <button onClick={onClearButtonClick} className="button">
            Очистить карзину
          </button>
          <button
            onClick={() => {
              alert(
                ` Вы купили,
                ${cartCatalog.map((item) => item.name)}`
              );
            }}
            className="button"
          >
            Купить
          </button>
        </>
      ) : (
        <img src={cart} alt="empty-cart" />
      )}
    </div>
  );
}
