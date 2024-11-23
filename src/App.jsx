import React, { useState } from "react";
import Header from "./components/Header";
import Box from "./components/Box";
import AddtoCart from "./components/AddToCart";
import Price from "./components/Price";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header count={count} setCount={setCount} />
      <Box />
      <Price />
      <AddtoCart setCount={setCount} />
    </div>
  );
};

export default App;
