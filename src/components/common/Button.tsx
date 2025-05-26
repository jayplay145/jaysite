import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  color?: 'purple' | 'blue' | 'red';
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'purple',
  variant = 'solid',
  size = 'md',
  className = '',
  onClick,
  icon,
}) => {
  const colorClasses = {
    purple: {
      solid: 'bg-neon-purple hover:bg-purple-700 text-white',
      outline: 'border border-neon-purple text-neon-purple hover:bg-neon-purple/10',
    },
    blue: {
      solid: 'bg-neon-blue hover:bg-blue-700 text-white',
      outline: 'border border-neon-blue text-neon-blue hover:bg-neon-blue/10',
    },
    red: {
      solid: 'bg-neon-red hover:bg-red-700 text-white',
      outline: 'border border-neon-red text-neon-red hover:bg-neon-red/10',
    },
  };

  const sizeClasses = {
    sm: 'text-xs py-1 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-3 px-6',
  };

  const shadowClasses = {
    purple: 'shadow-neon-purple',
    blue: 'shadow-neon-blue',
    red: 'shadow-neon-red',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`font-orbitron rounded-md transition-all duration-300 
      ${colorClasses[color][variant]} ${sizeClasses[size]} 
      ${variant === 'solid' ? shadowClasses[color] : ''} 
      flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;