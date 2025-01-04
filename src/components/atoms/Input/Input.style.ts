import styled from 'styled-components';

export const Inp = styled.input<{
  width: string;
  height: string;
  fontSize: number;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 10px;
  font-size: ${props => props.fontSize}rem;
  border: 1px solid var(--point-color);
  border-radius: 10px;
  &:focus {
    outline: 1px solid var(--point-color);
  }
`;
