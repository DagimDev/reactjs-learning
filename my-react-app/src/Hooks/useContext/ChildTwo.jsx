/* eslint-disable no-unused-vars */
import React from 'react'
import ChildThree from "./ChildThree";
const ChildTwo = (props) => {
  return (
    <ChildThree user={props.user} />
  )
}

export default ChildTwo