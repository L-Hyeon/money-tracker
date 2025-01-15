import { Holiday } from '../types/Calendar';

export const getHolidays = async (year: number, month: number) => {
  let holidays: Holiday[] = [];
  await fetch(
    `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${
      import.meta.env.VITE_OPEN_DATA_API_KEY
    }&solYear=${year}&solMonth=${('00' + month.toString()).slice(-2)}`,
    {
      method: 'GET',
    }
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`Fetch Error Status: ${response.status}`);
      }
      console.log(response);
      return response.text();
    })
    .then(data => {
      const parser = new DOMParser(); // DOMParser 생성
      const xmlDoc = parser.parseFromString(data, 'text/xml'); // XML 데이터 파싱

      // XML 데이터에서 원하는 정보 추출
      // console.log('XML 데이터:', xmlDoc);

      // 예: 특정 태그의 값을 가져오기
      const items = xmlDoc.getElementsByTagName('item');
      for (let i = 0; i < items.length; i++) {
        const dateName = items[i].getElementsByTagName('dateName')[0]?.textContent;
        const locdate = items[i].getElementsByTagName('locdate')[0]?.textContent;
        console.log(`휴일 이름: ${dateName}, 날짜: ${locdate}`);
        holidays.push({
          year: locdate?.slice(0, 4),
          month: locdate?.slice(4, 6),
          date: locdate?.slice(6, 8),
          info: dateName,
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
  return holidays;
};
