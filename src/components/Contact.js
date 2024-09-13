import React from 'react';

const Contact = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Message</label>
          <textarea className="w-full p-2 border border-gray-300"></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2">Submit</button>
      </form>
    </section>
  );
};

export default Contact;