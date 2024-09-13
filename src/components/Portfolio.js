import React from 'react';

const Portfolio = () => {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-3xl font-bold">My Portfolio</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Example of portfolio items */}
        <div className="bg-gray-200 p-5">Project 1</div>
        <div className="bg-gray-200 p-5">Project 2</div>
        <div className="bg-gray-200 p-5">Project 3</div>
      </div>
    </section>
  );
};

export default Portfolio;