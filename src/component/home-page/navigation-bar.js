import { Link } from "react-router-dom";

import FoodKart from "../../assests/food kart.png";

const NavigationBar = ({ value, setSearchItems }) => {
  const loginValue = sessionStorage.getItem("userId");

  const handleChange = () => {
    sessionStorage.removeItem("userId");
  };
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
      {value ? (
        <input
          className="searchBar"
          placeholder="search items"
          type="text"
          onChange={(e) => setSearchItems(e.target.value)}
        />
      ) : null}
      <div className="LogIn">
        {loginValue ? null : (
          <Link to={"/signup"} className="homeLinks">
            SignUp
          </Link>
        )}
        {loginValue ? (
          <Link to={"/loginPage"} onClick={handleChange} className="homeLinks">
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
