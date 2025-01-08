import { useEffect, useState } from 'react';
import useCalendar from '../../libs/hooks/useCalendar';
import Text from '../atoms/Text';
import Flex from '../atoms/Layout';
import styled from 'styled-components';

const Calendar = () => {
  const calendar = useCalendar();
  const [dateList, setDateList] = useState<number[][]>(calendar.weekCalendarList);

  useEffect(() => {
    setDateList(calendar.weekCalendarList);
  }, [calendar.currentDate]);

  return (
    <section style={{ border: '0.5px solid var(--point-color)' }}>
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
    </section>
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
  animation: fade-in;
`;

export default Calendar;
