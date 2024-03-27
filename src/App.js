import "./style.css";
import Router from "./route";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import store from "./component/redux/index";
import NavigationBar from "./component/home-page/navigation-bar";

const App = () => {
  // require('dotenv').config()
  return (
  
      <Provider store={store}>
        <Router />
      </Provider>
    
  );
};

export default App;
