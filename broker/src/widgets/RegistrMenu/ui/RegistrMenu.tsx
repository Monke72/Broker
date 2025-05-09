import { FC, useState } from "react";
import cls from "./RegistrMenu.module.scss";
import Title from "@shared/ui/Title/Title";
import { InputForm } from "@shared/ui/InputForm/index";
import emailIcon from "@shared/assets/icons/mail_icon.svg";
import passwordIcon from "@shared/assets/icons/password_icon.svg";
import Button from "@shared/ui/Button/Button";
import { InputType } from "@shared/ui/InputForm/index";

const RegistrMenu: FC = () => {
  const [agree, setAgree] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  // const dispatch = useAppDispatch();

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className={cls.menu}>
      <Title className={cls.menu__title}>Быстрая регистрация</Title>
      <h5 className={cls.menu__info}>Зарегистрируйтесь и получите чтото.</h5>
      <InputForm
        inputType={InputType.Primary}
        className={cls.menu__input}
        icon={emailIcon}
        placeholder="E-mail"
        value={email}
        onChange={(e) => changeEmail(e)}
      />
      <InputForm
        inputType={InputType.Primary}
        className={cls["menu__input__pass"]}
        iconClassName={cls["menu__icon-pass"]}
        icon={passwordIcon}
        type={visible ? "" : "password"}
        placeholder="Пароль"
        password
        visible={visible}
        setVisible={setVisible}
      />
      <div className={cls.field}>
        <input
          type="checkbox"
          id={cls.menu__checkbox}
          className={cls.menu__checkbox}
          onClick={() => setAgree((prev) => !prev)}
          checked={agree}
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
