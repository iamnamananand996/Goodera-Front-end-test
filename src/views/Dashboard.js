import React, { Fragment } from "react"
import Navbar from "components/navbar/Navbar"
import Header from "components/header/Header"
import MainBody from "components/dashbord/MainBody"

import "assets/css/All.css"

export default function Dashboard() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <MainBody />
    </Fragment>
  )
}
