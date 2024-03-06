import { Link } from "react-router-dom";
import { useContext } from "react";
import { LevelContext } from "../../route";

import FoodKart from "../../assests/food kart.png";

const NavigationBar = () => {
  const newValue = useContext(LevelContext);
  const loginValue = sessionStorage.getItem("userId");

  const handleDelete=()=>{
    sessionStorage.removeItem("userId");
  }
  return (
    <nav>
      <div className="FloatLeft">
        <Link to={"/"} className="homeLinks">
          <img className="logoNav" src={FoodKart} alt="food kart" />
        </Link>
        {loginValue ? (
          <Link className="homeLinks" to={"/cart"}>
            Cart
          </Link>
        ) : null}
        <Link className="homeLinks" to={"/products"}>
          Products
        </Link>
      </div>
      {/* <input
        className="searchBar"
        placeholder="search items"
        type="search"
        value={newValue.searchItemsValue.searchItems}
        onChange={(e) =>
          newValue.setSearchItemsFunction.setSearchItems(e.target.value)
        }
      /> */}
      <div className="LogIn">
        {loginValue ? null : (
          <Link to={"/signup"} className="homeLinks">
            SignUp
          </Link>
        )}
        {loginValue ? (
          <Link to={"/loginPage"} onClick={handleDelete} className="homeLinks">
            LogOut
          </Link>
        ) : (
          <Link to={"/loginPage"} className="homeLinks">
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );
};
export default NavigationBar;
