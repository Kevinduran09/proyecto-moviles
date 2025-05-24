import React from 'react';

interface TitleProps {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    color?: 'primary' | 'secondary' | 'white' | 'black';
}

const Title: React.FC<TitleProps> = ({
    children,
    variant = 'h1',
    className = '',
    color = 'white'
}) => {
    const colorClasses = {
        primary: 'text-blue-500',
        secondary: 'text-gray-500',
        white: 'text-white',
        black: 'text-black'
    };

    const sizeClasses = {
        h1: 'text-4xl font-bold',
        h2: 'text-3xl font-bold',
        h3: 'text-2xl font-semibold',
        h4: 'text-xl font-semibold',
        h5: 'text-lg font-medium',
        h6: 'text-base font-medium'
    };

    const Component = variant;
    const baseClasses = `${sizeClasses[variant]} ${colorClasses[color]} ${className}`;

    return <Component className={baseClasses}>{children}</Component>;
};

export default Title; 