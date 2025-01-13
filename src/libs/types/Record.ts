export type Record = {
  id: number;
  type: number;
  category: number;
  value: string;
  memo: string;
};

export const RECORD_TYPES = ['수입', '지출'];
export const CATEGORIES = [
  ['월급', '상여금', '성과급', '기타 수익'],
  ['저축', '투자', '고정 지출', '식비', '생필품', '교통', '쇼핑', '의료', '기타 지출'],
];
