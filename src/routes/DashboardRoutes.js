import React from "react"
import {
  Route
} from "react-router-dom"

import Patients from "views/Dashboard/Patients"

const routes = [
  {
    component: Patients,
    path: "/patients",
    exact: false
  }
]

export default ()=>(
  <>
    {routes.map((route, index)=>(
      <Route key={index} component={route.component} exact={route.exact} path={route.path} />
    ))}
  </>
)