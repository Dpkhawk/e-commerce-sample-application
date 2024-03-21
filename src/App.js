import "./style.css";
import Router from "./route";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import store from "./component/redux/index";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
