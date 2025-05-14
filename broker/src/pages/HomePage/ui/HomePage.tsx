import { FC, useEffect } from "react";
import cls from "./HomePage.module.scss";
import Sider from "@widgets/Sider/index";
import { useAppSelector } from "@shared/hooks/StoreHooks/StoreHooks";
import { useState } from "react";
import Header from "@widgets/Header/ui/Header";
import HeaderStatisick from "@features/HeaderStatistick/ui/HeaderStatisick";
import StatistickAll from "@widgets/StatistickAll/ui/StatistickAll";
import { useNavigate } from "react-router-dom";
export type NavSectionType = "main" | "profile";
const HomePage: FC = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
  console.log(entry);
  const [navSection, setNavSection] = useState<NavSectionType>("main");
  const navigate = useNavigate();
  useEffect(() => {
    if (!entry) {
      navigate("/reg");
    }
  }, [entry, navigate]);
  return (
    <>
      {entry && (
        <section className={cls.home}>
          <Sider navSection={navSection} setNavSection={setNavSection} />
          <div className={cls.home__main}>
            <Header />
            <HeaderStatisick />
            <StatistickAll />
          </div>
        </section>
      )}
    </>
  );
};

export default HomePage;
