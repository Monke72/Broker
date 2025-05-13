import { BrokerStat } from "../types/types";

export function sumKey(data: BrokerStat[], el: keyof BrokerStat): number {
  return data.reduce((acc, traid) => (acc += Number(traid[el])), 0);
}
