import React from "react"
import search from "assets/images/search.svg"
import select from "assets/images/select.svg"

export default function Search() {
  return (
    <div className="bg-light">
      <div className="container">
        <div
          className="producer-card"
          style={{
            position: "relative",
            height: "80px",
            bottom: "45px",
          }}
        >
          <div className="row">
            <div className="col-md-5 pt-3">
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
            </div>{" "}
            <div className="col-md-5 pt-3">
              <div className="row">
                <div className="col-3 text-center pt-1">
                  <img src={select} alt="" srcset="" />
                </div>
                <div className="col-9 pl-0">
                  <select name="" id="" className="form-control shadow-none">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                  </select>
                </div>
              </div>
            </div>{" "}
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
