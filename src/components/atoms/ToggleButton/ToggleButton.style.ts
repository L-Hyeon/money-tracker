import styled from 'styled-components';

export const ToggleWrapper = styled.div<{ isActive: boolean }>`
  width: 60px;
  min-width: 60px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${props => (props.isActive ? '#bbb' : '#555')};
  display: flex;
  background-color: ${props => (props.isActive ? '#bbb' : '#555')};
`;

export const Notch = styled.div<{ isActive: boolean }>`
  height: 27px;
  width: 27px;
  margin-top: 1px;
  background: ${props => (props.isActive ? '#555' : '#eee')};
  border-radius: 50%;
  transform: translate(${props => (props.isActive ? '31px' : '1px')});
  transition: all 0.15s linear;
`;
