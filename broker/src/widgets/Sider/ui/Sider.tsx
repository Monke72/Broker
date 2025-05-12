import cls from "./Sider.module.scss";
import applicationIcon from "@shared/assets/icons/applicationIcon.svg";
import userIcon from "@shared/assets/icons/userProfile.svg";
import exitIcon from "@shared/assets/icons/exit.svg";
import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";
import starActive from "@shared/assets/icons/starActive.svg";
import statistickIcon from "@shared/assets/icons/stat.svg";
import miniProfileIcon from "@shared/assets/icons/profileNav.svg";
import { useNavigate } from "react-router-dom";
import {
  setEntry,
  setMailReg,
  setPasswordReg,
} from "@features/LoginForm/model/slice";
import { NavSectionType } from "@pages/HomePage/ui/HomePage";

interface ISider {
  navSection: NavSectionType;
  setNavSection: React.Dispatch<React.SetStateAction<NavSectionType>>;
}

const Sider = ({ navSection, setNavSection }: ISider) => {
  const userMail = useAppSelector((state) => state.userReg.mail);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlerExit = () => {
    navigate("/");
    dispatch(setMailReg(""));
    dispatch(setPasswordReg(""));
    dispatch(setEntry(false));
  };

  return (
    <div className={cls.sider}>
      <div className={cls.sider__application}>
        <img
          className={cls["sider__application-image"]}
          src={applicationIcon}
          alt=""
        />
        <h3 className={cls["sider__application-title"]}>
          STARS BROKER <br />
          <span className={cls["sider__application-text"]}>AFFILIATES</span>
        </h3>
      </div>
      <div className={cls.sider__user}>
        <img src={userIcon} alt="" />
        <div className={cls["sider__user-info"]}>
          <ul className={cls["sider__user-rating"]}>
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <img src={starActive} alt="" />
              </li>
            ))}
          </ul>
          <div className={cls["sider__user-mail"]}>{userMail}</div>
          <button onClick={handlerExit} className={cls["sider__user-exit"]}>
            {" "}
            <img src={exitIcon} alt="" /> Выйти
          </button>
        </div>
      </div>
      <nav className={cls.sider__nav}>
        <ul className={cls["sider__nav-list"]}>
          <li
            className={`${cls["sider__nav-item"]} ${navSection === "main" ? cls["item--active"] : ""}`}
            onClick={() => setNavSection("main")}
          >
            <span className={cls["sider__nav-icon"]}>
              <img src={statistickIcon} alt="" />{" "}
            </span>
            Главная/Статистика
          </li>
          <li
            className={`${cls["sider__nav-item"]} ${navSection === "profile" ? cls["item--active"] : ""}`}
            onClick={() => setNavSection("profile")}
          >
            <span className={cls["sider__nav-icon"]}>
              <img src={miniProfileIcon} alt="" />
            </span>
            Профиль
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sider;
