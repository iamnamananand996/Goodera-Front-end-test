import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Dashboard from "views/Dashboard"

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}
