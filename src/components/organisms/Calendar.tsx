import { useEffect, useState } from 'react';
import Text from '../atoms/Text';
import Flex from '../layouts/Layout';
import styled from 'styled-components';
import { dataStore } from '../../libs/store/DataStore';
import { DAY_LIST, makeCalendarArray } from '../../libs/functions/Calendar';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const navigate = useNavigate();
  const { today, selDate } = dataStore();
  const [dateList, setDateList] = useState<number[][]>([]);

  useEffect(() => {
    setDateList(makeCalendarArray(selDate));
  }, [selDate]);

  const moveToDetailPage = (date: number) => {
    navigate(`/detail/${selDate.getFullYear()}/${selDate.getMonth() + 1}/${date}`);
  };

  const isToday = (date: number) => {
    return (
      today.getFullYear() === selDate.getFullYear() && today.getMonth() == selDate.getMonth() && today.getDate() == date
    );
  };

  return (
    <article style={{ border: '0.5px solid var(--point-color)' }}>
      <Flex align="center">
        {DAY_LIST.map(val => {
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
      <section key={`calendar_${selDate.getFullYear()}_${selDate.getMonth()}_${selDate.getDate()}`}>
        {dateList.map((item, idx) => (
          <Flex key={`calendar-week_${idx}`}>
            {item.map((day, i) => (
              <CalendarElement
                key={`calendar_day_${i}`}
                onClick={() => {
                  if (day != -1) {
                    moveToDetailPage(day);
                  }
                }}
                isActive={day !== -1}
                isToday={isToday(day)}>
                <Text
                  width="90%"
                  style={{
                    textAlign: 'end',
                    marginTop: '5%',
                    color: i == 0 ? 'var(--red-color)' : isToday(day) ? 'var(--main-color)' : 'var(--point-color)',
                  }}>
                  {day !== -1 ? day : ''}
                </Text>
              </CalendarElement>
            ))}
          </Flex>
        ))}
      </section>
    </article>
  );
};

const CalendarElement = styled.button<{ isActive: boolean; isToday: boolean }>`
  cursor: ${props => (props.isActive ? 'pointer' : 'none')};
  box-sizing: content-box;
  padding: 0;
  border: 0.5px solid var(--point-color);
  width: 12dvw;
  height: 10dvh;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.isActive ? (props.isToday ? 'var(--point-color)' : 'transparent') : 'var(--invalid-color)'};
`;

export default Calendar;
