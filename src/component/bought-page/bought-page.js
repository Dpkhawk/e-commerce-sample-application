import NavigationBar from "../home-page/navigation-bar"

import Confirm from "../../assests/orderconfirmation.png"
import { Link } from "react-router-dom"


export default function  BoughtPage(){
    return(<>
          <NavigationBar/>
          <div className="orderOuter">
            <img src={Confirm} alt="Order Confirmation" className="orderConfirm"/>
            <h1 className="orderconfirmed">Order Confirmed</h1>
            <div className="link"><Link to={"/"}>Back To Home</Link>
            <p>(Or)</p>
            <Link to={"/products"}>Keep shopping</Link></div>
          </div>
    </>)
}
