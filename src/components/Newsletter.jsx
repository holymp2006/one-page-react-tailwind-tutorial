import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-3">
        <div className="my-4 lg:col-span-2">
          <h3 className="py-2 text-center text-2xl font-bold sm:text-3xl md:text-left md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h3>
          <p className="text-center md:text-left">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <div className="flex w-full flex-col items-center justify-between sm:flex-row">
            <input
              className="flex w-full rounded-md p-3 text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="my-4 ml-4 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read out{" "}
            <a className="text-[#00df9a]" href="#">
              Privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
