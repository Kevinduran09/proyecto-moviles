import React from 'react';

interface ListProps {
    children: React.ReactNode;
    variant?: 'ordered' | 'unordered';
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
}

const List: React.FC<ListProps> = ({
    children,
    variant = 'unordered',
    spacing = 'md',
    className = ''
}) => {
    const spacingClasses = {
        none: 'space-y-0',
        sm: 'space-y-2',
        md: 'space-y-4',
        lg: 'space-y-6'
    };

    const baseClasses = `
        ${spacingClasses[spacing]}
        ${className}
    `;

    const ListComponent = variant === 'ordered' ? 'ol' : 'ul';

    return (
        <ListComponent className={baseClasses}>
            {children}
        </ListComponent>
    );
};

interface ListItemProps {
    children: React.ReactNode;
    className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
    children,
    className = ''
}) => {
    return (
        <li className={`text-white ${className}`}>
            {children}
        </li>
    );
};

export default List; 