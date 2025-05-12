import HeaderInfo from "@shared/ui/HeaderInfo/HeaderInfo";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import cls from "./HeaderStatisick.module.scss";
import type { DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import { dateCompare } from "@shared/utils/dateCompare";

const HeaderStatisick = () => {
  const [dateStart, setDateStart] = useState<string | string[]>("");
  const [dateFinish, setDateFinish] = useState<string | string[]>("");
  const [dateError, setDateError] = useState<boolean>(false);
  const disabledDate = (current) => {
    // Запретить все даты после сегодняшнего дня
    return current && current > dayjs().endOf("day");
  };
  const onChangeStart: DatePickerProps["onChange"] = (date, dateString) => {
    setDateStart(dateString);
  };
  const onChangeFinish: DatePickerProps["onChange"] = (date, dateString) => {
    setDateFinish(dateString);
  };
  useEffect(() => {
    if (dateStart === "" || dateFinish === "") return;
    if (typeof dateStart === "string" && typeof dateFinish === "string") {
      const isLater = dateCompare({ date1: dateStart, date2: dateFinish });
      setDateError(!isLater); // Пример: ошибка, если дата начала не раньше даты окончания
    }
  }, [dateFinish, dateStart]);
  console.log(dateError);

  return (
    <HeaderInfo title="Статистика">
      <div className={cls["stat"]}>
        <div className={cls["stat__calendar"]}>
          <DatePicker
            disabledDate={disabledDate}
            size="large"
            className={cls["stat__picker"]}
            onChange={onChangeStart}
          />
          <span> - </span>
          <DatePicker
            onChange={onChangeFinish}
            disabledDate={disabledDate}
            className={cls["stat__picker"]}
            size="large"
          />
          {dateError && (
            <span className={cls["stat__picker-error"]}>
              Введите корректный интервал
            </span>
          )}
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
