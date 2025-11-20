import React from 'react'
import ChildTwo from './ChildTwo'

function ChildOne(props) {
  return (
    <div><ChildTwo user={props.user} /></div>
  )
}

export default ChildOne