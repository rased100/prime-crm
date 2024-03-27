import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const CarouselComponent = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative">
      <div className="absolute bottom-[-200px] left-[100px] transform -translate-y-1/2 z-10">
        {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"> */}
        <button
          className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={prevSlide}
        >
          <GrPrevious />
        </button>
      </div>
      <div className="absolute bottom-[-200px] right-[100px] transform -translate-y-1/2 z-10">
        <button
          className="bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-4 rounded-full"
          onClick={nextSlide}
        >
          <GrNext />
        </button>
      </div>
      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
