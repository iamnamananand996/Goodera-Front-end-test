import React from "react"
import select from "assets/images/select.svg"

export default function SimpleSelect() {
  return (
    <div className="row">
      <div className="col-3 text-center pt-1">
        <img src={select} alt="" srcset="" />
      </div>
      <div className="col-9 pl-0">
        <select name="" id="" className="form-control shadow-none">
          <option value="default" disabled selected>
            Select Option
          </option>
          <option value="1">Job One</option>
          <option value="2">Job Two</option>
          <option value="3">Job Three</option>
        </select>
      </div>
    </div>
  )
}
