import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie With Every Bite
        </h1>
        <p className=" text-backgroundColor">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          deleniti nihil nam corporis perspiciatis consectetur vel itaque,
          reprehenderit animi at similique? Sequi ipsa deleniti amet voluptates
          labore quisquam cupiditate obcaecati.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
