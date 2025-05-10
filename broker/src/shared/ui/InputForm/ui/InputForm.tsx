import { FC } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { IInputForm } from "../model/types";
import { InputType } from "../index";
import { clsx } from "clsx";
import cls from "./inputForm.module.scss";

const InputForm: FC<IInputForm> = ({
  className,
  icon,
  required,
  inputType = InputType.Primary,
  iconClassName,
  password,
  visible,
  setVisible,
  error,
  ...rest
}) => {
  return (
    <div className={cls.input__wrapper}>
      <div className={cls.input__form}>
        {icon && (
          <img
            src={icon}
            alt="icon"
            className={clsx(cls.icon, iconClassName)}
          />
        )}
        <input
          required={required}
          className={clsx(cls.input, className, cls[inputType])}
          {...rest}
        />
        {password && (
          <span
            className={cls.input__password}
            onClick={() => setVisible((prev) => !prev)}
          >
            {!visible ? (
              <EyeInvisibleOutlined
                className={cls["input__password-icon"]}
                style={{ fontSize: 20, color: "var(--color-blue-light)" }}
              />
            ) : (
              <EyeTwoTone
                style={{ fontSize: 20, color: "var(--color-blue-light)" }}
                className={cls["input__password-icon"]}
              />
            )}
          </span>
        )}
      </div>
      {error && <div className={cls.input__error}>{error}</div>}
    </div>
  );
};

export default InputForm;
