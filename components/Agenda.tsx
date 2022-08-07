import React from "react";
import AgendasList from "./AgendasList";

const Agenda = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full m-auto py-16 bg-white">
      <div className="flex flex-col lg:space-x-6 lg:grid lg:grid-cols-2 w-full sm:w-4/5 lg:w-3/4 mx-auto max-w-xxl p-4">
        {/* Agenda */}
        <div className="">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-black mb-4">
            Our Goal
          </h2>
          <p className="text-sm text-zinc-900 py-2">
            Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis nihil soluta atque ipsum,
            cum harum earum dignissimos quidem debitis laboriosam! adipisicing
            elit. Ab, iure!
          </p>
          <p className="text-sm text-zinc-900 py-2">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis nihil soluta atque ipsum,
            cum harum earu
          </p>
          <p className="text-sm text-zinc-900 py-2">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis nihil soluta atque ipsum,
            cum harum earum dignissimos qui.
          </p>
          <p className="text-sm text-zinc-900 py-2">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis nihil soluta atque ipsum,
            cum harum earum dignissimos quidem debitis laboriosam!adipisicing.
          </p>
        </div>
        {/* Agendas */}
        <AgendasList />
      </div>
    </section>
  );
};

export default Agenda;
