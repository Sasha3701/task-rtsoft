import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import { StyledEngineProvider } from "@material-ui/core/styles";
import "./index.css";

const app = (
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
