import React, { Fragment } from "react"
import Search from "components/search/Search"

export default function Header() {
  return (
    <Fragment>
      <div className="jumbotron-header ">
        <h1 className="display-4 header text-font">Find Your Dream Job</h1>
        <p className="lead header-paragraph text-font">
          Browse through thousands of full-time or part-time jobs near you
        </p>
      </div>
      <Search />
    </Fragment>
  )
}
