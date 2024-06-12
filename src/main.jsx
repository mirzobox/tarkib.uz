import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store/index.js";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster position="top-center" richColors />
  </>,
);
