import React from 'react';

const DEFAULT_TRASH_VALUE = -1;
const DAY_OF_WEEK = 7;

const useCalendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  let prevDayList = Array.from({
    length: Math.max(0, currentDate.getDay() - 1),
  }).map(() => DEFAULT_TRASH_VALUE);
  let currentDayList = Array.from({ length: daysInMonth }).map((_, i) => i + 1);
  let nextDayList = Array.from({
    length: 7 - ((prevDayList.length + currentDayList.length) % 7),
  }).map(() => DEFAULT_TRASH_VALUE);

  let currentCalendarList = prevDayList.concat(currentDayList, nextDayList);
  let weekCalendarList = currentCalendarList.reduce((acc: number[][], cur, idx) => {
    let chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  return {
    DAY_LIST: ['일', '월', '화', '수', '목', '금', '토'],
    weekCalendarList: weekCalendarList,
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
  };
};
export default useCalendar;
