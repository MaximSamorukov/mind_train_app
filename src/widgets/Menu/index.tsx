import React from "react";
import s from "./style.module.scss";
import { menu } from "../../app/constants";
import { MenuItem } from "./components/MenuItem";

export const Menu = () => {
  return (
    <div className={s.container}>
      {menu.map((i) => (
        <MenuItem key={i.path} title={i.title} path={i.path} />
      ))}
    </div>
  );
};
