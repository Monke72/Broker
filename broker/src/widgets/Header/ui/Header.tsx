import menegerIcon from "@shared/assets/icons/mianProfileIcon.svg";
import searchIcon from "@shared/assets/icons/searchIcon.svg";
import statusOnline from "@shared/assets/icons/statusOnline.svg";
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

const Header = () => {
  const [api, contextHolder] = notification.useNotification();
  const [searchValue, setSearchValue] = useState<string>("");
  const data = useAppSelector((state) => state.traiders.data);
  const dispatch = useAppDispatch();
  const dataFilterByData = useAppSelector(
    (state) => state.filterByDate.filterData,
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
      traid.traders.some((trader) => trader.id.includes(searchValue)),
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
        <div className={cls["header__top-manager"]}>
          <div className={cls["header__top-manager__image"]}>
            <img src={menegerIcon} alt="" />
          </div>
          <div className={cls["header__top-manager__info"]}>
            <div className={cls["header__top-manager__u"]}>Ваш менеджер</div>
            <h6 className={cls["header__top-manager__name"]}>Курт</h6>
            <div className={cls["header__top-manager__status"]}>
              <span>
                <img src={statusOnline} alt="" />
              </span>
              Online
            </div>
          </div>
        </div>
        <div className={cls["header__top-info"]}>
          <div className={cls["header__top-info__search"]}>
            <input
              value={searchValue}
              type="text"
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
