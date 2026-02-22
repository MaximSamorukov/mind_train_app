import { useNavigate } from "react-router";
import s from "./style.module.scss";

type MenuItemProps = {
  title: string;
  path: string;
};

export const MenuItem = ({ title, path }: MenuItemProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${path}`);
  };
  return (
    <button onClick={handleClick} className={s.container}>
      {title}
    </button>
  );
};
