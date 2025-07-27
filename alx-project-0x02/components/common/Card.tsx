// components/common/Card.tsx
import React from 'react';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content, image, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 max-w-sm w-full">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      {footer && <div className="border-t pt-2">{footer}</div>}
    </div>
  );
};

export default Card;

