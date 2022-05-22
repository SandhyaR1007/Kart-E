import React, { useState } from "react";
import { CarouselData } from "../assets/CarouselData";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const handleCarousel = (direction) => {
    if (direction == "next") {
      if (currentImage < CarouselData.length - 1) {
        setCurrentImage(currentImage + 1);
      } else if (currentImage == CarouselData.length - 1) {
        setCurrentImage(0);
      }
    } else if (direction == "previous") {
      if (currentImage > 0) {
        setCurrentImage(currentImage - 1);
      } else if (currentImage == 0) {
        setCurrentImage(CarouselData.length - 1);
      }
    }
  };
  return (
    <div>
      <button
        className="absolute top-64 left-0 p-3"
        onClick={() => handleCarousel("previous")}
      >
        previous
      </button>
      <button
        className="absolute top-64 right-0 p-3"
        onClick={() => handleCarousel("next")}
      >
        next
      </button>
      <img
        className="h-screen w-screen"
        src={CarouselData[currentImage].image}
        alt="/"
      />
    </div>
  );
};

export default Carousel;
