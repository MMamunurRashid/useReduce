import React, { useContext } from "react";
import { CounterContext } from "../App";

const Child = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className="flex justify-center mt-32">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Child Counter</h2>
          <h2 className="text-2xl">{count}</h2>

          <div className="card-actions justify-end">
            <button
              onClick={() => setCount(count - 1)}
              className="btn btn-primary"
            >
              Decrement
            </button>
            <button
              onClick={() => setCount((prvState) => prvState + 1)}
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

export default Child;
