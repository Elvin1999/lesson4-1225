import React from 'react'

export default function Button({onClick,children}) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}
