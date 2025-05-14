import { refactorArray, StatistickCart } from "@features/StatistickCart";
import cls from "./StatistickAll.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";
import { useEffect } from "react";
import { fetchData } from "@entities/Traid/index";
import { getMatch } from "@shared/utils/getMatch";

const StatistickAll = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const { data, isLoading } = useAppSelector((state) => state.traiders);
  const filterByTraiders = useAppSelector(
    (state) => state.filterArray.filterArray
  );
  console.log(filterByTraiders);
  const renderArray = filterByTraiders.length > 0 ? filterByTraiders : data;

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
          {renderArray.map((el, i) => (
            <StatistickCart key={i} data={el} />
          ))}
        </div>
      </div>

      <div className={cls["all__footer"]}>
        <StatistickCart data={refactorArray(monthArray, "Март")} />
        <StatistickCart data={refactorArray(data, "За все время")} />
      </div>
    </div>
  );
};

export default StatistickAll;
