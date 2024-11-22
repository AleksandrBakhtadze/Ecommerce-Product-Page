import React from "react";

const Price = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        flexDirection: "column",
        alignItems: "flex-start",
        bottom: "680px",
        left: "1330px",
        gap: "16px",
        fontSize: "28px",
        color: "#1d2026",
        fontWeight: "bold",
      }}
    >
      $125.00
      <div
        style={{
          display: "flex",
          position: "fixed",
          bottom: "650px",
          fontSize: "18px",
          color: "#b6bcc8",
          textDecoration: "line-through",
        }}
      >
        $250.00
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          bottom: "683px",
          left: "1460px",
          width: "51px",
          height: "27px",
          backgroundColor: "#FFF5F0",
          color: "#FF7E1B",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
      >
        50%
      </div>
    </div>
  );
};

export default Price;
