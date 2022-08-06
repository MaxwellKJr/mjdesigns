// import type { Component } from "next";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full m-auto bg-gradient-to-br from-primary to-slate-900 text-white">
      <div className="flex w-full md:w-3/4 mx-auto max-w-xxl p-4">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
              Elegant, Quality Graphic & UI/UX Designs
            </h1>
            <p className="py-4 text-zinc-200">
              At MJ Designs we make sure we give you nothing but the best of
              what graphic designing can do for your business.
            </p>
          </div>
          <div className="py-4">
            <a
              href="#"
              className="text-primary bg-white font-bold py-2 px-4 transition-all duration-500 hover:bg-primary hover:text-white"
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