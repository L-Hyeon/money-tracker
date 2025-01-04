import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Flex from '../components/atoms/Layout';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import useCalendar from '../libs/hooks/useCalendar';
import styled from 'styled-components';

const CalendarPage = () => {
  const calendar = useCalendar();
  const navigate = useNavigate();

  const [dateList, setDateList] = useState<number[][]>(calendar.weekCalendarList);

  const decreaseMonth = () => {
    let y = calendar.currentDate.getFullYear(),
      m = calendar.currentDate.getMonth(),
      d = calendar.currentDate.getDate();
    if (m == 1) {
      y -= 1;
      m = 12;
    } else {
      m -= 1;
    }
    calendar.setCurrentDate(new Date(y, m, d));
  };
  const increaseMonth = () => {
    let y = calendar.currentDate.getFullYear(),
      m = calendar.currentDate.getMonth(),
      d = calendar.currentDate.getDate();
    if (m == 12) {
      y += 1;
      m = 1;
    } else {
      m += 1;
    }
    calendar.setCurrentDate(new Date(y, m, d));
  };

  return (
    <main>
      <Flex align="center" gap="2dvw">
        <Button type="transparent" onClick={decreaseMonth}>
          〈
        </Button>
        <Text>
          {calendar.currentDate.getFullYear()}년 {calendar.currentDate.getMonth() + 1}월
        </Text>
        <Button type="transparent" onClick={increaseMonth}>
          〉
        </Button>
      </Flex>
      <div style={{ border: '0.5px solid var(--point-color)' }}>
        <Flex align="center">
          {calendar.DAY_LIST.map(val => {
            return (
              <Flex
                key={`caldendar_day_${val}`}
                style={{
                  boxSizing: 'content-box',
                  border: '0.5px solid var(--main-color)',
                  backgroundColor: 'var(--point-color)',
                  color: 'var(--main-color)',
                }}
                width="12dvw"
                height="4dvh"
                align="center">
                <Text style={{ color: 'var(--main-color)' }}>{val}</Text>
              </Flex>
            );
          })}
        </Flex>
        {dateList.map((item, idx) => (
          <Flex key={`calendar-week_${idx}`}>
            {item.map((day, i) => (
              <CalendarElement key={`calendar_day_${i}`} isActive={day !== -1}>
                <Text style={{ width: '90%', textAlign: 'end', marginTop: '5%' }}>{day !== -1 ? day : ''}</Text>
              </CalendarElement>
            ))}
          </Flex>
        ))}
      </div>
    </main>
  );
};

const CalendarElement = styled.div<{ isActive: boolean }>`
  box-sizing: content-box;
  border: 0.5px solid var(--point-color);
  width: 12dvw;
  height: 10dvh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isActive ? 'transparent' : 'var(--invalid-color)')};
`;

export default CalendarPage;
