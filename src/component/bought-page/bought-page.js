import Confirm from "../../assests/orderconfirmation.png";
import { Outlet, useNavigate } from "react-router-dom";

export default function BoughtPage() {
  try {
    const navigation = useNavigate();

    return (
      <>
        <Outlet />
        <div className="orderOuter">
          <img
            src={Confirm}
            alt="Order Confirmation"
            className="orderConfirm"
          />
          <h1 className="orderconfirmed">Order Confirmed</h1>
          <div className="link">
            <button onClick={() => navigation("/")}>Back To Home</button>
            <p>(Or)</p>
            <button onClick={() => navigation("/products")}>
              Keep shopping
            </button>
          </div>
        </div>
      </>
    );
  } catch {
    alert("seomthing is wrong");
  }
}
