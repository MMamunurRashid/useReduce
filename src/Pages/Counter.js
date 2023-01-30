import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") return state - 1;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex justify-center mt-32">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Counter</h2>
          <h2 className="text-2xl">{state}</h2>

          <div className="card-actions justify-end">
            <button
              onClick={() => dispatch({ type: "DECREMENT" })}
              className="btn btn-primary"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch({ type: "INCREMENT" })}
              className="btn btn-secondary"
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
