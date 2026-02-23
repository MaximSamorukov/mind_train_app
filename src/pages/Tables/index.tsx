import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import type { InputNumberProps } from "antd";
import { InputNumber, Button } from "antd";
import s from "./style.module.scss";
import type { valueType } from "antd/es/statistic/utils";
import { useNumbers } from "../../utils/useNumbers";
import { Timer } from "./components/Timer";

const DEFAULT_VALUE = 6;
const DEFAULT_INTERVAL = 60;

export const Tables: React.FC = () => {
  const [horCount, setHorCount] = useState<valueType | null>(DEFAULT_VALUE);
  const [vertCount, setVertCount] = useState<valueType | null>(DEFAULT_VALUE);
  const [intervalCount, setIntervalCount] = useState<valueType | null>(
    DEFAULT_INTERVAL,
  );
  const [inProcess, setInProcess] = useState<boolean>(false);
  const { numbers, setNumberCount, refreshField } = useNumbers(
    Number(vertCount || 0) * Number(horCount || 0),
  );
  useEffect(() => {
    setNumberCount(Number(vertCount || 0) * Number(horCount || 0));
  }, [horCount, vertCount]);
  const horValueChange: InputNumberProps["onChange"] = (v) => {
    setHorCount(v || DEFAULT_VALUE);
  };
  const vertValueChange: InputNumberProps["onChange"] = (v) => {
    setVertCount(v || DEFAULT_VALUE);
  };
  const intervalValueChange: InputNumberProps["onChange"] = (v) => {
    setIntervalCount(v);
  };
  const handleProcess = useCallback(() => {
    setInProcess((v) => !v);
  }, []);
  const refresh = useCallback(() => {
    setNumberCount(Number(vertCount || 0) * Number(horCount || 0));
    refreshField();
  }, [vertCount, horCount]);
  return (
    <div className={s.container}>
      <div className={s.menu}>
        <div className={s.menu__item}>
          <div className={s.menu__label}>По горизонтали</div>
          <div className={s.menu__input}>
            <InputNumber
              disabled={inProcess}
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
              disabled={inProcess}
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
              disabled={inProcess}
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
        <div className={s.menu__item}>
          <div className={s.menu__label}>Таймер, сек</div>
          <div className={s.menu__input}>
            <Timer
              value={intervalCount}
              inProcess={inProcess}
              handleProcess={handleProcess}
            />
          </div>
        </div>
      </div>
      <div className={s.field}>
        {Array(horCount)
          .fill(null)
          .map((_, row) => (
            <div className={s.field_row}>
              {Array(vertCount)
                .fill(null)
                .map((__, column) => (
                  <div
                    key={row + column}
                    className={cn(s.field_cell, {
                      [s.field_cell__disabled]: !inProcess,
                    })}
                  >
                    {numbers[row * Number(vertCount) + column]}
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className={s.start}>
        <Button
          variant="solid"
          color="danger"
          size="large"
          onClick={handleProcess}
        >
          {inProcess ? "STOP" : "START"}
        </Button>
        <Button
          disabled={inProcess}
          variant="solid"
          color="geekblue"
          size="large"
          onClick={refresh}
        >
          NEW
        </Button>
      </div>
    </div>
  );
};
