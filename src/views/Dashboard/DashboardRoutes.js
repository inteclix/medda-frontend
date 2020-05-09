import React from "react"
import {
  BrowserRouter,
  Route
} from "react-router-dom"

import Test from "./Test"

const routes = [
  {
    component: Test,
    path: "/test",
    exact: false
  }
]

export default ()=>(
  <BrowserRouter>
    {routes.map((route, index)=>(
      <Route key={index} component={route.component} exact={route.exact} path={route.path} />
    ))}
  </BrowserRouter>
)