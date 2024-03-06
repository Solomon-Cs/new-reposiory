import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/Redux/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { userApi } from "./components/Redux/features/api/userApi";

import "./index.css";
import App from "./App";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <ApiProvider api={userApi} >
          <App />
        </ApiProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
