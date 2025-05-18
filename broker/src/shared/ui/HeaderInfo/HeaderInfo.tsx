import cls from "./HeaderInfo.module.scss";

interface IHeaderInfo {
  title?: string;
  children?: React.ReactNode;
  stat?: boolean;
  childOutside?: React.ReactNode;
  open?: boolean;
}

const HeaderInfo = ({ title, children, childOutside, open }: IHeaderInfo) => {
  return (
    <>
      <div className={cls["header__info"]}>
        <div className={cls.header__wrapper}>
          <h2 className={cls["header__title"]}>{title}</h2>
          <div className={cls["header__info-wrapper"]}>{children}</div>
        </div>
        {open && childOutside}
      </div>
    </>
  );
};

export default HeaderInfo;
