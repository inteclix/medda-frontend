import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "views/Dashboard"; // Dashboard contain DashboardRoutes
import Others from "views/Others";

import { useAppStore } from "stores";

export default () => {
  const { user } = useAppStore();
  if (!user) {
    return <Dashboard />;
  } else {
    return <Others />;
  }
};
