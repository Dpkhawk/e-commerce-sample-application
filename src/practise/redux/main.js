import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux";
import store from "./store";
import React from "react";

const Main = () => {
  const count = useSelector(() => store.getState().cou.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => store.dispatch(increment(1))}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      {console.log(count)}
    </>
  );
};
export default Main;
