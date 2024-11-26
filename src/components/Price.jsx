import React from "react";

const Price = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        position: "relative", 
        marginTop: "-230px", 
        marginRight:"-200px",
        fontSize: "28px",
        color: "#1d2026",
        fontWeight: "bold",
      }}
    >
      <span>$125.00</span>

      <div
        style={{
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
