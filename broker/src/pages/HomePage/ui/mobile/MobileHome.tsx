import { useAppSelector } from "@shared/hooks/StoreHooks/StoreHooks";
import { useEffect, useState } from "react";
import Sider from "@widgets/Sider";
import HeaderStatisick from "@features/HeaderStatistick/ui/DatePickerToTariders/HeaderStatistick";
import StatistickAll from "@widgets/StatistickAll/ui/StatistickAll";
import cls from "./MobileHome.module.scss";
import CompanyHeader from "@widgets/CompanyHeader/ui/CompanyHeader";
import Header from "@widgets/Header/ui/Header";
import HeaderInfo from "@widgets/HeaderInfo/HeaderInfo";
import EditUserProfile from "@features/EditUserProfile/ui/EditUserProfile";
import BackToHome from "@features/BackToHome/ui/BackToHome";

const MobileHome = () => {
  const [openStat, setOpenStat] = useState<boolean>(false);
  const navSection = useAppSelector((state) => state.navSection.section);
  const loading = useAppSelector((state) => state.traiders.isLoading);

  useEffect(() => {
    setOpenStat(false);
  }, [navSection]);

  return (
    <div className={cls["mobile__wrapper"]}>
      {navSection === "mobile" && <Sider />}

      {(navSection === "stat" && loading) ||
        (navSection === "statAll" && loading && (
          <div className={cls["skeleton"]}></div>
        ))}

      {navSection === "stat" && !loading && (
        <HeaderStatisick openStat={openStat} setOpenStat={setOpenStat} />
      )}

      {navSection === "statAll" && !loading && (
        <div className={cls["mobile__stats"]}>
          <CompanyHeader children={<Header />} />
          <HeaderStatisick openStat={openStat} setOpenStat={setOpenStat} />
          {openStat && <StatistickAll />}
        </div>
      )}

      {navSection === "profile" && (
        <>
          <BackToHome />
          <HeaderInfo title="Редактирование профиля" mobileClass="redact" />
          <EditUserProfile />
        </>
      )}
    </div>
  );
};

export default MobileHome;
