import HeaderInfo from "@shared/ui/HeaderInfo/HeaderInfo";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import cls from "./HeaderStatisick.module.scss";

const HeaderStatisick = () => {
  const disabledDate = (current) => {
    // Запретить все даты после сегодняшнего дня
    return current && current > dayjs().endOf("day");
  };
  return (
    <HeaderInfo title="Статистика">
      <div className={cls["stat"]}>
        <div className={cls["stat__calendar"]}>
          <DatePicker size="large" className={cls["stat__picker"]} />
          <span> - </span>
          <DatePicker
            disabledDate={disabledDate}
            className={cls["stat__picker"]}
            size="large"
          />
        </div>
        <ul className={cls["stat__list"]}>
          <li className={cls["stat__item"]}>
            <h6 className={cls["stat__info"]}>Потенциальный доход</h6>
            <h4 className={`${cls["stat__title"]} ${cls["active"]}`}>+$315</h4>
          </li>
          <li className={cls["stat__item"]}>
            <h6 className={cls["stat__info"]}>Переходы за все время</h6>
            <h4 className={cls["stat__title"]}>325</h4>
          </li>
          <li className={cls["stat__item"]}>
            <h6 className={cls["stat__info"]}>Регистрации за все время</h6>
            <h4 className={cls["stat__title"]}>84</h4>
          </li>
          <li className={cls["stat__item"]}>
            <h6 className={cls["stat__info"]}>Доход за все время</h6>
            <h4 className={cls["stat__title"]}>$3,441</h4>
          </li>
          <li className={cls["stat__item"]}>
            <h6 className={cls["stat__info"]}>Доход за неделю</h6>
            <h4 className={cls["stat__title"]}>$441,88</h4>
          </li>
        </ul>
      </div>
    </HeaderInfo>
  );
};

export default HeaderStatisick;
