import { SourceTraffic } from "@shared/types/globalTypes";

export interface IFormProfile {
  mail: string;
  name: string;
  password: string;
  tel: string;
  tg: string;
  source: SourceTraffic;
}
