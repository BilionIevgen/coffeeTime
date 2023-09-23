import React, { useEffect } from "react";
import { Header, CatalogPopup } from "./components";
import { MainMenu, Cart, DrinkTypeItems, DrinkTypes, Favourite } from "./pages";
import { Route } from "react-router-dom";
import Axios from "axios";

import { setCoffee, setTea } from "./redux/actions/catalog";
import { useDispatch, useSelector } from "react-redux";

const App = React.memo(() => {
  const dispatch = useDispatch();

  // getting data from fake server
  useEffect(() => {
    Axios.get("https://coffee-time-seven.vercel.app/db.json").then((res) => {
      dispatch(setCoffee(res.data.coffee));
      dispatch(setTea(res.data.tea));
    });
  }, [dispatch]);

  const { catalog } = useSelector((state) => ({
    catalog: state.catalog,
  }));

  return (
    <div className="container-fluid">
      <header className="row">
        <Header />
        <CatalogPopup />
      </header>

      {catalog.tea.catalog ? (
        <div className="row">
          <Route path="/cart" component={Cart} />
          <Route path="/favourite" component={Favourite} />
          <Route path="/" component={MainMenu} exact />
          <Route
            path="/coffee"
            render={() => {
              return <DrinkTypes type={{ tea: false }} />;
            }}
          />
          <Route
            path="/tea"
            render={() => {
              return <DrinkTypes type={{ tea: true }} />;
            }}
          />
          <Route
            path="/coffee-type:type"
            render={() => {
              return <DrinkTypeItems type={{ tea: false }} />;
            }}
          />
          <Route
            path="/tea-type:type"
            render={() => {
              return <DrinkTypeItems type={{ tea: true }} />;
            }}
          />
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
});

export default App;
