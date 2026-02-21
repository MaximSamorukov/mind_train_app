import { createBrowserRouter, redirect } from "react-router";
import { menu } from "./constants";
import { App } from "../App";
import { Tables } from "../pages/Tables";
import { PaintedWords } from "../pages/PaintedWords";
import { Gestures } from "../pages/Gestures";

const componentMap: { [key: string]: React.ComponentType<any> } = {
  tables: Tables,
  painted_words: PaintedWords,
  gestures: Gestures,
};

const redirectToFirstItem = async () => {
  if (menu.length > 0) {
    return redirect(menu[0].path);
  }
  return redirect("/");
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: redirectToFirstItem,
      },
      ...menu.map((item) => {
        const Component = componentMap[item.path];
        return {
          path: item.path,
          Component: Component || (() => <div>Page not found</div>),
        };
      }),
    ],
  },
]);
