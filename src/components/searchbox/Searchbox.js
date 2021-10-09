import React from "react"
import search from "assets/images/search.svg"

export default function Searchbox() {
  return (
    <div className="row">
      <div className="col-3 text-center pt-1">
        <img src={search} alt="" srcset="" />
      </div>
      <div className="col-9 pl-0">
        <input
          type="text"
          className="form-control shadow-none"
          placeholder="Job title or keyword"
        />
      </div>
    </div>
  )
}
