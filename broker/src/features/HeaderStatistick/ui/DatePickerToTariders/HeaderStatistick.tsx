import HeaderInfo from "@widgets/HeaderInfo/HeaderInfo";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import cls from "./HeaderStatistick.module.scss";
import type { DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";
import strDown from "@shared/assets/icons/strList.svg";
import minMax from "dayjs/plugin/minMax";
import isBetween from "dayjs/plugin/isBetween";
import { setTraidersByDate } from "@features/CartFilter/model/dateFilterSlice";
import StatistickTraiders from "../StatistickTraiders/StatistickTraiders";
import { useQuerySize } from "@shared/lib/device/mediaQuerySize";
import BackToHome from "@features/BackToHome/ui/BackToHome";

dayjs.extend(minMax);
dayjs.extend(isBetween);

interface HeaderStatisickProps {
  openStat?: boolean;
  setOpenStat?: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderStatisick = ({ openStat, setOpenStat }: HeaderStatisickProps) => {
  const [dateStart, setDateStart] = useState<string>("");
  const [dateFinish, setDateFinish] = useState<string>("");
  const isMobile = useQuerySize(570);
  const fullData = useAppSelector((state) => state.traiders.data);
  const thousandWidth = useQuerySize(999);

  const dispatch = useAppDispatch();
  const navSection = useAppSelector((state) => state.navSection.section);

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

  return (
    <>
      <BackToHome />
      <HeaderInfo
        open={openStat}
        title="Статистика"
        childOutside={
          navSection !== "statAll" && <StatistickTraiders className="touch" />
        }
      >
        <div className={cls["stat"]}>
          <div className={cls["stat__calendar"]}>
            <DatePicker
              format="DD.MM.YYYY"
              disabledDate={disableStartDate}
              size={thousandWidth ? "middle" : "large"}
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
              size={thousandWidth ? "middle" : "large"}
              value={dateFinish ? dayjs(dateFinish, "DD.MM.YYYY") : null}
              placeholder={maxDate ? maxDate.format("DD.MM.YYYY") : undefined}
              defaultPickerValue={maxDate ?? undefined}
            />
          </div>
          <StatistickTraiders className="desktop" />

          <button
            className={cls.stat__open}
            onClick={() => setOpenStat((prev) => !prev)}
          >
            {isMobile && (
              <h5
                className={`${cls.mobile__stat} ${openStat ? `${cls.opacity}` : ""}`}
              >
                Подробнее
              </h5>
            )}
            {<img src={strDown} alt="" />}
          </button>
        </div>
      </HeaderInfo>
    </>
  );
};

export default HeaderStatisick;
