import React from "react"
import {
  Route
} from "react-router-dom"

import Home from "views/Home"

const routes = [
  {
    component: Home,
    path: "/",
    exact: true
  }
]

export default ()=>(
  <>
    {routes.map((route, index)=>(
      <Route key={index} component={route.component} exact={route.exact} path={route.path} />
    ))}
  </>
)