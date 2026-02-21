import { Outlet } from "react-router";
import s from "./app.module.scss";
import { Menu } from "./widgets/Menu";
export const App = () => {
  return (
    <div className={s.container}>
      <Menu />
      <Outlet />
    </div>
  );
};
