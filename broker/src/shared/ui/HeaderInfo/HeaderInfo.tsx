import cls from "./HeaderInfo.module.scss";
interface IHeaderInfo {
  title: string;
  children: React.ReactNode;
}

const HeaderInfo = ({ title, children }: IHeaderInfo) => {
  return (
    <>
      <div className={cls["header__info"]}>
        <h2 className={cls["header__title"]}>{title}</h2>
        <div className={cls["header__info-wrapper"]}>{children}</div>
      </div>
      <span className={cls.header__line}></span>
    </>
  );
};

export default HeaderInfo;
