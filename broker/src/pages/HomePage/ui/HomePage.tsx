import { FC } from "react";
import cls from "./HomePage.module.scss";
import Sider from "@widgets/Sider/ui/Sider";
import { useAppSelector } from "@shared/hooks/StoreHooks/StoreHooks";
import NotFound from "@shared/ui/NotFoundPage/NotFound";

const HomePage: FC = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
  console.log(entry);

  return (
    <>
      {!entry && <NotFound error={403} />}
      {entry && (
        <section className={cls.home}>
          <Sider />
        </section>
      )}
    </>
  );
};

export default HomePage;
