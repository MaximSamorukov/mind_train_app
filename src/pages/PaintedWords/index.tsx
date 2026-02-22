import React, { useState } from "react";
import s from "./style.module.scss";
import { Button } from "antd";
import { COLORS, WORDS } from "./constants";

export const PaintedWords: React.FC = () => {
  const [, setRefresh] = useState<any>({});
  const handleRefresh = () => setRefresh({});
  return (
    <div className={s.container}>
      <div className={s.menu}>
        <div className={s.menu__item}>
          <div className={s.menu__input}>
            <Button onClick={handleRefresh}>Refresh</Button>
          </div>
        </div>
      </div>
      <div className={s.field}>
        {WORDS.map((i) => {
          const index = Math.floor(Math.random() * COLORS.length);
          const color = COLORS[index];
          return (
            <div key={i} style={{ color }} className={s.word}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};
