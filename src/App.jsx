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

    
      <div
        style={{
          display: "flex",
          flexDirection: "column", 
          alignItems: "center", 
          gap: "16px", 
          marginTop: "32px", 
        }}
      >
        <AddtoCart setCount={setCount} />
        <Price />
      </div>
    </div>
  );
};

export default App;
