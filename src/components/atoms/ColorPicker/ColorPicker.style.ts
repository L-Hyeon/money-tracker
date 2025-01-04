import styled from 'styled-components';

export const Picker = styled.div<{ color: string }>`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => props.color};
`;

export const PickerWrapper = styled.div<{ isActive: boolean }>`
  display: ${props => (props.isActive ? 'block' : 'none')};
  position: absolute;
  top: 30px;
  left: -200px;
  /* opacity: ${props => (props.isActive ? '0' : '1')}; */
  transition: all 0.15s linear;
`;
