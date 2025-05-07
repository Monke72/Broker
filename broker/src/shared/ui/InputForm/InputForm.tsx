import { FC, InputHTMLAttributes } from "react";
interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  classname?: string;
  icon: string;
}
import cls from "./inputForm.module.scss";

const InputForm: FC<IInputForm> = ({ className, icon, ...rest }) => {
  return (
    <div className={`${cls.inputWrapper} ${className || ""}`}>
      {icon && <img src={icon} alt="icon" className={cls.icon} />}
      <input className={cls.input} {...rest} />
    </div>
  );
};

export default InputForm;
