import React from 'react';

export const Input = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input">
      </label>
      <input
        className=" ml-5 shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="input"
        type="text"
        placeholder="Your Placeholder"
      />
    </div>
  );
};

