import React from "react"

export default function Scrollbar({ state }) {
  return (
    <div
      className="position-absolute top-0 left-0 vw-100"
      style={{ height: 4, zIndex: 1 }}
    >
      <div className="bg-primary h-100" style={{ width: state }} />
    </div>
  )
}
