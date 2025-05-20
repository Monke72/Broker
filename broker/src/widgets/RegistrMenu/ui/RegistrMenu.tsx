import { FC, useState } from "react";
import cls from "./RegistrMenu.module.scss";
import Title from "@shared/ui/Title/Title";
import { InputForm } from "@shared/ui/InputForm/index";
import emailIcon from "@shared/assets/icons/mail_icon.svg";
import passwordIcon from "@shared/assets/icons/password_icon.svg";
import Button from "@shared/ui/Button/Button";
import { InputType } from "@shared/ui/InputForm/index";
import { validateEmail } from "@shared/utils/emailValidator";
import { passwordValid } from "@shared/utils/passwordValidator";
import { useAppDispatch } from "@shared/hooks/StoreHooks/StoreHooks";
import {
  setEntry,
  setMailReg,
  setPasswordReg,
} from "@features/LoginForm/model/slice";
import { useNavigate } from "react-router-dom";

const RegistrMenu: FC = () => {
  //form
  const [agree, setAgree] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //erros form
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [agreeError, setAgreeError] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const emailIsValid = validateEmail(email);
    const passwordIsValid = passwordValid(password);
    const agreeIsValid = agree;

    setEmailError(emailIsValid ? "" : "Некорректный e-mail");
    setPasswordError(
      passwordIsValid
        ? ""
        : "Пароль должен содержать 8 символов, цифры и заглавные буквы"
    );
    setAgreeError(!agreeIsValid);

    if (emailIsValid && passwordIsValid && agreeIsValid) {
      dispatch(setMailReg(email));
      dispatch(setPasswordReg(password));
      dispatch(setEntry(true));
      navigate("/Broker/", { replace: true }); //переходим на главную страницу и запрещаем переход назад
    }
  };

  // const dispatch = useAppDispatch();

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className={cls.menu}>
      <Title className={cls.menu__title}>Быстрая регистрация</Title>
      <h5 className={cls.menu__info}>Зарегистрируйтесь и получите чтото.</h5>
      <InputForm
        inputType={InputType.Primary}
        type="email"
        className={cls.menu__input}
        icon={emailIcon}
        placeholder="E-mail"
        value={email}
        onChange={(e) => changeEmail(e)}
        error={emailError}
      />
      <InputForm
        inputType={InputType.Primary}
        className={cls["menu__input__pass"]}
        iconClassName={cls["menu__icon-pass"]}
        icon={passwordIcon}
        placeholder="Пароль"
        onChange={(e) => changePassword(e)}
        value={password}
        password
        error={passwordError}
      />
      <div className={cls.field}>
        <input
          type="checkbox"
          id={cls.menu__checkbox}
          className={`${cls.menu__checkbox} ${
            agreeError ? cls.check__error : ""
          }`}
          onClick={() => setAgree((prev) => !prev)}
          defaultChecked={agree}
        />
        <label htmlFor={cls.menu__checkbox}>
          Я совершеннолетний и соглашаюсь с <br />
          <span>политикой конфиденциальности</span>
        </label>
      </div>

      <Button onClick={handleSubmit}>Зарегистрироваться</Button>
    </div>
  );
};

export default RegistrMenu;
