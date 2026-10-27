import { type ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'orange' | 'ghost-light' | 'light' | 'dark';
  fullWidth?: boolean;
}

export function Button({ variant = 'primary', fullWidth = false, className = '', ...props }: ButtonProps) {
  const classes = [
    'button',
    variant === 'primary' ? 'primary' : '',
    variant === 'secondary' ? 'secondary' : '',
    variant === 'orange' ? 'orange' : '',
    variant === 'ghost-light' ? 'ghost-light' : '',
    variant === 'light' ? 'light' : '',
    variant === 'dark' ? 'dark' : '',
    fullWidth ? 'full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <button className={classes} {...props} />;
}
