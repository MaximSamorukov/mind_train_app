import type React from "react";
import s from "./style.module.scss";

type StandardPageProps = {
  description: string;
  imgPath: string;
};
export const StandardPage: React.FC<StandardPageProps> = ({
  description,
  imgPath,
}) => {
  return (
    <div className={s.standardPageContainer}>
      <div className={s.standardPageDescription}>{description}</div>
      <div className={s.standardPageImage}>
        <img src={imgPath} alt={imgPath} />
      </div>
    </div>
  );
};
