import Flex from '../components/layouts/Layout';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import Calendar from '../components/organisms/Calendar';
import { dataStore } from '../libs/store/DataStore';

import Undo from '../assets/icons/undo.svg?react';

const CalendarPage = () => {
  const { today, selDate, setSelDate } = dataStore();

  const changeMonth = (dir: boolean) => {
    let y = selDate.getFullYear(),
      m = selDate.getMonth();
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
    setSelDate(new Date(y, m, 1));
  };

  const goToToday = () => {
    setSelDate(today);
  };

  return (
    <main>
      <Flex width="85%" align="center">
        <Flex gap="2dvw">
          <Button
            width="50px"
            height="50px"
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
            width="50px"
            height="50px"
            type="transparent"
            onClick={() => {
              changeMonth(true);
            }}>
            〉
          </Button>
        </Flex>
        <Flex style={{ position: 'absolute', right: '7.5%' }} align="flex-end">
          <Button onClick={goToToday} width="40px" height="40px" fontSize={1.5}>
            ↺
          </Button>
        </Flex>
      </Flex>
      <Flex direction="column" gap="10px">
        <Calendar />
      </Flex>
    </main>
  );
};

export default CalendarPage;
