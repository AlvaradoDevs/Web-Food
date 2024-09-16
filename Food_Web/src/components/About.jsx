import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          laudantium iusto suscipit in rerum sed accusantium repellendus dicta
          ut tempore possimus est corporis alias saepe autem, placeat
          consectetur temporibus labore. Quibusdam tenetur odio libero sit, nisi
          possimus debitis! Aspernatur, rerum.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolorem
          dolorum at soluta illo, omnis error sint necessitatibus asperiores
          enim.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
