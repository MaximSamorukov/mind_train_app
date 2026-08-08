export const STAGES = [
  {
    name: "prepare",
    label: "Подготовка",
    exercises: [
      {
        name: "prepare_kamary",
        label: "Камары",
      },
    ],
  },
  {
    name: "exercisesForLips",
    label: "Упражнения для губ",
    exercises: [
      {
        name: "exercisesForLips_pencilInTheMouth",
        label: "Чтение с карандашом во рту",
      },
      {
        name: "exercisesForLips_trubochka",
        label: "Губы трубочкой",
      },
      {
        name: "exercisesForLips_trubochkaWithSmile",
        label: "Губы трубочкой и улыбка",
      },
      {
        name: "exercisesForLips_trubochkaCircle",
        label: "Круговые движения губ",
      },
    ],
  },
  {
    name: "exercisesForLaunge",
    label: "Упражнения для языка",
    exercises: [
      {
        name: "exercisesForLaunge_ex_1",
        label: "Кончик языка к уголкам губ",
      },
      {
        name: "exercisesForLaunge_ex_2",
        label: "Кончик языка к верхней и нижней губе",
      },
      {
        name: "exercisesForLaunge_ex_3",
        label: "Уколы языка в щеку",
      },
      {
        name: "exercisesForLaunge_ex_4",
        label: "Круговые движения по зубам",
      },
    ],
  },
  {
    name: "exercisesSpeech",
    label: "Речевые упражнения",
    exercises: [
      {
        name: "exercisesSpeech_ex_1",
        label: "Упражнение 1 с карандашом",
      },
      {
        name: "exercisesSpeech_ex_2",
        label: "Упражнение 1 без карандаша",
      },
      {
        name: "exercisesSpeech_ex_3",
        label: "Упражнение 2 с карандашом",
      },
      {
        name: "exercisesSpeech_ex_4",
        label: "Упражнение 3 без карандаша",
      },
    ],
  },
] as ItemType[];

export type ItemType = {
  name: string;
  label: string;
  exercises?: ItemType[];
};
