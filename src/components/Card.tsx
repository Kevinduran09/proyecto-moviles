import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`${className} flex-1 bg-white text-black rounded-2xl shadow-lg mb-3`}>
      {children}
    </div>
  )
}


export default Card