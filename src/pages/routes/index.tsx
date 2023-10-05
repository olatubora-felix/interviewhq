import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Base from "..";
import Company from "../Company";
import Pricing from "../Pricing";
import HelpCenter from "../HelpCenter";
import HowItWorks from "../HowItWorks";
import { DashboardPath } from "../../constants/paths";

const BaseRouter: FC = () => {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Navigate to="/company" replace />} />
        <Route path={DashboardPath.COMPANY} element={<Company />} />
        <Route path={DashboardPath.PRICING} element={<Pricing />} />
        <Route path={DashboardPath.HOW_IT_WORKS} element={<HowItWorks />} />
        <Route path={DashboardPath.HELP_CENTER} element={<HelpCenter />} />

        <Route path="*" element={<Navigate to="/pageNotFound" replace />} />
      </Route>
    </Routes>
  );
};

export default BaseRouter;
