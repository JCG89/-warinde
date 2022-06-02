import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/lib/store";
import { AppContainer } from "./app/views/containers/index";

// import { addToCart } from "./app/lib/actions";

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(addToCart({ name: "citron" }, 2));
// store.dispatch(addToCart({ name: "kiwi" }, 5));

// unsubscribe();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
