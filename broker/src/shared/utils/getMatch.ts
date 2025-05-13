import { BrokerStat } from "@entities/Traid/model/types/types";
export function getMatch(dates: BrokerStat[], monthToUse: number) {
  return dates.filter((el) => {
    const [day, month, year] = el.date.split(".");
    const formattedDate = `${year}-${month}-${day}`;
    const date = new Date(formattedDate);
    return date.getMonth() === monthToUse; //
  });
}
