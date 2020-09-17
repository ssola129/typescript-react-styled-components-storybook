import React from 'react';
import { StyleButton } from 'styles/Atoms/Button.style';

interface ButtonProps {
  className?: string;
  type: string | any;
  /** ReactNode */
  children: React.ReactNode;
  /** default/seleted/disabled  */
  disabled?: boolean;
  selected?: boolean;
  onClick?: void;
}

function Button({
  className,
  type,
  disabled,
  selected,
  onClick,
  children,
}: ButtonProps) {
  return (
    <StyleButton
      className={className}
      type={type}
      disabled={disabled}
      selected={selected}
      onClick={() => onClick}
    >
      {children}
    </StyleButton>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  selected: false,
};

export default Button;
