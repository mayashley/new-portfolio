import React from "react"
import "../css/banner.css"

const Banner = ({ title, info, children }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{info}</p>
      <div className="btnWrapper">
      <button className="btnPrimary">Contact ME</button>
      </div>
      {children}
    </div>
  )
}
export default Banner

