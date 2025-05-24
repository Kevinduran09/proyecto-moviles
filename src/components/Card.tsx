import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className='flex-1 bg-white text-black p-5 rounded-2xl shadow-lg mb-5'>
        {children}
    </div>
  )
}

export default Card