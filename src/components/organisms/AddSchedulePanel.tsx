import { useState } from 'react';
import Flex from '../layouts/Layout';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { Schedule } from '../../libs/types/Schedule';
import ToastLayout from '../layouts/ToastLayout';
import PanelLayout from '../layouts/PanelLayout';

const AddSchedulePanel = () => {
  const [schedule, setSchedule] = useState<Schedule>({
    dayoff: false,
    overtime: false,
    appointment: false,
  });
  const [showToast, setShowToast] = useState<boolean>(false);

  const addSchedule = (type: number) => {
    switch (type) {
      case 1:
        setSchedule({
          ...schedule,
          dayoff: !schedule.dayoff,
        });
        break;
      case 2:
        setSchedule({
          ...schedule,
          overtime: !schedule.overtime,
        });
        break;
      case 3:
        setSchedule({
          ...schedule,
          appointment: !schedule.appointment,
        });
        break;
    }
    setShowToast(true);
  };

  return (
    <PanelLayout>
      {showToast && (
        <ToastLayout
          closeToast={() => {
            setShowToast(false);
          }}>
          일정이 변경되었습니다.
        </ToastLayout>
      )}
      <Text width="100%" style={{ textAlign: 'left' }}>
        일정
      </Text>
      <Flex width="100%" align="space-between">
        <Button
          type={schedule.dayoff ? 'bg' : 'transparent'}
          width="25%"
          height="50px"
          onClick={() => {
            addSchedule(1);
          }}>
          휴가
        </Button>
        <Button
          type={schedule.overtime ? 'bg' : 'transparent'}
          width="25%"
          height="50px"
          onClick={() => {
            addSchedule(2);
          }}>
          야근
        </Button>
        <Button
          type={schedule.appointment ? 'bg' : 'transparent'}
          width="25%"
          height="50px"
          onClick={() => {
            addSchedule(3);
          }}>
          약속
        </Button>
      </Flex>
    </PanelLayout>
  );
};

export default AddSchedulePanel;
