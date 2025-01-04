import styled from 'styled-components';

export const Txt = styled.div<{ fontSize: number }>`
  vertical-align: middle;
  text-align: center;
  font-size: ${props => props.fontSize}rem;
`;
