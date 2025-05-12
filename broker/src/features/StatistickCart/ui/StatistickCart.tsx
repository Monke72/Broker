import "./StatistickCart.scss";
const StatistickCart = () => {
  return (
    <div className="cart">
      <ul className="cart__list">
        <li className="cart__item cart__date">22.02.2020</li>
        <li className="cart__item cart__transition">5</li>
        <li className="cart__item cart__reg">3</li>
        <li className="cart__item cart__ftd">0</li>
        <li className="cart__item cart__traid">12</li>
        <li className="cart__item cart__dep">$ 12</li>
        <li className="cart__item cart__payout">$ 7</li>
        <li className="cart__item cart__bonus">$ 0</li>
        <li className="cart__item cart__dinamic">$ 12</li>
        <li className="cart__item cart__profit">+$ 14</li>
      </ul>
    </div>
  );
};

export default StatistickCart;
