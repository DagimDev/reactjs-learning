import { useContext } from "react";

const Avatar = () => {
    const user = useContext(UserContext);
  return (
    <div>{user}</div>
  )
}

export default Avatar