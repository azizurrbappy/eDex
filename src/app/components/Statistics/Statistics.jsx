import React from 'react';

const Statistics = ({ children, count, title, gFrom, gTo }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`text-white p-3 bg-gradient-to-b from-[#${gFrom}] to-[#${gTo}] rounded-full max-w-fit`}
      >
        {children}
      </div>

      <div>
        <h2 className="text-xl font-bold">{count}</h2>
        <p className="text-base text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default Statistics;
