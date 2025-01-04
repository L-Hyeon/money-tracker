import React from 'react';
import { Txt } from './Text.style';

type Props = {
  style?: object;
  fontSize?: number;
  children: React.ReactNode;
};

const Text = ({ children, style, fontSize = 1 }: Props) => {
  return (
    <Txt style={style} fontSize={fontSize}>
      {children}
    </Txt>
  );
};

export default Text;
