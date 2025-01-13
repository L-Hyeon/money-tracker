import { BaseSyntheticEvent } from 'react';
import { Inp } from './Input.style';

type Props = {
  name: string;
  value: any;
  onChange: (e: BaseSyntheticEvent) => void;
  type?: 'text' | 'password' | 'number';
  align?: 'left' | 'right';
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
  align = 'left',
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
      align={align}
      width={width}
      height={height}
      fontSize={fontSize}
    />
  );
};

export default Input;
