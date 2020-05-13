import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { LinearProgress } from "@material-ui/core";

import AppRoutes from "routes/AppRoutes";

import useApi from "hooks/useApi";
import { AppProvider } from "stores";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { api, token, setToken } = useApi();
  window.setToken = setToken;
  useEffect(() => {
    //setIsLoading(true);
    api
      .get("/auth/me")
      .then(({ data }) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [token]);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <AppProvider value={user}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </AppProvider>
  );
}

export default App;
