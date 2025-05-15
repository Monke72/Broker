import { refactorArray, StatistickCart } from "@features/StatistickCart";
import cls from "./StatistickAll.module.scss";
import { useAppSelector } from "@shared/hooks/StoreHooks/StoreHooks";
import { useEffect } from "react";
import { getMatch } from "@shared/utils/getMatch";

const StatistickAll = () => {
  const { data } = useAppSelector((state) => state.traiders);
  const filterByTraiders = useAppSelector(
    (state) => state.filterArray.filterArray
  );
  const filterTraidersByData = useAppSelector(
    (state) => state.filterByDate.filterData
  );

  function getData() {
    // Если оба фильтра пусты — вернуть полный список
    if (!filterByTraiders.length && !filterTraidersByData.length) return data;

    // Если только фильтр по трейдерам — вернуть его
    if (filterByTraiders.length && !filterTraidersByData.length)
      return filterByTraiders;

    // Если только фильтр по дате — вернуть его
    if (!filterByTraiders.length && filterTraidersByData.length)
      return filterTraidersByData;
    // Если есть оба — вернуть пересечение по id (или другому уникальному ключу)
    return filterTraidersByData.filter((item) =>
      filterByTraiders.some((el) => el.id === item.id)
    );
  }
  useEffect(() => {
    getData();
  }, [filterByTraiders, filterTraidersByData]);

  const monthArray = getMatch(data, 2);

  return (
    <div className={cls["all"]}>
      <div className={cls["all__header"]}>
        <ul className={cls["all__list"]}>
          <li className={`${cls["all__item"]} ${cls["all__item-date"]}`}>
            Дата
          </li>
          <li className={cls["all__item"]}>Переходы</li>
          <li className={cls["all__item"]}>Регистрации</li>
          <li className={cls["all__item"]}>FTD</li>
          <li className={cls["all__item"]}>Трейдеры</li>
          <li className={cls["all__item"]}>Депозиты</li>
          <li className={cls["all__item"]}>Выплаты</li>
          <li className={cls["all__item"]}>Отработанные бонусы</li>
          <li className={cls["all__item"]}>Динамика</li>
          <li className={`${cls["all__item"]} ${cls["all__item-profit"]}`}>
            Доход
          </li>
        </ul>

        <div className={cls["all__cart-wrapper"]}>
          {getData().map((el, i) => (
            <StatistickCart key={i} data={el} />
          ))}
        </div>
      </div>

      <div className={cls["all__footer"]}>
        <StatistickCart
          hiddenTraider
          data={refactorArray(monthArray, "Март")}
        />
        <StatistickCart
          hiddenTraider
          data={refactorArray(data, "За все время")}
        />
      </div>
    </div>
  );
};

export default StatistickAll;
