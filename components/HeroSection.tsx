// import type { Component } from "next";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full m-auto bg-gradient-to-br from-primary to-slate-900 text-white">
      <div className="flex w-full sm:w-4/5 lg:w-3/4 mx-auto max-w-xxl p-4">
        <div className="w-full sm:w-3/4 lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-black">
              Elegant, Quality Graphic & UI/UX Designs
            </h1>
            <p className=" text-zinc-100">
              At MJ Designs we make sure we give you nothing but the best of
              what graphic designing can do for your business.
            </p>
          </div>
          <div className="">
            <a
              href="#"
              className="text-primary rounded-md bg-white font-bold py-2 px-4 md:py-3 md:px-5 transition-all duration-500 hover:bg-opacity-50 hover:bg-primary hover:text-white"
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
