import React from 'react';

interface TextProps {
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    color?: 'primary' | 'secondary' | 'white' | 'black' | 'gray';
    className?: string;
}

const Text: React.FC<TextProps> = ({
    children,
    size = 'base',
    weight = 'normal',
    color = 'white',
    className = ''
}) => {
    const sizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl'
    };

    const weightClasses = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
    };

    const colorClasses = {
        primary: 'text-blue-500',
        secondary: 'text-gray-500',
        white: 'text-white',
        black: 'text-black',
        gray: 'text-gray-400'
    };

    const baseClasses = `${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${className}`;

    return <p className={baseClasses}>{children}</p>;
};

export default Text; 