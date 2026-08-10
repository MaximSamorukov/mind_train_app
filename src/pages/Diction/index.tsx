import React, { Suspense, useState } from "react";
import cn from "classnames";
import s from "./style.module.scss";
import { STAGES, type ItemType } from "./constants";
import { LazyWrapper } from "./components/LazyWrapper";

export const Diction: React.FC = () => {
  const [currentStage, setCurrentState] = useState(STAGES[0]);
  const [currentExrcise, setCurrentExercise] = useState<ItemType>(
    STAGES[0].exercises?.[0] || ({} as ItemType),
  );
  const setSelectedCurrentStage = (stage: ItemType) => () => {
    setCurrentState(stage);
    setCurrentExercise(stage.exercises?.[0] || ({} as ItemType));
  };
  const setSelectedCurrentExercise = (exercise: ItemType) => () => {
    setCurrentExercise(exercise);
  };
  return (
    <div className={s.container}>
      <div className={s.menu}>
        {STAGES.map((i) => {
          const { name, label } = i;
          return (
            <div key={name} className={s.menu__item}>
              <div className={s.menu__label}>
                <button
                  onClick={setSelectedCurrentStage(i)}
                  className={cn(s.btn, {
                    [s.btn_active]: name === currentStage.name,
                  })}
                >
                  {label}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.menu}>
        {(currentStage?.exercises || []).map((i) => {
          const { name, label } = i;
          return (
            <div key={name} className={s.menu__item}>
              <div className={s.menu__label}>
                <button
                  onClick={setSelectedCurrentExercise(i)}
                  className={cn(s.btn, {
                    [s.btn_active]: name === currentExrcise.name,
                  })}
                >
                  {label}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.field}>
        <Suspense fallback={<div>loading</div>}>
          <LazyWrapper name={currentExrcise.name} />
        </Suspense>
      </div>
    </div>
  );
};
