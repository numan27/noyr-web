import { routeConstant } from "./constants";

const commonRoutes: any = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
  },
];

const publicRoutes: any = [...commonRoutes];

const privateRoutes: any = [
  ...commonRoutes,

];

export { privateRoutes, publicRoutes };
