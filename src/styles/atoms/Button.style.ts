import styled, { css } from 'styled-components';

const StyleCursor = styled.button`
  cursor: ${(props: any) => (props.disabled ? 'auto' : 'pointer')};
  outline: none;
`;

const ButtonColors = (disabled = false, selected = false) => {
  if (disabled) {
    return {
      border: '#bfbfbf',
      color: '#bfbfbf',
      bg: '#fff',
    };
  } else if (!disabled && selected) {
    return {
      border: '#003568',
      color: '#fff',
      bg: '#003568',
    };
  } else {
    return {
      border: '#595959',
      color: '#595959',
      bg: '#fff',
    };
  }
};

const setButtonColors = css`
  ${({ disabled, selected }: any) => {
    const buttonColors = ButtonColors(disabled, selected);

    return css`
      color: ${buttonColors.color};
      border: 1px solid ${buttonColors.border};
      background-color: ${buttonColors.bg};
    `;
  }}
`;

export const StyleButton = styled(StyleCursor)<{
  disabled?: boolean;
  selected?: boolean;
}>`
  padding: 3px 6px;
  border: solid 1px lightgray;
  border-radius: 2px;

  ${setButtonColors};

  &:hover {
    background-color: ${(props: any) =>
      (!props.disabled && !props.selected) || !props.selected
        ? 'rgba(0, 0, 0, 0.03)'
        : null};
  }
`;
