import { Nav } from "react-bootstrap";
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

export const gotoPage = (routes) => {
  const component = routes.flatMap((props) => {
    return props.children.map((prop) => {
      return <Nav.Link href={prop.path}>{prop.name}</Nav.Link>;
    });
  });
  return component.slice(0, 4);
};
