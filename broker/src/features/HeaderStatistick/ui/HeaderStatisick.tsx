import HeaderInfo from "@widgets/HeaderInfo/HeaderInfo";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import cls from "./HeaderStatisick.module.scss";
import type { DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";
import { sumKey } from "@entities/Traid";
import minMax from "dayjs/plugin/minMax";
import isBetween from "dayjs/plugin/isBetween";
import { setTraidersByDate } from "@features/CartFilter/model/dateFilterSlice";

dayjs.extend(minMax);
dayjs.extend(isBetween);

const HeaderStatisick = () => {
  const [dateStart, setDateStart] = useState<string>("");
  const [dateFinish, setDateFinish] = useState<string>("");

  const fullData = useAppSelector((state) => state.traiders.data);
  const filteredData = useAppSelector((state) => state.filterByDate.filterData);
  const date = filteredData.length ? filteredData : fullData;

  const dispatch = useAppDispatch();

  // Обработка выбора даты
  const onChangeStart: DatePickerProps["onChange"] = (_, dateString) => {
    setDateStart(dateString as string);
  };
  const onChangeFinish: DatePickerProps["onChange"] = (_, dateString) => {
    setDateFinish(dateString as string);
  };

  const parsedDates = fullData.map((item) => dayjs(item.date, "DD.MM.YYYY"));

  const minDate = parsedDates.length ? dayjs.min(parsedDates) : null;
  const maxDate = parsedDates.length ? dayjs.max(parsedDates) : null;

  const disableStartDate = (current: dayjs.Dayjs) => {
    const finish = dateFinish ? dayjs(dateFinish, "DD.MM.YYYY") : maxDate;
    return current < minDate.startOf("day") || current > finish.endOf("day");
  };
  const disableEndDate = (current: dayjs.Dayjs) => {
    const start = dateStart ? dayjs(dateStart, "DD.MM.YYYY") : minDate;
    return current < start.startOf("day") || current > maxDate.endOf("day");
  };

  useEffect(() => {
    if (!dateStart && !dateFinish) {
      dispatch(setTraidersByDate([])); // сброс фильтра
      return;
    }

    if (!dateStart || !dateFinish) return;

    const start = dayjs(dateStart, "DD.MM.YYYY").startOf("day");
    const end = dayjs(dateFinish, "DD.MM.YYYY").endOf("day");

    const filtered = fullData.filter((item) => {
      const itemDate = dayjs(item.date, "DD.MM.YYYY");
      return itemDate.isBetween(start, end, null, "[]");
    });

    dispatch(setTraidersByDate(filtered));
  }, [dateStart, dateFinish, fullData, dispatch]);

  const revenue = sumKey(date, "revenue");

  return (
    <HeaderInfo title="Статистика" stat>
      <div className={cls["stat"]}>
        <div className={cls["stat__calendar"]}>
          <DatePicker
            format="DD.MM.YYYY"
            disabledDate={disableStartDate}
            size="large"
            className={cls["stat__picker"]}
            onChange={onChangeStart}
            value={dateStart ? dayjs(dateStart, "DD.MM.YYYY") : null}
            placeholder={minDate ? minDate.format("DD.MM.YYYY") : undefined}
            defaultPickerValue={minDate ?? undefined}
          />
          <span> - </span>
          <DatePicker
            format="DD.MM.YYYY"
            disabledDate={disableEndDate}
            onChange={onChangeFinish}
            className={cls["stat__picker"]}
            size="large"
            value={dateFinish ? dayjs(dateFinish, "DD.MM.YYYY") : null}
            placeholder={maxDate ? maxDate.format("DD.MM.YYYY") : undefined}
            defaultPickerValue={maxDate ?? undefined}
          />
        </div>

        <ul className={cls["stat__list"]}>
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
            <h4 className={cls["stat__title"]}>
              {sumKey(date, "registrations")}
            </h4>
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
      </div>
    </HeaderInfo>
  );
};

export default HeaderStatisick;
