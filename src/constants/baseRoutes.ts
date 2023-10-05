import { lazy } from "react";
import { BasePaths } from "../constants/paths";
import RootLayout from "../Layout/AppLayout";

const BaseRoutes = [
  {
    path: `${BasePaths.BASE}/*`,
    exact: true,
    component: lazy(() => import("../pages/routes")),
    Layout: RootLayout,
  },
];

export default BaseRoutes;
