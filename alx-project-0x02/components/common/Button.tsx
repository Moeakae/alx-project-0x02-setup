// components/Button.tsx
import React from 'react';
 import { ButtonProps } from '@/interfaces';

type ButtonProps = {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
};

const sizeClasses = {
  small: 'text-sm px-3 py-1',
  medium: 'text-base px-4 py-2',
  large: 'text-lg px-5 py-3',
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  shape = 'rounded-md',
}) => {
  const finalClass = `bg-blue-600 text-white font-semibold ${sizeClasses[size]} ${shape}`;

  return <button className={finalClass}>{title}</button>;
};

export default Button;
