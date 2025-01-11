import React from 'react';
import { Txt } from './Text.style';

type Props = {
  style?: object;
  fontSize?: number;
  width?: string;
  height?: string;
  children: React.ReactNode;
};

const Text = ({ children, style, fontSize = 1, width = 'auto', height = 'auto' }: Props) => {
  return (
    <Txt style={style} fontSize={fontSize} width={width} height={height}>
      {children}
    </Txt>
  );
};

export default Text;
