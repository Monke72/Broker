import { HTMLAttributes } from "react";
import cls from "./Title.module.scss";
import { clsx } from "clsx";

interface ITitle extends HTMLAttributes<HTMLHeadElement> {
  className?: string;
  size?: string;
}

const Title = ({ className, size, children, ...rest }: ITitle) => {
  return (
    <h2
      className={clsx(cls.title, className)}
      style={{ fontSize: size }}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default Title;
