import React from "react"

const Arrow = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12} {...props}>
      <path fill="none" stroke="#5267DF" strokeWidth={3} d="M1 1l8 8 8-8" />
    </svg>
  )
}

export default Arrow
