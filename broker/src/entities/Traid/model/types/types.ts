export interface IInitialState {
  data: BrokerStat[];
  isLoading: boolean;
  error: null | string;
}
export interface Trader {
  id: string;
}

export interface BrokerStat {
  date: string;
  clicks: number;
  registrations: number;
  ftd: number;
  traders_count: number;
  payouts: number;
  deposit: number;
  worked_bonuses: number;
  dynamics: number;
  revenue: number;
  traders: Trader[];
}

export type BrokerStatsArray = BrokerStat[];
