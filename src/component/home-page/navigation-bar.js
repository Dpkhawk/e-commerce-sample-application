import { Link, useNavigate, useOutletContext } from "react-router-dom";

import FoodKart from "../../assests/food kart.png";

const NavigationBar = () => {
  const loginValue = sessionStorage.getItem("userId");
  const navigation = useNavigate();
  const handleChange = () => {
    navigation("/loginPage");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("bought");
  };
  const search=useOutletContext();
 
  const handleSearchChange=(e)=>{
  
     search(e.target.value)
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
      {search ? (
        <input
          className="searchBar"
          placeholder="search items"
          type="text"
          onChange={(e) =>handleSearchChange(e)}
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
