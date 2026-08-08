import React, { useState } from "react";

type LazyWrapperProps = {
  path: string;
  name: string;
};
export const LazyWrapper: React.FC<LazyWrapperProps> = ({ path, name }) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  React.useEffect(() => {
    import(path).then((mod) => {
      setComponent(() => mod[name]);
    });
  }, [path, name]);

  if (!Component) return <div>Загрузка...</div>;
  return <Component />;
};
