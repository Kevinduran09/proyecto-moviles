import React from 'react';

interface DescriptionProps {
    children: React.ReactNode;
    size?: 'sm' | 'base' | 'lg';
    color?: 'primary' | 'secondary' | 'white' | 'gray';
    className?: string;
    align?: 'left' | 'center' | 'right';
}

const Description: React.FC<DescriptionProps> = ({
    children,
    size = 'base',
    color = 'gray',
    className = '',
    align = 'left'
}) => {
    const sizeClasses = {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg'
    };

    const colorClasses = {
        primary: 'text-blue-500',
        secondary: 'text-gray-500',
        white: 'text-white',
        gray: 'text-gray-400'
    };

    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    const baseClasses = `
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${alignClasses[align]}
        leading-relaxed
        ${className}
    `;

    return <p className={baseClasses}>{children}</p>;
};

export default Description; 