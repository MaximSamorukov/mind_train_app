import type React from "react";
import s from "./style.module.scss";

type StandardPageProps = {
  description: string;
  imgPath: string[];
};
export const StandardPage: React.FC<StandardPageProps> = ({
  description,
  imgPath,
}) => {
  return (
    <div className={s.standardPageContainer}>
      <div
        className={s.standardPageDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      {imgPath.length ? (
        <>
          {imgPath.map((i) => (
            <div className={s.standardPageImage}>
              <img src={i} alt={i} />
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
