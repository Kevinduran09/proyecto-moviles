import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
    centered?: boolean;
}

const Container: React.FC<ContainerProps> = ({
    children,
    maxWidth = 'lg',
    padding = 'md',
    className = '',
    centered = true
}) => {
    const maxWidthClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        full: 'max-w-full'
    };

    const paddingClasses = {
        none: 'px-0',
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8'
    };

    const baseClasses = `
        w-full
        ${maxWidthClasses[maxWidth]}
        ${paddingClasses[padding]}
        ${centered ? 'mx-auto' : ''}
        ${className}
    `;

    return <div className={baseClasses}>{children}</div>;
};

export default Container; 