import { useDispatch, useSelector } from "react-redux";
import store from "./store";
import { totalValue } from "./reducer";
import React from "react";
const Mainmethod = () => {
  const data = [
    { id: 0, name: "carrot", price: 21 },
    { id: 1, name: "apple", price: 22 },
  ];
  // const value=useSelector(state=>state.valu.value)
  const value = useSelector(() => store.getState().valu.value);
  const dispatch = useDispatch();
  return (
    <>
      {console.log(value)}
      {/* <button onClick={()=>dispatch(totalValue(2))}>Click</button> */}
      {data.map((items) => {
        return (
          <>
            {/* {dispatch(totalValue(items.price))} */}
            <h1>{items.name}</h1>
            <h2>{items.price}</h2>
            <h3>{value}</h3>
            <button onClick={() => dispatch(totalValue(items.price))}>
              Click
            </button>
          </>
        );
      })}
    </>
  );
};
export default Mainmethod;
