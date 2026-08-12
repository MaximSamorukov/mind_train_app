import type React from "react";
import s from "./style.module.scss";

type StandardPageProps = {
  description: string;
  imgPath: string[];
  extension?: string;
};
export const StandardPage: React.FC<StandardPageProps> = ({
  description,
  imgPath,
  extension = "png",
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
            <div key={i} className={s.standardPageImage}>
              <img
                src={
                  new URL(
                    `../exercises/${i}/assets/${i}.${extension}`,
                    import.meta.url,
                  ).href
                }
                alt={i}
              />
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
