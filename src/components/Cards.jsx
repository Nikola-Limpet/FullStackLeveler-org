import React from 'react';

const Card = () => {
  return (
    <div className="flex justify-center">
      <div className="w-48 h-64 bg-gray-900 rounded-lg relative">
        <div className="flex items-center p-2.5">
          <div className="p-1">
            <span className="inline-block w-2.5 h-2.5 bg-red-500 rounded-full" />
          </div>
          <div className="p-1">
            <span className="inline-block w-2.5 h-2.5 bg-yellow-500 rounded-full" />
          </div>
          <div className="p-1">
            <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full" />
          </div>
        </div>
        <div className="p-4">
          {/* Add your card content here */}
          Hello guy
        </div>
      </div>
    </div>
  );
}

export default Card;