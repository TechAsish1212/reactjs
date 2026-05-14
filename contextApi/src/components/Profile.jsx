import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const {user}=useContext(UserContext);

    if(!user){
        return(
            <div>Please Login</div>
        )
    }

    return <h1>Welcome {user.username}</h1>

  return (
    <div>Profile</div>
  )
}

export default Profile