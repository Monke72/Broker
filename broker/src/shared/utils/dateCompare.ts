interface IDateCompare {
  date1: string;
  date2: string;
}
export function dateCompare({ date1, date2 }: IDateCompare): boolean {
  if (date1 === "" || date2 === "") return;
  return new Date(date1) < new Date(date2);
}
