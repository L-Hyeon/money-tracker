export type CaldendarDate = {
  date: number;
  isHoliday: boolean;
  info: string | null;
};

export type Holiday = {
  year: string | undefined;
  month: string | undefined;
  date: string | undefined;
  info: string | null;
};
