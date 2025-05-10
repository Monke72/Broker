import cls from "./NotFound.module.scss";
import { MehOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className={cls.not}>
      <div className={cls.not__wrapper}>
        <MehOutlined
          style={{ fontSize: "110px", color: "var(--color-blue-light)" }}
        />
        <h1 className={cls.not__error}>404</h1>
        <p className={cls.not__text}>
          Ты дошёл до конца интернета… или просто не туда свернул🐾 <br />
          <Link className={cls.not__link} to={"/"}>
            Вернёмся домой?
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
