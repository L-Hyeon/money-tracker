import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/atoms/Button';

const TestPage = () => {
  const navigate = useNavigate();
  const { pageKey } = useParams();

  useEffect(() => {
    console.log('Test');
  }, []);

  return (
    <main>
      {pageKey}
      <Button
        onClick={() => {
          navigate('/');
        }}>
        돌아가~
      </Button>
    </main>
  );
};

export default TestPage;
