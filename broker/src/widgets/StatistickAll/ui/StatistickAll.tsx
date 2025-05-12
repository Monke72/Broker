import StatistickCart from "@features/StatistickCart";
import "./StatistickAll.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";
import { useEffect } from "react";
import { fetchData } from "@entities/Traid/index";

const StatistickAll = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { data, loading, error } = useAppSelector((state) => state.traiders);
  console.log(data, loading);

  return (
    <div className="all">
      <div className="all__header">
        <ul className="all__list">
          <li className="all__item all__item-date">Дата</li>
          <li className="all__item">Переходы</li>
          <li className="all__item">Регистрации</li>
          <li className="all__item">FTD</li>
          <li className="all__item">Трейдеры</li>
          <li className="all__item">Депозиты</li>
          <li className="all__item">Выплаты</li>
          <li className="all__item">Отработанные бонусы</li>
          <li className="all__item">Динамика</li>
          <li className="all__item all__item-profit">Доход</li>
        </ul>
        <div className="cart__wrapper">
          <StatistickCart />
        </div>
      </div>
    </div>
  );
};

export default StatistickAll;
