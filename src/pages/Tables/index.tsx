import React, { useState } from "react";
import type { InputNumberProps } from "antd";
import { InputNumber, Button } from "antd";
import s from "./style.module.scss";
import type { valueType } from "antd/es/statistic/utils";

const DEFAULT_VALUE = 6;
const DEFAULT_INTERVAL = 60;

export const Tables: React.FC = () => {
  const [horCount, setHorCount] = useState<valueType | null>(DEFAULT_VALUE);
  const [vertCount, setVertCount] = useState<valueType | null>(DEFAULT_VALUE);
  const [intervalCount, setIntervalCount] = useState<valueType | null>(
    DEFAULT_INTERVAL,
  );

  const horValueChange: InputNumberProps["onChange"] = (v) => {
    setHorCount(v || DEFAULT_VALUE);
  };
  const vertValueChange: InputNumberProps["onChange"] = (v) => {
    setVertCount(v || DEFAULT_VALUE);
  };
  const intervalValueChange: InputNumberProps["onChange"] = (v) => {
    setIntervalCount(v);
  };
  return (
    <div className={s.container}>
      <div className={s.menu}>
        <div className={s.menu__item}>
          <div className={s.menu__label}>По горизонтали</div>
          <div className={s.menu__input}>
            <InputNumber
              value={horCount}
              size="large"
              min={5}
              max={25}
              defaultValue={DEFAULT_VALUE}
              changeOnWheel
              controls={false}
              onChange={horValueChange}
            />
          </div>
        </div>
        <div className={s.menu__item}>
          <div className={s.menu__label}>По вертикали</div>
          <div className={s.menu__input}>
            <InputNumber
              value={vertCount}
              size="large"
              min={5}
              max={25}
              defaultValue={DEFAULT_VALUE}
              changeOnWheel
              controls={false}
              onChange={vertValueChange}
            />
          </div>
        </div>
        <div className={s.menu__item}>
          <div className={s.menu__label}>Время, сек</div>
          <div className={s.menu__input}>
            <InputNumber
              value={intervalCount}
              size="large"
              min={5}
              max={500}
              defaultValue={DEFAULT_INTERVAL}
              changeOnWheel
              controls={false}
              onChange={intervalValueChange}
            />
          </div>
        </div>
      </div>
      <div className={s.field}>
        {Array(horCount)
          .fill(null)
          .map((_, i) => (
            <div className={s.field_row}>
              {Array(vertCount)
                .fill(null)
                .map((__, ii) => (
                  <div className={s.field_cell}>{ii}</div>
                ))}
            </div>
          ))}
      </div>
      <div className={s.start}>
        <Button variant="solid" color="danger" size="large">
          START
        </Button>
      </div>
    </div>
  );
};
