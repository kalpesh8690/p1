import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
      <Navbar />
      <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
