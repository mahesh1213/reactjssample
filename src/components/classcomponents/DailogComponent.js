import React from 'react'

export default function DailogComponent(props) {
  return (
    <div>
       <h4>DailogComponent Data (props children)</h4>
       <div>{props.children}</div>
    </div>
  )
}
