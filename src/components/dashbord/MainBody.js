import React, { Fragment } from "react"
import ProducerCard from "components/card/ProducerCard"

const producers = [
  {
    title: "Executive Producer",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Executive Producer",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Executive Producer",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Executive Producer",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Executive Producer",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Executive Producer",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
]

export default function MainBody() {
  return (
    <Fragment>
      <div className="bg-light">
        <div className="container pt-5">
          <div className="row">
            {producers?.map((producer) => (
              <div className="col-md-6 col-sm-12 col-xxl-4">
                <ProducerCard producer={producer} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
