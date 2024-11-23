import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/sneakers.png";
import Navigation from "./Navigation";
import Cart from "../assets/cart.png";
import Avatar from "../assets/avatar.png";
import TrashIcon from "../assets/trash.png";
import ShoesImage from "../assets/boots1.png";

const Header = ({ count, setCount }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  const productPrice = 125;
  const totalCost = count * productPrice;

  const handleDelete = () => {
    setCount(0);
    setCartOpen(false);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <img style={{ cursor: "pointer" }} src={Logo} alt="sneakers logo" />
      <Navigation />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          position: "relative",
        }}
      >
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onClick={toggleCart}
        >
          <img src={Cart} alt="cart" />
          {count > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {count}
            </span>
          )}
        </div>

        {cartOpen && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "-190px",
              width: "360px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "16px",
              zIndex: "1000",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Cart
            </h3>
            <hr style={{ marginBottom: "16px" }} />
            {count === 0 ? (
              <p
                style={{
                  fontSize: "14px",
                  color: "#b6bcc8",
                  textAlign: "center",
                }}
              >
                Your cart is empty.
              </p>
            ) : (
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src={ShoesImage}
                    alt="product"
                    style={{
                      marginBottom: "50px",
                      width: "100px",
                      height: "100px",
                      borderRadius: "8px",
                      marginRight: "10px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        marginBottom: "60px",
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "#69707D",
                      }}
                    >
                      Fall Limited Edition Sneakers
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          position: "fixed",
                          top: "236px",
                          right: "375px",
                          color: "#b6bcc8",
                          fontSize: "14px",
                        }}
                      >
                        ${productPrice}.00 x {count}
                      </p>
                      <strong
                        style={{
                          position: "fixed",
                          right: "310px",
                          top: "250px",
                          color: "black",
                          fontSize: "14px",
                        }}
                      >
                        ${totalCost}.00
                      </strong>
                    </div>
                  </div>
                  <img
                    src={TrashIcon}
                    alt="delete"
                    onClick={handleDelete}
                    style={{
                      marginBottom: "50px",
                      cursor: "pointer",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </div>
                <button
                  onClick={handleCheckout}
                  style={{
                    position: "absolute",
                    width: "321px",
                    height: "40px",
                    top: "250px",
                    backgroundColor: "#FF7E1B",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}

        <img
          style={{ cursor: "pointer" }}
          className="avatar"
          src={Avatar}
          alt="avatar"
        />
      </div>
    </header>
  );
};

export default Header;