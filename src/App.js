import "./styles.css";
import React from "react";
import { incNumber, decNumber } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeThenumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="Amm">
        <h1>Calculator</h1>
        <div className="quantity">
          <h1
            className="minus"
            title="decrement"
            onClick={() => dispatch(decNumber)}
          >
            <span> - </span>{" "}
          </h1>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <h1
            className="plus"
            title="increment"
            onClick={() => dispatch(incNumber)}
          >
            <span> + </span>{" "}
          </h1>
        </div>{" "}
      </div>
    </>
  );
};
export default App;
