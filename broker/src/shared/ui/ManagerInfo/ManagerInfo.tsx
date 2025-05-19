import React from "react";
import statusOnline from "@shared/assets/icons/statusOnline.svg";
import menegerIcon from "@shared/assets/icons/mianProfileIcon.svg";
import cls from "./ManagerInfo.module.scss";

const ManagerInfo = ({ className }: { className: string }) => {
  return (
    <div className={`${cls["manager"]} ${cls[`${className}`]}`}>
      <div className={cls["manager__image"]}>
        <img className={cls["manager__image-face"]} src={menegerIcon} alt="" />
      </div>
      <div className={cls["manager__info"]}>
        <div className={cls["manager__u"]}>Ваш менеджер</div>
        <h6 className={cls["manager__name"]}>Курт</h6>
        <div className={cls["manager__status"]}>
          <span>
            <img src={statusOnline} alt="" />
          </span>
          Online
        </div>
      </div>
    </div>
  );
};

export default ManagerInfo;
