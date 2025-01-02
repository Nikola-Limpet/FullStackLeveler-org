import React from 'react';

const Quote = () => {
  return (
    <div className="flex justify-center min-h-7 ">
      <div className="text-white p-6 flex-1 max-w-lg mx-4 rounded-lg">
        <h3 className="text-3xl font-bold my-4 ">✍️ Random Dev Quote</h3>
        <img
          src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical"
          alt="Random Dev Quote"
          className="rounded-lg min-w-full"
        />
      </div>
    </div>
  );
};

export default Quote;