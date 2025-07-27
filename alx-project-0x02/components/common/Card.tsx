// components/common/Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  content: string;
  image?: string;
  footer?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, content, image, footer }) => {
  ...
};

export default Card;


