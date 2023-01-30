import React, { useContext } from "react";
import { CounterContext } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      {" "}
      <div className="flex justify-center mt-32">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Parent Counter</h2>

            <h1 className="text-2xl">{count}</h1>
          </div>
        </div>
      </div>
      <Child></Child>
    </div>
  );
};

export default Parent;
