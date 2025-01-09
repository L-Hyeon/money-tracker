import Flex from '../components/layouts/Layout';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import Calendar from '../components/organisms/Calendar';
import { dataStore } from '../libs/store/DataStore';

const CalendarPage = () => {
  const { selDate, setSelDate } = dataStore();

  const changeMonth = (dir: boolean) => {
    let y = selDate.getFullYear(),
      m = selDate.getMonth();
    console.log(y, m);
    if (dir) {
      if (m == 11) {
        y += 1;
        m = 0;
      } else {
        m += 1;
      }
    } else {
      if (m == 0) {
        y -= 1;
        m = 11;
      } else {
        m -= 1;
      }
    }
    console.log(new Date(y, m, 1));
    setSelDate(new Date(y, m, 1));
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
          {selDate.getFullYear()}년 {selDate.getMonth() + 1}월
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
