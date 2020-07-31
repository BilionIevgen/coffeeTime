import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setActiveCatalog } from "../redux/actions/catalog";

export default function DrinkType({ type }) {
  // type =(coffee/tea)
  // getting types of drink from catalog
  const teaTypes = useSelector((state) => state.catalog.tea.types);
  const coffeeTypes = useSelector((state) => state.catalog.coffee.types);

  // sorting array depend on type (tea/coffee)
  const types = type.tea ? teaTypes : coffeeTypes;
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="coffee__types">
      {types.map((item) => {
        return (
          <div
            onClick={() => {
              /*creating path with item.type wich is number from 0 to 3 DrinkTypeItems are openning*/
              type.tea
                ? history.push("/tea-type" + item.type)
                : history.push("/coffee-type" + item.type);
              dispatch(setActiveCatalog(item.name));
            }}
            className="coffee__type"
            key={item.id}
          >
            <h3>{item.name}</h3>
            <img src={item.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}
