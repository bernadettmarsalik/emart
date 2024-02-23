import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./component/Cart";
import Register from "./component/Register";
import LogIn from "./component/LogIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<LogIn />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
