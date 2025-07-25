import React from 'react'

const Button = (props) => {
  return (
    <button onclick={props.handleClick}>{props.text}</button>
  )
}

export default Button