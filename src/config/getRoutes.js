import { Route } from "react-router-dom";

export const getRoutes = (routes) => {
  return routes.flatMap((route) =>
    route.children.map((child) => (
      <Route path={child.path} element={child.element} key={child.name} />
    ))
  );
};
