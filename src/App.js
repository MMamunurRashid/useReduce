// import logo from "./logo.svg";
// import "./App.css";
// import { createContext, useState } from "react";
// import Parent from "./Pages/Parent";

import Counter from "./Pages/Counter";
import ShortForm from "./Pages/ShortForm/ShortForm";

// export const CounterContext = createContext();
function App() {
  return (
    // <CounterContext.Provider value={value}>
    //   <div className="">
    //     <Parent></Parent>
    //   </div>
    // </CounterContext.Provider>
    <div>
      {/* <ShortForm></ShortForm> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
