import React, { useState } from "react";
import s from "./style.module.scss";
const imagesNumbers = Array.from({ length: 10 }, (_, i) => i + 1);
export const Gestures: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState(imagesNumbers[0]);
  const setSelectedImageNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedImg(Number(e.currentTarget.textContent));
  };
  return (
    <div className={s.container}>
      <div className={s.menu}>
        {imagesNumbers.map((i) => (
          <div className={s.menu__item}>
            <div className={s.menu__label}>
              <button onClick={setSelectedImageNumber} className={s.btn}>
                {i}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={s.field}>
        <img
          src={
            new URL(`./exercises/ex${selectedImg}.png`, import.meta.url).href
          }
          loading="lazy"
          alt={`ex${selectedImg + 1}.png`}
        />
      </div>
    </div>
  );
};
