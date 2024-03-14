import "./style.css";
import Router from "./route";

import "bootstrap/dist/css/bootstrap.css";
import Redux from "./redux";
import { Provider } from "react-redux";



const App = () => {
  
  return (
    <>
      {/* <Router /> */}
      <Provider store={"store"}><Redux/></Provider>
     
      
    </>
  );
};

export default App;
