import "./style.css";
import Router from "./route";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Redux from "./redux/redux";
import { Provider } from "react-redux";
import store from "./component/reduxNew/cart-redux-store";
// import TestFile from "./sample";
// import Main from "./redux/main";
// import stores from "./redux/store";
// import Main1 from "./redux/main1";
// import Mainmethod from "./redux2/main";
// import store from "./redux2/store";
// import Callback from "./fix";

const App = () => {
  return (
    <>
      {/* <Router /> */}
      {/* <Provider store={store}></Provider> */}
      {/* <Provider store={stores}><Main/><Main1/></Provider>  */}
      {/* <Provider store={store}><Mainmethod/></Provider> */}
      {/* <Callback/> */}
      <Provider store={store}>
        <Router />
      </Provider>
      {/* <TestFile/> */}
    </>
  );
};

export default App;
