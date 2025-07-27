// components/common/Button.tsx
import { ButtonProps } from '@/interfaces';


const Button = ({ label, size, shape }: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <> 
    <div>
    <button
      className={
        'bg-blue-600 text-white font-semibold';
        sizeClasses[size];
        shape
      
      {label}
      
      
    
    </button>
      </div>
      }
    )

  
export default Button;


