import React from 'react';
import styled from 'styled-components';
import { statusStore } from '../../../libs/store/StatusStore';

type Props = {
  children: React.ReactNode;
  width?: string;
  height?: string;
};

const ModalLayout = ({ children, width = 'auto', height = 'auto' }: Props) => {
  const { isModalActive } = statusStore();

  return (
    <Wrapper>
      <ModalContent isModalActive={isModalActive} width={width} height={height}>
        {children}
      </ModalContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #3b3b3ba0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div<{ isModalActive: boolean; width: string; height: string }>`
  opacity: ${props => (props.isModalActive ? 0 : 1)};
  transition: opacity 150ms linear;
  background-color: var(--main-color);
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 10px;
`;

export default ModalLayout;
