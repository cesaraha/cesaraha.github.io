import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ 
  variant = 'blue', // 'blue' or 'accent'
  disabled = false,
  onClick,
  href,
  children,
  target,
  rel,
  ariaLabel,
  ariaDisabled,
  type = 'button',
  className = ''
}) => {
  const buttonClass = `
    ${variant === 'accent' ? styles.accentBtn : styles.blueBtn} 
    ${disabled ? (variant === 'accent' ? styles.accentBtnDisabled : styles.blueBtnDisabled) : ''}
    ${className}
  `.trim();

  const linkClass = variant === 'accent' ? styles.linkAccentBtn : styles.linkBlueBtn;

  // If href is provided, render as a link
  if (href) {
    return (
      <a
        href={disabled ? '#' : href}
        className={buttonClass}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled || ariaDisabled}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        <span className={linkClass}>{children}</span>
      </a>
    );
  }

  // Otherwise render as a button
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled || ariaDisabled}
    >
      <span className={linkClass}>{children}</span>
    </button>
  );
};

export default Button;