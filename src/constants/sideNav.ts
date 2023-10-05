import { DashboardPath } from "./paths";

interface NavLInk {
  name: string;
  path: string;
}

const AppNav: NavLInk[] = [
  {
    name: "Company",
    path: DashboardPath.COMPANY,
  },
  {
    name: "How it works",
    path: DashboardPath.HOW_IT_WORKS,
  },

  {
    name: "Pricing",
    path: DashboardPath.PRICING,
  },
  {
    name: "Help Center",
    path: DashboardPath.HELP_CENTER,
  },
];

export { AppNav };
