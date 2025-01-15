import { useCallback, useState } from 'react';
import ModalLayout from '../../components/layouts/ModalLayout';

const useModal = ({ useBlur = true } = {}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    // Modal: isModalOpen ? (children) => {
    //   return <ModalLayout onClose={useBlur ? closeModal : ()=>void} >{ children } </ModalLayout>
    // } : () => null,
    openModal,
    closeModal,
    isModalOpen,
  };
};

export default useModal;
