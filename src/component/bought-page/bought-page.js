import NavigationBar from "../home-page/navigation-bar"

import Confirm from "../../assests/orderconfirmation.png"
import { useNavigate } from "react-router-dom"


export default function BoughtPage() {
  const navigation = useNavigate()
  return (<>
    <NavigationBar />
    <div className="orderOuter">
      <img src={Confirm} alt="Order Confirmation" className="orderConfirm" />
      <h1 className="orderconfirmed">Order Confirmed</h1>
      <div className="link"><button onClick={() => navigation("/")}>Back To Home</button>
        <p>(Or)</p>
        <button onClick={() => navigation('/products')}>Keep shopping</button ></div>
    </div>
  </>)
}
