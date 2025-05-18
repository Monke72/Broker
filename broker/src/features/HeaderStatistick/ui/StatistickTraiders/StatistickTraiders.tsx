import { sumKey } from "@entities/Traid";
import { useAppSelector } from "@shared/hooks/StoreHooks/StoreHooks";
import cls from "./StatistickTraiders.module.scss";

interface IStat {
  className?: string;
}
const StatistickTraiders = ({ className }: IStat) => {
  const fullData = useAppSelector((state) => state.traiders.data);
  const filteredData = useAppSelector((state) => state.filterByDate.filterData);
  const date = filteredData.length ? filteredData : fullData;
  const revenue = sumKey(date, "revenue");
  return (
    <ul className={`${cls["stat__list"]} ${cls[`${className}`]}`}>
      <li className={cls["stat__item"]}>
        <h6 className={cls["stat__info"]}>Потенциальный доход</h6>
        <h4 className={`${cls["stat__title"]} ${cls["active"]}`}>
          +${(revenue * 4).toFixed(0)}
        </h4>
      </li>
      <li className={cls["stat__item"]}>
        <h6 className={cls["stat__info"]}>Переходы за все время</h6>
        <h4 className={cls["stat__title"]}>{sumKey(date, "clicks")}</h4>
      </li>
      <li className={cls["stat__item"]}>
        <h6 className={cls["stat__info"]}>Регистрации за все время</h6>
        <h4 className={cls["stat__title"]}>{sumKey(date, "registrations")}</h4>
      </li>
      <li className={cls["stat__item"]}>
        <h6 className={cls["stat__info"]}>Доход за все время</h6>
        <h4 className={cls["stat__title"]}>$3,441</h4>
      </li>
      <li className={cls["stat__item"]}>
        <h6 className={cls["stat__info"]}>Доход за неделю</h6>
        <h4 className={cls["stat__title"]}>${revenue.toFixed(2)}</h4>
      </li>
    </ul>
  );
};

export default StatistickTraiders;
