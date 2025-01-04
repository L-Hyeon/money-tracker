import React from 'react';
import { Inp } from './Input.style';

type Props = {
  type?: 'text' | 'password';
  name: string;
  width?: string;
  height?: string;
  placeholder?: string;
  value: any;
  onChange: any;
  fontSize?: number;
};

const Input = ({
  type = 'text',
  name,
  width = 'auto',
  height = 'auto',
  placeholder = '',
  value,
  onChange,
  fontSize = 1,
}: Props) => {
  return (
    <Inp
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      fontSize={fontSize}
    />
  );
};

export default Input;
