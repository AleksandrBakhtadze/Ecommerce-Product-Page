import React, { useState } from "react";
import "./Box.css";
import Boots1 from "../assets/boots1.png";
import Boots2 from "../assets/boots2.png";
import Boots3 from "../assets/boots3.png";
import Boots4 from "../assets/boots4.png";

const Box = () => {
  const images = [Boots1, Boots2, Boots3, Boots4];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrev = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main>
      <div className="left">
        <div
          style={{ backgroundImage: `url(${images[activeImageIndex]})` }}
          className="active_image"
          onClick={() => setIsLightboxOpen(true)}
        ></div>

        <div className="bottom">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`small_image ${
                activeImageIndex === index && "active"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="right">
        <p>Sneaker Company</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <span>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </span>
      </div>

      {isLightboxOpen && (
        <div className="lightbox">
          <button className="arrow left-arrow" onClick={handlePrev}>
            &#8592;
          </button>
          <img src={images[activeImageIndex]} alt="Full view" />
          <button className="arrow right-arrow" onClick={handleNext}>
            &#8594;
          </button>
          <button
            className="close-btn"
            onClick={() => setIsLightboxOpen(false)}
          >
            X
          </button>
        </div>
      )}
    </main>
  );
};

export default Box;
