import styled from 'styled-components';

export const Txt = styled.div<{ fontSize: number; width: string; height: string }>`
  vertical-align: middle;
  text-align: center;
  font-size: ${props => props.fontSize}rem;
  width: ${props => props.width};
  height: ${props => props.height};
  line-height: ${props => (props.height === 'auto' ? '100%' : props.height)};
`;
