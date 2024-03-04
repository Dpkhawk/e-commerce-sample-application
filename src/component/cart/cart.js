import { useEffect, useState } from "react";


import CartItemView from "./cart-items-view";

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/data")
      .then((respone) => respone.json())
      .then((data) => setCartData([...data]));
  }, []);

  return (
    <>
      <div className="cartOuter">
        <div className="mainContent">
          {cartData.map((product) => {
            return (
              <div>
                <CartItemView products={product} />
              </div>
            );
          })}
        </div>
        <div className="leftSideContent"></div>
        <div className="rightSideContent"></div>
      </div>
    </>
  );
}
