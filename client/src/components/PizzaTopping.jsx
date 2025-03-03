import React from 'react';

const PizzaTopping = ({ name, description, image, likes, creator }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-orange-500">👍</span>
            <span>{likes}</span>
          </div>
          <div className="text-gray-500">
            <span>by {creator}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaTopping;
