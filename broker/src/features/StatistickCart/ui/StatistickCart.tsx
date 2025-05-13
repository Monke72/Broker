import { BrokerStat } from "@entities/Traid/model/types/types";
import cls from "./StatistickCart.module.scss";
interface ICart {
  data: BrokerStat;
}
const StatistickCart = ({ data }: ICart) => {
  const {
    date,
    clicks,
    registrations,
    ftd,
    traders_count,
    payouts,
    deposit,
    worked_bonuses,
    dynamics,
    revenue,
  } = data;

  return (
    <div className={cls["cart"]}>
      <ul className={cls["cart__list"]}>
        <li className={`${cls["cart__item"]} ${cls["cart__date"]}`}>{date}</li>
        <li className={`${cls["cart__item"]} ${cls["cart__transition"]}`}>
          {clicks}
        </li>
        <li
          className={`${cls["cart__item"]} ${cls["cart__reg"]} ${registrations ? cls.active : ""} `}
        >
          {registrations}
        </li>
        <li
          className={`${cls["cart__item"]} ${cls["cart__ftd"]} ${ftd ? cls.active : ""}`}
        >
          {ftd}
        </li>
        <li
          className={`${cls["cart__item"]} ${cls["cart__traid"]} ${traders_count ? cls.active__traid : ""}`}
        >
          <span>{traders_count ? traders_count : <span>-</span>}</span>
        </li>
        <li className={`${cls["cart__item"]} ${cls["cart__dep"]}`}>
          $ {deposit}
        </li>
        <li className={`${cls["cart__item"]} ${cls["cart__payout"]}`}>
          $ {payouts.toFixed(2)}
        </li>
        <li className={`${cls["cart__item"]} ${cls["cart__bonus"]} `}>
          $ {worked_bonuses}
        </li>
        <li className={`${cls["cart__item"]} ${cls["cart__dinamic"]}`}>
          $ {dynamics}
        </li>
        <li
          className={`${cls["cart__item"]} ${cls["cart__profit"]} ${revenue ? cls.active : ""}`}
        >
          <span>{revenue ? `+$ ${revenue}` : <span>0</span>}</span>
        </li>
      </ul>
      {/* <span className={cls["cart__traiders"]}>{traders[1].id}</span> */}
    </div>
  );
};

export default StatistickCart;
