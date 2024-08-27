import React from 'react'
import "./Square.css"

const Square = (props) => {
  return (
    <div class="square  " onClick={props.onClick}>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square