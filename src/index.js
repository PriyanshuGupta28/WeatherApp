import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reducer } from "./Redux/reducer";

const store = createStore(reducer, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
