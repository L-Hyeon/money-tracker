import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/atoms/Button';
import ModalLayout from '../components/layouts/ModalLayout';

const TestPage = () => {
  const navigate = useNavigate();
  const { pageKey } = useParams();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log('Test');
  }, []);

  return (
    <main>
      {pageKey}
      <Button
        onClick={() => {
          setIsActive(true);
        }}>
        돌아가~
      </Button>
      {isActive && (
        <ModalLayout
          closeModal={() => {
            setIsActive(false);
          }}>
          Modal
        </ModalLayout>
      )}
    </main>
  );
};

export default TestPage;
