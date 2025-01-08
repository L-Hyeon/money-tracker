import Flex from '../components/atoms/Layout';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import useCalendar from '../libs/hooks/useCalendar';
import Calendar from '../components/organisms/Calendar';

const CalendarPage = () => {
  const calendar = useCalendar();

  const changeMonth = (dir: boolean) => {
    let y = calendar.currentDate.getFullYear(),
      m = calendar.currentDate.getMonth(),
      d = calendar.currentDate.getDate();
    if (dir) {
      if (m == 12) {
        y += 1;
        m = 1;
      } else {
        m += 1;
      }
    } else {
      if (m == 1) {
        y -= 1;
        m = 12;
      } else {
        m -= 1;
      }
    }
    calendar.setCurrentDate(new Date(y, m, d));
  };

  return (
    <main>
      <Flex align="center" gap="2dvw">
        <Button
          type="transparent"
          onClick={() => {
            changeMonth(false);
          }}>
          〈
        </Button>
        <Text>
          {calendar.currentDate.getFullYear()}년 {calendar.currentDate.getMonth() + 1}월
        </Text>
        <Button
          type="transparent"
          onClick={() => {
            changeMonth(true);
          }}>
          〉
        </Button>
      </Flex>
      <Calendar />
    </main>
  );
};

export default CalendarPage;
