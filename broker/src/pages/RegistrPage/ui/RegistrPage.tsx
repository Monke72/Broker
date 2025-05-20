import { FC } from "react";
import brokerIcon from "@shared/assets/icons/brokerIconBlue.svg";
import RegistrMenu from "@widgets/RegistrMenu/ui/RegistrMenu";
import cls from "./Registr.module.scss";
import Title from "@shared/ui/Title/Title";
import { useAppSelector } from "@shared/hooks/StoreHooks/StoreHooks";
import { Link } from "react-router-dom";

const RegistrPage: FC = () => {
  const entry = useAppSelector((state) => state.userReg.entry);
  return (
    <section className={cls.reg}>
      <div className={`${cls.reg__wrapper} container`}>
        <div className={cls.reg__header}>
          <div className={cls.reg__avatar}>
            <img
              className={cls.reg__image}
              src={brokerIcon}
              alt="broker icon"
            />
            <h3 className={cls.reg__name}>
              STARS <br /> <span>BROKER</span>
            </h3>
          </div>
          <Title className={cls.reg__title}>Регистрация</Title>
        </div>
        {!entry && <RegistrMenu />}
        {entry && (
          <div className={cls.reg__error}>
            <h1>Вы уже зарегистрированы</h1>
            <Link to={"/Broker/"}>
              <button>Вернемся домой?</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrPage;
