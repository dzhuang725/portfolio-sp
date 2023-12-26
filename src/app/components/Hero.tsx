import React from "react";

function Hero() {
  return (
    <div className="w-56 h-56 mx-auto mt-24">
      <img
        src="https://i.imgur.com/9C5cUow.jpg"
        className="flex-shrink-0 w-56 h-56 z-0 rounded-full object-cover -mb-20 bg-gradient-radial"
        alt="hero"
      />
      {/* <div className="hero-image h-56 w-56 z-10"></div> */}
    </div>
  );
}

export default Hero;
