import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-img">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
          alt="hero"
        />
      </div>
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          tenetur doloremque molestias repellat minus asperiores in aperiam
          dolor, quaerat praesentium.
        </p>
      </div>
    </section>
  );
};

export default Hero;
