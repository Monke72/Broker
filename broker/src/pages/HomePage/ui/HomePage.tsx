import { FC, useEffect } from "react";
import cls from "./HomePage.module.scss";
import Sider from "@widgets/Sider/index";
import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";
import Header from "@widgets/Header/ui/Header";
import HeaderStatisick from "@features/HeaderStatistick/ui/DatePickerToTariders/HeaderStatistick";
import StatistickAll from "@widgets/StatistickAll/ui/StatistickAll";
import { useNavigate } from "react-router-dom";
import { fetchData } from "@entities/Traid";
import EditUserProfile from "@features/EditUserProfile/ui/EditUserProfile";
import HeaderInfo from "@widgets/HeaderInfo/HeaderInfo";
import { useQuerySize } from "@shared/lib/device/mediaQuerySize";
import MobileHome from "./mobile/MobileHome";
import { setSection } from "@features/SliderSections/model/sliderSectionsSlice";

const HomePage: FC = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
  const navSection = useAppSelector((state) => state.navSection.section);
  const loading = useAppSelector((state) => state.traiders.isLoading);

  const isMobile = useQuerySize(570);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (!entry) {
      navigate("/reg");
    }
  }, [entry, navigate]);

  useEffect(() => {
    if (isMobile) {
      dispatch(setSection("mobile"));
    } else {
      dispatch(setSection("main"));
    }
  }, [isMobile, dispatch]);

  return (
    <>
      {!isMobile && (
        <section className={cls.home}>
          <Sider />
          {loading && <div className={cls.home__overlay}></div>}
          {!loading && (
            <div className={cls.home__main}>
              {navSection === "main" && (
                <>
                  <Header />
                  <HeaderStatisick />
                  <StatistickAll />
                </>
              )}
              {navSection === "profile" && (
                <>
                  <Header />
                  <HeaderInfo title="Редактирование профиля" />
                  <EditUserProfile />
                </>
              )}
            </div>
          )}
        </section>
      )}

      {isMobile && <MobileHome />}
    </>
  );
};

export default HomePage;
