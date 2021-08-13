import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Text of button */
    children: ReactNode;

    /** Switch into variant colors */
    variant: 'primary' | 'secondary';
}

/** Custom roundedButton */
export const Button = ({children, variant = 'primary', ...props}: Props) => {
    return (
        <button {...props} style={{
            backgroundColor: variant === 'primary' ? 'blue' : 'gray', 
            color: 'white',
            border: 'none',
            borderRadius: 30,
            padding: '10px 20px',
            cursor: 'pointer'
        }}>
            {children}
        </button>
    )
}