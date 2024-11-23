import React, { useState } from "react";

const AddtoCart = (props) => {
  const [sneakers, setSneakers] = useState(0);

  const incrase = () => {
    setSneakers(sneakers + 1);
  };

  const decrase = () => {
    if (sneakers !== 0) {
      setSneakers(sneakers - 1);
    }
  };

  const AddtoCartHandler = () => {
    setSneakers(0);
    props.setCount((prev) => prev + sneakers);
  };

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        flexDirection: "column",
        alignItems: "flex-start",
        bottom: "550px",
        left: "1315px",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "145px",
            height: "56px",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#F6F8FD",
            borderRadius: "8px",
            padding: "0 16px",
          }}
        >
          <span
            onClick={decrase}
            style={{ color: "orange", cursor: "pointer", fontSize: "24px" }}
          >
            -
          </span>
          <span>{sneakers}</span>
          <span
            onClick={incrase}
            style={{ color: "orange", cursor: "pointer", fontSize: "24px" }}
          >
            +
          </span>
        </div>
        <button
          onClick={AddtoCartHandler}
          style={{
            width: "272px",
            height: "56px",
            border: "none",
            cursor: "pointer",
            transition: "0.05s",
            color: "white",
            borderRadius: "13px",
            backgroundColor: "#FF7E1B",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default AddtoCart;
