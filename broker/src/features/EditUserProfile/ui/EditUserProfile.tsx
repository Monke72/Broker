import Button from "@shared/ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import avatarIcon from "@shared/assets/icons/accForm.png";
import cls from "./EditUserProfile.module.scss";
import { InputForm } from "@shared/ui/InputForm";
import { InputType } from "@shared/ui/InputForm";
import { IFormProfile } from "../types/types";
import { SourceTraffic } from "@shared/types/globalTypes";

//иконки формы
import mailIcon from "@shared/assets/icons/formMailIcon.svg";
import nameIcon from "@shared/assets/icons/nameIcon.svg";
import passwordIcon from "@shared/assets/icons/passwordForm.svg";
import telIcon from "@shared/assets/icons/telIcon.svg";
import tgIcon from "@shared/assets/icons/tgIcon.svg";
import sourceIcon from "@shared/assets/icons/navigate.svg";
import strList from "@shared/assets/icons/strList.svg";

//валидация формы
import { validateEmail } from "@shared/utils/emailValidator";
import { validateName } from "@shared/utils/validateName";
import { passwordValid } from "@shared/utils/passwordValidator";
import { validatePhone } from "@shared/utils/telValidator";
import { validateTelegram } from "@shared/utils/validateTg";
import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "@shared/hooks/StoreHooks/StoreHooks";
import {
  setMailReg,
  setName,
  setPasswordReg,
  setTel,
  setTg,
  setTraffic,
} from "@features/LoginForm/model/slice";

const EditUserProfile = () => {
  const [openSource, setOpenSource] = useState<boolean>(false);
  const [source, setSource] = useState<SourceTraffic>("");
  const { mail, password, tg, name, tel, traffic } = useAppSelector(
    (state) => state.userReg
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormProfile>({});

  const valMail = (data) => {
    return validateEmail(data);
  };
  const valname = (data) => {
    return validateName(data);
  };
  const valPassword = (data: string) => {
    console.log(passwordValid(data));
    return passwordValid(data);
  };
  const valTel = (data) => {
    return validatePhone(data);
  };
  const valTg = (data) => {
    console.log(validateTelegram(data));
    return validateTelegram(data);
  };

  function setSourceHandler(source: SourceTraffic) {
    setSource(source);
    setValue("source", source);
    setOpenSource(false);
  }

  const submit: SubmitHandler<IFormProfile> = (data) => {
    dispatch(setMailReg(data.mail));
    dispatch(setPasswordReg(data.password));
    dispatch(setName(data.name));
    dispatch(setTraffic(source));
    dispatch(setTel(data.tel));
    dispatch(setTg(data.tg));
  };
  return (
    <div className={cls.edit}>
      <img className={cls.edit__avatar} src={avatarIcon} alt="" />
      <button className={cls.edit__load}>ЗАГРУЗИТЬ АВАТАР</button>
      <form onSubmit={handleSubmit(submit)} className={cls.form}>
        <InputForm
          inputType={InputType.Secondary}
          iconClassName={cls.edit__icon}
          icon={mailIcon}
          id="email"
          className={cls.form__mail}
          type="text"
          {...register("mail", { required: true, validate: valMail })}
          aria-invalid={errors.mail ? true : false}
          placeholder="E-mail"
          defaultValue={mail}
        />

        <div className={cls.wrapper__gap}>
          <InputForm
            inputType={InputType.Secondary}
            iconClassName={cls.edit__icon}
            icon={nameIcon}
            type="text"
            className={cls.form__def}
            {...register("name", { validate: valname })}
            placeholder="Имя"
            defaultValue={name ? name : ""}
          />
          <InputForm
            inputType={InputType.Secondary}
            iconClassName={cls.edit__icon}
            icon={passwordIcon}
            className={cls.form__def}
            {...register("password", { required: true, validate: valPassword })}
            placeholder="Пароль"
            password
            defaultValue={password}
          />
          <InputForm
            inputType={InputType.Secondary}
            iconClassName={`${cls.edit__icon} ${cls.icon__tel}`}
            icon={telIcon}
            type="text"
            className={cls.form__def}
            {...register("tel", { validate: valTel })}
            placeholder="Телефон"
            defaultValue={tel ? tel : ""}
          />
          <InputForm
            inputType={InputType.Secondary}
            iconClassName={`${cls.edit__icon} ${cls.icon__tg}`}
            icon={tgIcon}
            type="text"
            className={cls.form__def}
            {...register("tg", { validate: valTg })}
            placeholder="Телеграм"
            defaultValue={tg ? tg : ""}
          />
        </div>

        <div className={cls.form__traffic}>
          <InputForm
            inputType={InputType.Secondary}
            iconClassName={`${cls.edit__icon} ${cls.icon__source}`}
            icon={sourceIcon}
            className={cls.form__source}
            type="text"
            {...register("source")}
            placeholder="Источник трафика"
            readOnly
            onClick={() => setOpenSource((prev) => !prev)}
            defaultValue={traffic ? traffic : ""}
          >
            <button
              className={cls["form__list-handler"]}
              type="button"
              onClick={() => setOpenSource((prev) => !prev)}
            >
              <img src={strList} alt="" />
            </button>
          </InputForm>
          {openSource && (
            <ul className={cls["form__source-list"]}>
              <li className={cls["form__source-item"]}>
                <button
                  onClick={() => setSourceHandler("Друзья")}
                  type="button"
                >
                  Друзья
                </button>
              </li>
              <li className={cls["form__source-item"]}>
                <button
                  onClick={() => setSourceHandler("Маркетинг")}
                  type="button"
                >
                  Маркетинг
                </button>
              </li>
            </ul>
          )}
          <div className={cls.form__error}>
            {Object.entries(errors).map(([key, error]) => (
              <p className={cls["form__error-message"]} key={key}>
                {error?.message || `Некорректное значение ${key}`}
              </p>
            ))}
          </div>
        </div>
        <div className={cls.ref}>
          <h5 className={cls.ref__title}>Партнерская ссылка</h5>
          <a
            className={cls.ref__link}
            href="https://starstbinary.com/ref/sb6552"
          >
            https://starstbinary.com/ref/sb6552
          </a>
        </div>
        <Button className={cls.form__button} type="submit">
          Сохранить изменения
        </Button>
      </form>
    </div>
  );
};

export default EditUserProfile;
