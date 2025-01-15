import React, { BaseSyntheticEvent } from 'react';
import styled from 'styled-components';
import ModalPortal from '../../../libs/portals/ModalPortal';

type Props = {
  closeModal: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
};

const ModalLayout = ({ closeModal, children, width = '50dvw', height = '30dvh' }: Props) => {
  return (
    <ModalPortal>
      <Wrapper onClick={closeModal}>
        <ModalContent
          width={width}
          height={height}
          onClick={(e: BaseSyntheticEvent) => {
            e.stopPropagation();
          }}>
          {children}
        </ModalContent>
      </Wrapper>
    </ModalPortal>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: #3b3b3ba0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div<{ width: string; height: string }>`
  background-color: var(--main-color);
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 10px;
  animation: _fadeIn 300ms;
  border-radius: 30px;
`;

export default ModalLayout;
