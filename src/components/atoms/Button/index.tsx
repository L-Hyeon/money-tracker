import React from 'react';
import styles from './Button.module.css';
import { StyledButton } from './Button.style';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  style?: object;
  type?: 'bg' | 'transparent';
  width?: string;
  height?: string;
  fontSize?: number;
};

const Button = ({ onClick, children, style, type = 'bg', width = 'auto', height = 'auto', fontSize = 1 }: Props) => {
  return (
    <StyledButton
      className={type == 'bg' ? styles.bg : styles.transparent}
      style={style}
      onClick={onClick}
      width={width}
      height={height}
      fontSize={fontSize}>
      {children}
    </StyledButton>
  );
};

export default Button;
