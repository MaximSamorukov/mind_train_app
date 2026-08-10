import React, { lazy, Suspense } from "react";

const exerciseComponents: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  Prepare_kamary: lazy(() => import("../exercises/Prepare_kamary")),
  ExercisesForLips_pencilInTheMouth: lazy(() => import("../exercises/ExercisesForLips_pencilInTheMouth")),
  ExercisesForLips_trubochka: lazy(() => import("../exercises/ExercisesForLips_trubochka")),
  ExercisesForLips_trubochkaWithSmile: lazy(() => import("../exercises/ExercisesForLips_trubochkaWithSmile")),
  ExercisesForLips_trubochkaCircle: lazy(() => import("../exercises/ExercisesForLips_trubochkaCircle")),
  ExercisesForLaunge_ex_1: lazy(() => import("../exercises/ExercisesForLaunge_ex_1")),
  ExercisesForLaunge_ex_2: lazy(() => import("../exercises/ExercisesForLaunge_ex_2")),
  ExercisesForLaunge_ex_3: lazy(() => import("../exercises/ExercisesForLaunge_ex_3")),
  ExercisesForLaunge_ex_4: lazy(() => import("../exercises/ExercisesForLaunge_ex_4")),
  ExercisesSpeech_ex_1: lazy(() => import("../exercises/ExercisesSpeech_ex_1")),
  ExercisesSpeech_ex_2: lazy(() => import("../exercises/ExercisesSpeech_ex_2")),
  ExercisesSpeech_ex_3: lazy(() => import("../exercises/ExercisesSpeech_ex_3")),
  ExercisesSpeech_ex_4: lazy(() => import("../exercises/ExercisesSpeech_ex_4")),
};

type LazyWrapperProps = {
  name: string;
};
export const LazyWrapper: React.FC<LazyWrapperProps> = ({ name }) => {
  const Component = exerciseComponents[name];

  if (!Component) return <div>Упражнение не найдено</div>;

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Component />
    </Suspense>
  );
};
