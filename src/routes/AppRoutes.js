import React from "react"
import {
  Route
} from "react-router-dom"

import RoutesBuilder from "components/RoutesBuilder"

import Home from "views/Home"
import Signin from "views/Signin"
import Signup from "views/Signup"
import Dashboard from "views/Dashboard"

const routes = [
  {
    component: Home,
    path: "/",
    exact: true
  },
  {
    component: Signin,
    path: "/signin",
    exact: true
  },
  {
    component: Signup,
    path: "/signup",
    exact: true
  },
    {
    component: Dashboard,
    path: "/dashboard",
    exact: false,
    private: true
  },
]

export default ()=>(
  <RoutesBuilder routes={routes} />
)