import React from "react"
import Searchbox from "components/searchbox/Searchbox"
import SimpleSelect from "components/select/SimpleSelect"

export default function Search() {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="producer-card searchbar">
          <div className="row">
            <div className="col-md-5 pt-3">
              <Searchbox />
            </div>
            <div className="col-md-5 pt-3">
              <SimpleSelect />
            </div>
            <div className="col-md-2 pt-3">
              <button className="btn btn-danger btn-lg btn-block">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
