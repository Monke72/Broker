import HeaderStatisick from "@features/HeaderStatistick/ui/HeaderStatisick";
import cls from "./HeaderInfo.module.scss";
import strIcon from "@shared/assets/icons/strDown.svg";
interface IHeaderInfo {
  title?: string;
  children?: React.ReactNode;
  stat?: boolean;
}

const HeaderInfo = ({ title, children, stat }: IHeaderInfo) => {
  return (
    <>
      <div className={cls["header__info"]}>
        <div className={cls.header__wrapper}>
          <h2 className={cls["header__title"]}>{title}</h2>
          <div className={cls["header__info-wrapper"]}>{children}</div>
        </div>
        {/* {stat && (
          <div className={cls.stat}>
            <h5>Подробнее</h5>
            <button>
              <img src={strIcon} alt="" />
            </button>
            <HeaderStatisick />
          </div>
        )} */}
      </div>
    </>
  );
};

export default HeaderInfo;
