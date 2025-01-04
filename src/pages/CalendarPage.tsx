import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import { useEffect } from 'react';
import { SketchPicker } from 'react-color';

const CalendarPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('캘린더~');
  }, []);

  return (
    <main>
      CalendarPage
      <SketchPicker />
      <Button
        onClick={() => {
          navigate('/test/10');
        }}>
        넘어가~
      </Button>
    </main>
  );
};

export default CalendarPage;
