import { ButtonHTMLAttributes, FC } from "react";
import cls from "./button.module.scss";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button type="button" className={clsx(cls.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
