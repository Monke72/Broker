import searchIcon from "@shared/assets/icons/searchIcon.svg";
import React from "react";
import cls from "./Header.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";

import { notification } from "antd";

import { sumKey } from "@entities/Traid";
import { useState } from "react";
import { setArray } from "@features/CartFilter/model/inputFilterslice";
import ManagerInfo from "@shared/ui/ManagerInfo/ManagerInfo";

const Header = () => {
  const [api, contextHolder] = notification.useNotification();
  const [searchValue, setSearchValue] = useState<string>("");
  const data = useAppSelector((state) => state.traiders.data);
  const dispatch = useAppDispatch();
  const dataFilterByData = useAppSelector(
    (state) => state.filterByDate.filterData
  );
  console.log(dataFilterByData);

  //события по инпуту
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      formToFilterHandler();
    }
  };
  const formToFilterHandler = () => {
    if (!searchValue.length) {
      dispatch(setArray(data));
      api.info({
        message: "Введите значение для поиска",
        placement: "topLeft",
      });
      return;
    }

    const baseArray = dataFilterByData.length ? dataFilterByData : data;

    const result = baseArray.filter((traid) =>
      traid.traders.some((trader) => trader.id.includes(searchValue))
    );

    if (!result.length) {
      dispatch(setArray(data));
      api.info({
        message: "Ничего не найдено",
        placement: "topLeft",
      });
      return;
    }

    dispatch(setArray(result));
  };

  const date = useAppSelector((state) => state.traiders.data);
  return (
    <header className={cls["header"]}>
      {contextHolder}
      <div className={cls["header__top"]}>
        <ManagerInfo className="header" />
        <div className={cls["header__top-info"]}>
          <div className={cls["header__top-info__search"]}>
            <input
              value={searchValue}
              type="text"
              className={cls["header__input"]}
              placeholder="Поиск по ID"
              onChange={(e) => handlerInput(e)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={cls["header__search-button"]}
              onClick={formToFilterHandler}
            >
              <img src={searchIcon} alt="search" />
            </button>
          </div>
          <div className={cls["header__top-info__salary"]}>
            <div className={cls["header__top-info__salary-time"]}>
              Заработок за неделю
            </div>
            <h4 className={cls["header__top-info__salary-quantity"]}>
              {sumKey(date, "revenue").toFixed(0)}$
            </h4>
          </div>
        </div>
        <div className={cls["header__top-reg"]}>RU</div>
      </div>
    </header>
  );
};

export default Header;
