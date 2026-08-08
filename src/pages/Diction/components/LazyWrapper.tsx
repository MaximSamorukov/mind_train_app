import React, { useState } from "react";

type LazyWrapperProps = {
  path: string;
};
export const LazyWrapper: React.FC<LazyWrapperProps> = ({ path }) => {
  const [Component, setComponent] = useState<React.ReactNode>(<></>);

  React.useEffect(() => {
    import(path).then((mod) => {
      setComponent(() => mod.default);
    });
  }, [path]);

  if (!Component) return <div>Загрузка...</div>;
  return <Component />;
};
