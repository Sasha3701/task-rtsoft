import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import { Normalize } from "styled-normalize";
import { StyledEngineProvider } from "@mui/material/styles";

const app = (
  <Provider store={store}>
    <Normalize />
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
