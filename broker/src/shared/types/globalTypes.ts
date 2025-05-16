export type SourceTraffic = "Друзья" | "Маркетинг" | "";
export interface IUserState {
  mail: string;
  password: string;
  entry: boolean;
  name?: string;
  tel?: string;
  tg?: string;
  traffic?: SourceTraffic;
}
