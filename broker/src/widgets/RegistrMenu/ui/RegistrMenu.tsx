import { FC } from "react";
import cls from "./RegistrMenu.module.scss";
import Title from "@shared/ui/Title/Title";
import InputForm from "@shared/ui/InputForm/InputForm";
import emailIcon from "@shared/assets/icons/mail_icon.svg";
import Button from "@shared/ui/Button/Button";
import { InputType } from "@shared/ui/InputForm/InputForm";

const RegistrMenu: FC = () => {
  return (
    <div className={cls.menu}>
      <Title className={cls.menu__title}>Быстрая регистрация</Title>
      <h5 className={cls.menu__info}>Зарегистрируйтесь и получите чтото.</h5>
      <InputForm
        inputType={InputType.Primary}
        className={cls.menu__input}
        icon={emailIcon}
        placeholder="E-mail"
      />
      <InputForm
        inputType={InputType.Primary}
        className={cls.menu__input}
        icon={emailIcon}
        placeholder="Пароль"
      />
      <div className={cls.field}>
        <input
          type="checkbox"
          id={cls.menu__checkbox}
          className={cls.menu__checkbox}
        />
        <label htmlFor={cls.menu__checkbox}>
          Я совершеннолетний и соглашаюсь с <br />
          <span>политикой конфиденциальности</span>
        </label>
      </div>
      <Button>Зарегистрироваться</Button>
    </div>
  );
};

export default RegistrMenu;
