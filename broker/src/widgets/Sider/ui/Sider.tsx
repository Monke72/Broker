import cls from "./Sider.module.scss";

import userIcon from "@shared/assets/icons/userProfile.svg";
import exitIcon from "@shared/assets/icons/exit.svg";
import strDown from "@shared/assets/icons/strLightDown.svg";
import siderStrIcon from "@shared/assets/icons/strSiderMobile.svg";
import starActive from "@shared/assets/icons/starActive.svg";
import statistickIcon from "@shared/assets/icons/stat.svg";
import miniProfileIcon from "@shared/assets/icons/profileNav.svg";

import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";

import { useNavigate } from "react-router-dom";
import { deleteAll } from "@features/LoginForm/model/slice";
import { useState } from "react";
import { setSection } from "@features/SliderSections/model/sliderSectionsSlice";
import ManagerInfo from "@shared/ui/ManagerInfo/ManagerInfo";
import { useQuerySize } from "@shared/lib/device/mediaQuerySize";

import CompanyHeader from "@widgets/CompanyHeader/ui/CompanyHeader";

const Sider = () => {
  const userMail = useAppSelector((state) => state.userReg.mail);
  const navSection = useAppSelector((state) => state.navSection.section);
  const [mobileStat, setMobileStat] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isMobile = useQuerySize(570);

  const handlerExit = () => {
    navigate("/");
    dispatch(deleteAll());
  };

  const handleStat = () => {
    if (isMobile) {
      setMobileStat((prev) => !prev);
    } else {
      dispatch(setSection("main"));
    }
  };
  const handleExit = () => {
    dispatch(setSection("profile"));
    setMobileStat(false);
  };

  return (
    <div className={cls.sider}>
      <CompanyHeader />
      <div className={cls.sider__user}>
        <img src={userIcon} alt="" className={cls["sider__profile-image"]} />
        <div className={cls["sider__user-info"]}>
          <ul className={cls["sider__user-rating"]}>
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <img className={cls["sider__star"]} src={starActive} alt="" />
              </li>
            ))}
          </ul>
          <div className={cls["sider__user-mail"]}>{userMail}</div>
          <button onClick={handlerExit} className={cls["sider__user-exit"]}>
            <img src={exitIcon} alt="" /> Выйти
          </button>
        </div>
      </div>
      <nav className={cls.sider__nav}>
        <ul className={cls["sider__nav-list"]}>
          <li
            className={`${cls["sider__nav-item"]} ${navSection === "main" && !isMobile ? cls["item--active"] : ""} ${mobileStat && isMobile ? cls["item--active"] : ""}`}
            onClick={handleStat}
          >
            <span className={cls["sider__nav-icon"]}>
              <img src={statistickIcon} alt="" />
              <p>Главная/Статистика</p>
            </span>
            {isMobile && <img src={strDown} alt="" />}
          </li>
          {isMobile && mobileStat && (
            <div className={cls["mobile__wrapper-buttons"]}>
              <button
                className={cls["mobile__button-stat"]}
                onClick={() => dispatch(setSection("statAll"))}
              >
                <span>
                  <img src={siderStrIcon} alt="" />
                </span>
                Cтатистика по CPA
              </button>
              <button
                className={cls["mobile__button-stat"]}
                onClick={() => dispatch(setSection("stat"))}
              >
                <span>
                  <img src={siderStrIcon} alt="" />
                </span>
                Cтатистика по обороту
              </button>
            </div>
          )}
          <li
            className={`${cls["sider__nav-item"]} ${navSection === "profile" && !isMobile ? cls["item--active"] : ""}`}
            onClick={handleExit}
          >
            <span className={cls["sider__nav-icon"]}>
              <img src={miniProfileIcon} alt="" />
              <p>Профиль</p>
            </span>
          </li>
        </ul>
      </nav>
      <ManagerInfo className="mobile" />
    </div>
  );
};

export default Sider;
