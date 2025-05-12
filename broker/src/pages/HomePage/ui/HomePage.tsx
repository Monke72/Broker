import { FC } from "react";
import cls from "./HomePage.module.scss";
import Sider from "@widgets/Sider/index";
import { useAppSelector } from "@shared/hooks/StoreHooks/StoreHooks";
import NotFound from "@shared/ui/NotFoundPage/NotFound";
import { useState } from "react";
import Header from "@widgets/Header/ui/Header";
import HeaderStatisick from "@features/HeaderStatistick/ui/HeaderStatisick";
export type NavSectionType = "main" | "profile";
const HomePage: FC = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
  console.log(entry);
  const [navSection, setNavSection] = useState<NavSectionType>("main");
  return (
    <>
      {!entry && <NotFound error={403} />}
      {entry && (
        <section className={cls.home}>
          <Sider navSection={navSection} setNavSection={setNavSection} />
          <div className={cls.home__main}>
            <Header />
            <HeaderStatisick />
          </div>
        </section>
      )}
    </>
  );
};

export default HomePage;
