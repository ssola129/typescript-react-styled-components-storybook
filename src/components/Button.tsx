import React from 'react';
import { StyleButton } from '../styles/atoms/Button.style';

interface ButtonProps {
  /** ReactNode */
  children: React.ReactNode;
  /** default/seleted/disabled  */
  disabled?: boolean;
  selected?: boolean;
  onClick?: void;
}

function Button({ disabled, selected, onClick, children }: ButtonProps) {
  return (
    <StyleButton
      type={'button'}
      disabled={disabled}
      selected={selected}
      onClick={() => onClick}
    >
      {children}
    </StyleButton>
  );
}

Button.defaultProps = {
  disabled: false,
  selected: false,
};

export default Button;
