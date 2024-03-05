import { Link } from "react-router-dom";
import { useContext } from "react";
import { LevelContext } from "../../route";


export default function NavigationBar() {
  const newValue = useContext(LevelContext);
  
  return (
    <nav>
      <div className="FloatLeft">
        <Link to={"/"} className="homeLinks">
          <b>Fresh Kart</b>
        </Link>
        <Link className="homeLinks" to={"/cart"}>Cart</Link>
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
        <Link to={"/signup"} className="homeLinks">
          SignUp
        </Link>
        <Link to={"/loginPage"} className="homeLinks">
          Login
        </Link>
      </div>
    </nav>
  );
}
