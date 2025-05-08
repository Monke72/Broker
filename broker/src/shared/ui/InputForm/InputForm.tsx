import { FC, InputHTMLAttributes } from "react";
interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  classname?: string;
  icon: string;
  required?: boolean;
  inputType?: InputType;
}
import { clsx } from "clsx";
import cls from "./inputForm.module.scss";

export const enum InputType {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

const InputForm: FC<IInputForm> = ({
  className,
  icon,
  required,
  inputType = InputType.Primary,
  ...rest
}) => {
  return (
    <div className={cls.input__wrapper}>
      {icon && <img src={icon} alt="icon" className={cls.icon} />}
      <input
        required={required}
        className={clsx(cls.input, className, cls[inputType])}
        {...rest}
      />
    </div>
  );
};

export default InputForm;
