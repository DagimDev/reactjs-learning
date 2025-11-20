import React, { useContext } from 'react'
import { MyContext } from './MyParent'
const ChildThree = () => {
    const myValue = useContext(MyContext);
  return (
    <div>Welcome : {myValue}</div>
  )
}

export default ChildThree