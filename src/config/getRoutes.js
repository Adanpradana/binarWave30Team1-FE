import { Route } from "react-router-dom";

export const getRoutes = (routes, layout) => {
  return routes.map((route) => {
    if (route.layout === layout) {
      return route.children.map((child) => (
        <Route path={child.path} element={child.element} key={child.name} />
      ));
    }
    return null;
  });
};
