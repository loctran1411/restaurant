import React from 'react'
import "../../styles/helmet.css";

const Helmet = (props) => {
    const title = 'Food ordering app - ' + props.title
  return (
    <div className="main-content">{props.children}</div>
  )
}

export default Helmet