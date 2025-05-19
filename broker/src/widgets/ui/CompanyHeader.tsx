import { FC } from "react";
import cls from "./CompanyHeader.module.scss";
import applicationIcon from "@shared/assets/icons/applicationIcon.svg";

interface CompanyHeaderProps {
  children?: React.ReactNode;
}

const CompanyHeader: FC<CompanyHeaderProps> = ({ children }) => {
  return (
    <div className={cls.company__application}>
      <div className={cls.company__wrapper}>
        <img
          className={cls["company__application-image"]}
          src={applicationIcon}
          alt=""
        />
        <h3 className={cls["company__application-title"]}>
          STARS BROKER <br />
          <span className={cls["company__application-text"]}>AFFILIATES</span>
        </h3>
      </div>
      {children}
    </div>
  );
};

export default CompanyHeader;
