export const STAGES = [
  {
    name: "prepare",
    label: "Подготовка",
    exercises: [
      {
        name: "Prepare_kamary",
        label: "Комары",
      },
    ],
  },
  {
    name: "exercisesForLips",
    label: "Упражнения для губ",
    exercises: [
      {
        name: "ExercisesForLips_pencilInTheMouth",
        label: "Чтение с карандашом во рту",
      },
      {
        name: "ExercisesForLips_trubochka",
        label: "Губы трубочкой",
      },
      {
        name: "ExercisesForLips_trubochkaWithSmile",
        label: "Губы трубочкой и улыбка",
      },
      {
        name: "ExercisesForLips_trubochkaCircle",
        label: "Круговые движения губ",
      },
    ],
  },
  {
    name: "exercisesForLaunge",
    label: "Упражнения для языка",
    exercises: [
      {
        name: "ExercisesForLaunge_ex_1",
        label: "Кончик языка к уголкам губ",
      },
      {
        name: "ExercisesForLaunge_ex_2",
        label: "Кончик языка к верхней и нижней губе",
      },
      {
        name: "ExercisesForLaunge_ex_3",
        label: "Уколы языка в щеку",
      },
      {
        name: "ExercisesForLaunge_ex_4",
        label: "Круговые движения по зубам",
      },
    ],
  },
  {
    name: "exercisesSpeech",
    label: "Речевые упражнения",
    exercises: [
      {
        name: "ExercisesSpeech_ex_1",
        label: "Упражнение 1 с карандашом",
      },
      {
        name: "ExercisesSpeech_ex_2",
        label: "Упражнение 1 без карандаша",
      },
      {
        name: "ExercisesSpeech_ex_3",
        label: "Упражнение 2 с карандашом",
      },
      {
        name: "ExercisesSpeech_ex_4",
        label: "Упражнение 2 без карандаша",
      },
    ],
  },
] as ItemType[];

export type ItemType = {
  name: string;
  label: string;
  exercises?: ItemType[];
};
