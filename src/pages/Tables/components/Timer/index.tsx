import type { valueType } from "antd/es/statistic/utils";
import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";

type TyperProps = {
  value: valueType | null;
  inProcess: boolean;
  handleProcess: () => void;
};

export const Timer: React.FC<TyperProps> = ({
  value,
  inProcess,
  handleProcess,
}) => {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [currentValue, setCurrentValue] = useState<number>(value as number);
  useEffect(() => {
    if (!inProcess && value !== null) {
      setCurrentValue(Number(value));
      return;
    }
  }, [value, inProcess]);
  useEffect(() => {
    if (inProcess && (currentValue || 0) <= 0) {
      handleProcess();
    }
  }, [currentValue, inProcess, handleProcess]);
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (inProcess) {
      timerRef.current = setInterval(() => {
        setCurrentValue((v) => {
          const nextValue = (v || 0) - 1;
          if (nextValue <= 0) {
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
            return nextValue;
          } else {
            return nextValue;
          }
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [inProcess]);
  return <div className={s.container}>{currentValue}</div>;
};
