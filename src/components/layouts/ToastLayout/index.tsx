import { useEffect } from 'react';
import ToastPortal from '../../../libs/portals/ToastPortal';
import styled from 'styled-components';

type Props = {
  children: any;
  closeToast: () => void;
};

function ToastLayout({ children, closeToast }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ToastPortal>
      <Wrapper>{children}</Wrapper>
    </ToastPortal>
  );
}

const Wrapper = styled.div`
  background-color: var(--main-color);
  padding: 20px;
  box-shadow: 5px 5px 5px var(--shadow-color);
  color: var(--red-color);
  border: 1px solid var(--red-color);
  border-radius: 10px;
  animation: _fadeIn 300ms;
  position: absolute;
  left: 5dvw;
  bottom: calc(70px + 5dvw);
`;

export default ToastLayout;
