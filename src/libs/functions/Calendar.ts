const DEFAULT_TRASH_VALUE = -1;
const DAY_OF_WEEK = 7;

export const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

export const makeCalendarArray = (currentDate: Date) => {
  let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  let prevList = Array.from({
    length: Math.max(0, new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()),
  }).map(() => DEFAULT_TRASH_VALUE);
  let midList = Array.from({ length: daysInMonth }).map((_, i) => i + 1);
  let nextList = Array.from({
    length: 7 - ((prevList.length + midList.length) % 7),
  }).map(() => DEFAULT_TRASH_VALUE);
  let calendarList = prevList.concat(midList, nextList);

  return calendarList.reduce((acc: number[][], cur, idx) => {
    let chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);
};
