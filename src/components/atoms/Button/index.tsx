import React from 'react';
import styles from './Button.module.css';
import { StyledButton } from './Button.style';

type Props = {
  style?: object;
  width?: string;
  height?: string;
  onClick: () => void;
  children: React.ReactNode;
  fontSize?: number;
};

const Button = ({ style, width = 'auto', height = 'auto', onClick, children, fontSize = 1 }: Props) => {
  return (
    <StyledButton
      className={styles.btn}
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
