import { Link, useNavigate, useOutletContext } from "react-router-dom";

import FoodKart from "../../assests/food kart.png";
import { useDispatch, useSelector } from "react-redux";
import { searchItems } from "../redux/reducer";

const NavigationBar = () => {
  const loginValue = sessionStorage.getItem("userId");
  const searchValue=useSelector(state=>state.cartValue.searchBar)
  const navigation = useNavigate();
  const handleChange = () => {
    navigation("/loginPage");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("bought");
  };
  // const search=useOutletContext();
  const dispatch=useDispatch();
  const handleSearchChange=(e)=>{
    dispatch(searchItems(e.target.value))
    // search(e.target.value)
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
        <Link className="homeLinks" to={"/products"} >
          Products
        </Link>
      </div>
      {searchValue ? (
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
