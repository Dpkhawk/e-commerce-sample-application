import { useEffect, useState } from "react";
import fetchData from "../services/fetching";
import { Outlet, useNavigate } from "react-router";
const OrderHistory = () => {
  
  const navigation = useNavigate();
  const [history, setHistory] = useState([]);
  const apiURL = process.env.REACT_APP_HISTORY_ENDPOINT;
  useEffect(() => {
    
    const fetching = async () => {
      const result = await fetchData(apiURL);
      setHistory(result
      );
    };
    fetching();
  }, []);
  const handleClick = (item) => {
    navigation("/product", { state: { id: item } });
  };
  const month = new Date().getMonth();
  const date = new Date().getDate();
  return (
    <>
      <Outlet />
      <div className="orders">
        {history.map((items) => {
          return (
            <>
              <img
                src={items.src}
                alt={items.name}
                className="historyImages"
                onClick={() => handleClick(items)}
              />
              <h1>Item Name:{items.name}</h1>
              <h2>Item Price:{items.price * items.kgs}</h2>
              <h3>Item Kgs:{items.kgs}</h3>
              <p>
                Delivery Status:
                { date-items.date.todayDate >= 2 || month > items.date.month
                  ? "Delivered"
                  : "Wait for Delivery"}
              </p>
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};
export default OrderHistory;
