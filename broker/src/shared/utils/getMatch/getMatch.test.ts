import { getMatch } from "./getMatch";
import { BrokerStat } from "@entities/Traid/model/types/types";

describe("getMatch", () => {
  const data: Partial<BrokerStat>[] = [
    { date: "01.06.2025" },
    { date: "15.06.2025" },
    { date: "30.07.2025" },
    { date: "01.01.2025" },
  ];

  test("фильтрация по июню (месяц 5)", () => {
    const result = getMatch(data as BrokerStat[], 5); //собрали в отдельный массив
    expect(result).toHaveLength(2); //проверили длинну
    expect(result[0].date).toBe("01.06.2025");
    expect(result[1].date).toBe("15.06.2025");
  });

  test("фильтрация по январю (месяц 0)", () => {
    const result = getMatch(data as BrokerStat[], 0);
    expect(result).toHaveLength(1);
    expect(result[0].date).toBe("01.01.2025");
  });

  test("нет совпадений", () => {
    const result = getMatch(data as BrokerStat[], 11);
    expect(result).toHaveLength(0);
  });
});
