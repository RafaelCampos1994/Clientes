import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  href,
  target,
  ...props
}) => {
  const baseStyles = "px-8 py-4 rounded-xl font-medium transition-all duration-300 transform active:scale-95 text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer decoration-0";

  const variants = {
    // Elegant Blue Gradient - using brightness for smooth hover instead of gradient stops
    primary: "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-1 hover:brightness-110",

    // Gold/Accent for High Contrast Actions - using brightness for smooth hover
    secondary: "bg-gradient-to-r from-gold-500 to-gold-400 text-white shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-1 hover:brightness-105",

    // Outline for secondary actions on dark backgrounds
    outline: "bg-transparent border border-brand-200 text-brand-600 hover:bg-brand-50 hover:border-brand-300",

    // Ghost for subtle actions
    ghost: "bg-transparent text-brand-600 hover:bg-brand-50/50",
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={classes}
        onClick={props.onClick as any}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};