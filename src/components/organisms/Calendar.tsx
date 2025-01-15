import { useEffect, useState } from 'react';
import Text from '../atoms/Text';
import Flex from '../layouts/Layout';
import { dataStore } from '../../libs/store/DataStore';
import { DAY_LIST, makeCalendarArray } from '../../libs/functions/Calendar';
import { useNavigate } from 'react-router-dom';
import { CaldendarDate } from '../../libs/types/Calendar';
import CalendarElement from '../molecules/CalendarElement';

const Calendar = () => {
  const navigate = useNavigate();
  const { today, selDate } = dataStore();
  const [dateList, setDateList] = useState<CaldendarDate[][]>([]);

  useEffect(() => {
    makeCalendarArray(selDate).then(res => {
      setDateList(res);
    });
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
        {dateList.map((weekElement, idx) => (
          <Flex key={`calendar-week_${idx}`}>
            {weekElement.map((dateElement, i) => (
              <CalendarElement
                key={`calendar_day_${i}`}
                dateElement={dateElement}
                navigate={() => {
                  if (dateElement.date != -1) {
                    moveToDetailPage(dateElement.date);
                  }
                }}
                isToday={isToday(dateElement.date)}
                color={
                  i == 0 || dateElement.isHoliday
                    ? 'var(--red-color)'
                    : isToday(dateElement.date)
                    ? 'var(--main-color)'
                    : 'var(--point-color)'
                }
              />
            ))}
          </Flex>
        ))}
      </section>
    </article>
  );
};

export default Calendar;
