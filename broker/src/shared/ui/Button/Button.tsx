import { ButtonHTMLAttributes, FC } from "react";
import cls from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children } = props;
  return (
    <button
      type="button"
      className={`${cls.button}${className ? ` ${className}` : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
