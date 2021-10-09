import React, { Fragment } from "react"
import producerIcon from "assets/images/producer.svg"

export default function ProducerCard({ producer }) {
  return (
    <Fragment>
      <div className="mb-4 producer-card">
        <div className="row">
          <div className="col-12">
            <div className="row p-3">
              <div className="col-4 text-center">
                <img src={producerIcon} alt="" srcset="" />
              </div>
              <div className="col-8 p-0">
                <div className="col-12">
                  <h4>{producer.title}</h4>
                </div>
                <div className="col-12">
                  <p>{producer?.body}</p>
                </div>
                <div className="col-12 text-right">
                  <button className="btn btn-outline-danger">
                    {" "}
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
