import React from "react"
import RoutesBuilder from "components/RoutesBuilder"
import Patients from "views/Dashboard/Patients"

const routes = [
  {
    component: Patients,
    path: "/patients",
    exact: false,
    private: true
  }
]

export default ()=>(
  <RoutesBuilder routes={routes} />
)