import { BrokerStat } from "@entities/Traid/model/types/types";
import { sumKey } from "@entities/Traid";

export function refactorArray(array: BrokerStat[], date: string): BrokerStat {
  const length = array.length;

  // Инициализируем newArray как объект, а не как массив
  const newArray: BrokerStat = {
    date: date, // Устанавливаем значение для свойства date
    clicks: 0, // Инициализируем остальные свойства с дефолтными значениями
    registrations: 0,
    ftd: 0,
    traders_count: 0,
    payouts: 0,
    deposit: 0,
    worked_bonuses: 0,
    dynamics: 0,
    revenue: 0,
    traders: [], // Пустой массив для traders, если нужно
  };

  // Теперь можно изменять значения свойств объекта
  newArray.clicks = sumKey(array, "clicks");
  newArray.deposit = Number(sumKey(array, "deposit").toFixed(0));
  newArray.dynamics = Number((sumKey(array, "dynamics") / length).toFixed(0));
  newArray.ftd = Number((sumKey(array, "dynamics") / length).toFixed(0));
  newArray.payouts = sumKey(array, "payouts");
  newArray.registrations = sumKey(array, "registrations");
  newArray.revenue = Number(sumKey(array, "revenue").toFixed(2));
  newArray.traders_count = sumKey(array, "traders_count");
  newArray.worked_bonuses = sumKey(array, "worked_bonuses");

  return newArray;
}
