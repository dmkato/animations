import React from 'react'
import "./style.scss"

export const SinCircle: React.FC = () => {
  return (
    <div className="container">
      <svg width="400px" height="300px">
        <circle cx="50" cy="50" r="50" fill="grey" />
      </svg>
    </div>
  )
}
