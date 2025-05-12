import menegerIcon from "@shared/assets/icons/mianProfileIcon.svg";
import searchIcon from "@shared/assets/icons/searchIcon.svg";
import statusOnline from "@shared/assets/icons/statusOnline.svg";
import cls from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cls["header"]}>
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
            <input type="text" placeholder="Поиск по ID" />
            <button className={cls["header__search-button"]}>
              <img src={searchIcon} alt="search" />
            </button>
          </div>
          <div className={cls["header__top-info__salary"]}>
            <div className={cls["header__top-info__salary-time"]}>
              Заработок за неделю
            </div>
            <h4 className={cls["header__top-info__salary-quantity"]}>315$</h4>
          </div>
        </div>
        <div className={cls["header__top-reg"]}>RU</div>
      </div>
    </header>
  );
};

export default Header;
