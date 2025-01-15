import { getHolidays } from '../apis/GetHoliday';
import { CaldendarDate } from '../types/Calendar';

const DEFAULT_TRASH_VALUE = -1;
const DAY_OF_WEEK = 7;

export const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

export const makeCalendarArray = async (currentDate: Date) => {
  let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  let holidaysInMonth = await getHolidays(currentDate.getFullYear(), currentDate.getMonth() + 1);

  let prevList: CaldendarDate[] = Array.from({
    length: Math.max(0, new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()),
  }).map(() => {
    return {
      date: DEFAULT_TRASH_VALUE,
      isHoliday: false,
      info: '',
    };
  });
  let midList: CaldendarDate[] = Array.from({ length: daysInMonth }).map((_, i) => {
    return {
      date: i + 1,
      isHoliday: false,
      info: '',
    };
  });
  holidaysInMonth.map(e => {
    midList[Number(e.date) - 1].isHoliday = true;
    midList[Number(e.date) - 1].info = e.info ?? '';
  });
  let nextList: CaldendarDate[] = Array.from({
    length: 7 - ((prevList.length + midList.length) % 7),
  }).map(() => {
    return {
      date: DEFAULT_TRASH_VALUE,
      isHoliday: false,
      info: '',
    };
  });
  let calendarList = prevList.concat(midList, nextList);

  return calendarList.reduce((acc: CaldendarDate[][], cur, idx) => {
    let chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);
};
