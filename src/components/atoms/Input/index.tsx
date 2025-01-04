import React from 'react';
import { Inp } from './Input.style';

type Props = {
  name: string;
  value: any;
  onChange: any;
  type?: 'text' | 'password';
  width?: string;
  height?: string;
  placeholder?: string;
  fontSize?: number;
};

const Input = ({
  name,
  value,
  onChange,
  type = 'text',
  width = 'auto',
  height = 'auto',
  placeholder = '',
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
