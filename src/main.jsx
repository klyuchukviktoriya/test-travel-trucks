import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./common/styles/main.scss";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
