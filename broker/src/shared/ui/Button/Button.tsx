import { ButtonHTMLAttributes, FC } from "react";
import cls from "./button.module.scss";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children } = props;
  return (
    <button type="button" className={clsx(cls.button, className)}>
      {children}
    </button>
  );
};

export default Button;
