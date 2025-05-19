import { useAppDispatch } from "@shared/hooks/StoreHooks/StoreHooks";
import { useQuerySize } from "@shared/lib/device/mediaQuerySize";
import { setSection } from "@features/SliderSections/model/sliderSectionsSlice";
import strExit from "@shared/assets/icons/strExit.svg";
import cls from "./BackToHome.module.scss";
const BackToHome = () => {
  const isMobile = useQuerySize(570);
  const dispatch = useAppDispatch();
  return (
    <>
      {isMobile && (
        <button
          onClick={() => dispatch(setSection("mobile"))}
          className={cls.mobile__exit}
        >
          <img src={strExit} alt="" />
        </button>
      )}
    </>
  );
};

export default BackToHome;
